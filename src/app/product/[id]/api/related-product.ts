import { Hono } from 'hono';
import { db } from '@/firebase/config/firebaseConfig';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';

const app = new Hono();

// Define the reference to the 'productsv2' collection
const productsCollection = collection(db, 'productsv2');

// Function to fetch related products based on category and brand rating criteria
const getRelatedProducts = async (subcategory, productId, brandRatingThreshold = 3.0) => {
  try {
    // Query for related products in the same category with a higher brand rating than the threshold
    const relatedProductsQuery = query(
      productsCollection,
      where('category', '==', subcategory),
      where('brand_rating', '>', brandRatingThreshold),
      where('uniq_id', '!=', productId), // Ensure the main product is not included
      limit(4) // Limit to 4 related products
    );

    const relatedProductsSnapshot = await getDocs(relatedProductsQuery);

    // Extract related product data
    const relatedProducts = relatedProductsSnapshot.docs.map(doc => doc.data());
    return relatedProducts;
  } catch (error) {
    console.error('Error fetching related products:', error);
    return []; // Return empty array if an error occurs
  }
};

// API endpoint to handle GET request for related products based on a product ID
app.get('/related-product/:id', async (c) => {
  try {
    const productId = c.req.param('id');

    // Fetch the main product based on the provided ID to determine its category and brand rating
    const mainProductQuery = query(
      productsCollection,
      where('uniq_id', '==', productId)
    );
    const mainProductSnapshot = await getDocs(mainProductQuery);

    if (mainProductSnapshot.empty) {
      console.log('No product found for ID:', productId);
      return c.json({ error: 'Product not found' }, 404);
    }

    const mainProductData = mainProductSnapshot.docs[0].data();
    const relatedProducts = await getRelatedProducts(mainProductData.category, productId, mainProductData.brand_rating);

    // Return only the related products in the response
    return c.json({ relatedProducts }, 200);
  } catch (error) {
    console.error('Error handling related product request:', error);
    return c.json({ error: 'Failed to fetch related products' }, 500);
  }
});

export default app;
