import { Hono } from "hono";
import { db } from "@/firebase/config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const app = new Hono();

// Handling GET request to fetch all reviews
app.get("/product-reviews", async (c) => {
  const colRef = collection(db, "reviews");

  try {
  const querySnapshot = await getDocs(colRef);
    if (!querySnapshot.empty) {
      const reviewsData = querySnapshot.docs.map((doc) => doc.data());
      return c.json(reviewsData, 200); // Return reviews data as JSON response with 200 status
    } else {
      console.log("No documents found in 'reviews' collection");
      return c.json({ error: "No reviews found" }, 404); // No reviews found, return 404
    }
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return c.json({ error: "Failed to fetch reviews" }, 500); // Error fetching reviews, return 500
  }
});

export default app;
