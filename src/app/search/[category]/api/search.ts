import { Hono } from 'hono'
import { db } from "@/firebase/config/firebaseConfig";
import { collection, query, where, getDocs, limit } from "firebase/firestore";

const app = new Hono();

// API endpoint to fetch products by category
app.get('/products/:category', async (c) => {
  const category = c.req.param('category');
  console.log(category);
  try {
    const productsQuery = query(collection(db, 'productsv2'), where('category', '==', category),limit(12));
    const querySnapshot = await getDocs(productsQuery);

    if (querySnapshot.empty) {
      return c.json({ message: 'No products found in this category' });
    }

    const products = querySnapshot.docs.map(doc => {
      const product = doc.data();
      // Optionally, transform the images array if needed
    //   product.images = product.images.map(url => ({ url }));
      return product;
    });

    return c.json(products);
  } catch (error) {
    console.error('Error retrieving products:', error);
    return c.json({ error: 'Error retrieving products' }, 500);
  }
});

export default app;
