import { Hono } from 'hono';
import { db } from "@/firebase/config/firebaseConfig";
import { collection, query, where, getDocs, limit } from "firebase/firestore";

const app = new Hono();

// API endpoint to fetch products by category
// app.post('/products/:category', async (c) => {
//   const category = c.req.param('category');
//   const body = await c.req.json();
//   const { branded, above4stars, discount } = c.req.query();
//   const { subCategory } = body; // Extract subCategory from the request body

//   try {
//     // Start with a basic query that filters by category
//     let productsQuery = query(collection(db, 'productsv2'), where('category', '==', category));

//     // Filter by subCategory if provided
//     if (subCategory) {
//       productsQuery = query(productsQuery, where('subcategory', '==', subCategory));
//     }

//     // Apply additional filters based on query parameters
//     if (branded === 'true') {
//       productsQuery = query(productsQuery, where('brand', '!=', ''));
//     }
//     if (above4stars === 'true') {
//       // Convert brand_rating to number if stored as string
//       productsQuery = query(productsQuery, where('brand_rating', '>=', '4'));
//     }
//     if (discount === 'true') {
//       // Assumes discounted_price and retail_price are directly comparable; adjust as needed
//       productsQuery = query(productsQuery, where('discounted_price', '<', 'retail_price'));
//     }

//     // Limit the number of results
//     productsQuery = query(productsQuery, limit(12));

//     const querySnapshot = await getDocs(productsQuery);
//     if (querySnapshot.empty) {
//       return c.json({ message: 'No products found in this category' });
//     }

//     const products = querySnapshot.docs.map(doc => doc.data());

//     return c.json(products);
//   } catch (error) {
//     console.error('Error retrieving products:', error);
//     return c.json({ error: 'Error retrieving products' }, 500);
//   }
// });


app.post('/products/:category', async (c) => {
  const category = c.req.param('category');
  const body = await c.req.json();
  const { branded, above4stars, discount, priceFilter } = c.req.query();
  const { subCategory } = body; // Extract subCategory from the request body

  try {
    // Start with a basic query that filters by category
    let productsQuery = query(collection(db, 'productsv2'), where('category', '==', category));

    // Filter by subCategory if provided
    if (subCategory) {
      productsQuery = query(productsQuery, where('subcategory', '==', subCategory));
    }

    // Apply additional filters based on query parameters
    if (branded === 'true') {
      productsQuery = query(productsQuery, where('brand', '!=', ''));
    }
    if (above4stars === 'true') {
      // Convert brand_rating to number if stored as string
      productsQuery = query(productsQuery, where('brand_rating', '>=', '4'));
    }
    if (discount === 'true') {
      // Assumes discounted_price and retail_price are directly comparable; adjust as needed
      productsQuery = query(productsQuery, where('discounted_price', '<', 'retail_price'));
    }

    // Apply price filter
    if (priceFilter) {
      switch (priceFilter) {
        case 'under50':
          productsQuery = query(productsQuery, where('retail_price', '<', '50'));
          break;
        case '50to100':
          productsQuery = query(productsQuery, where('retail_price', '>=', '50'), where('retail_price', '<=', '100'));
          break;
        case '100to200':
          productsQuery = query(productsQuery, where('retail_price', '>=', '100'), where('retail_price', '<=', '200'));
          break;
        case 'above200':
          productsQuery = query(productsQuery, where('retail_price', '>', '200'));
          break;
        default:
          break;
      }
    }

    // Limit the number of results
    productsQuery = query(productsQuery, limit(12));

    const querySnapshot = await getDocs(productsQuery);
    if (querySnapshot.empty) {
      return c.json({ message: 'No products found in this category' });
    }

    const products = querySnapshot.docs.map(doc => doc.data());

    return c.json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    return c.json({ error: 'Error retrieving products' }, 500);
  }
});


// API endpoint to fetch child categories of a given category by name
app.get('/children-categories/:category', async (c) => {
  const categoryName = c.req.param('category');

  try {
    // Query to find the category with the given name
    const categoriesQuery = query(collection(db, 'categories'), where('category_name', '==', categoryName));
    const querySnapshot = await getDocs(categoriesQuery);
    if (querySnapshot.empty) {
      return c.json({ message: 'Category not found' });
    }

    // Assuming the first document found is the correct one (unique category names)
    const categoryDocument = querySnapshot.docs[0];
    const categoryData = categoryDocument.data();

    // Check if the 'children' field exists and is an array
    if (categoryData.children && Array.isArray(categoryData.children)) {
      return c.json({ subCategories: categoryData.children });
    } else {
      return c.json({ message: 'No child categories found' });
    }
  } catch (error) {
    console.error('Error retrieving category:', error);
    return c.json({ error: 'Error retrieving category' }, 500);
  }
});



export default app;
