import { Hono } from 'hono';
import { db } from '@/firebase/config/firebaseConfig';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';

const app = new Hono();

const PAGE_SIZE = 20; 

app.get('/product-reviews', async (c) => {
  const colRef = collection(db, 'reviews');
  const rating = c.req.query('rating'); // Get the rating from the query parameters
  let querySnapshot;

  try {
    let q;
    if (rating !== null && rating !== undefined) {
      // If rating is provided, filter reviews by rating and limit the number of documents
      q = query(colRef, where('rating', '==', parseInt(rating, 6)), limit(PAGE_SIZE));
    }
     if(rating === '0'){
      // If no rating is provided, fetch all reviews with a limit on the number of documents
      q = query(colRef, limit(PAGE_SIZE));
    }

    querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const reviewsData = querySnapshot.docs.map((doc) => doc.data());
      return c.json(reviewsData, 200); // Return reviews data as JSON response with 200 status
    } else {
      console.log("No documents found in 'reviews' collection");
      return c.json({ error: 'No reviews found' }, 404); // No reviews found, return 404
    }
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return c.json({ error: 'Failed to fetch reviews' }, 500); // Error fetching reviews, return 500
  }
});

export default app;
