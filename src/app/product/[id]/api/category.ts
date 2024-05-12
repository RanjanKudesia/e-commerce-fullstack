import { Hono } from "hono";
import { db } from "@/firebase/config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const app = new Hono();

// Handling GET request to fetch all category
app.get("/product-category", async (c) => {
  const colRef = collection(db, "categories");

  try {
  const querySnapshot = await getDocs(colRef);
    if (!querySnapshot.empty) {
      const categoryData = querySnapshot.docs.map((doc) => doc.data());
      return c.json(categoryData, 200); // Return category data as JSON response with 200 status
    } else {
      console.log("No documents found in 'category' collection");
      return c.json({ error: "No category found" }, 404); // No category found, return 404
    }
  } catch (error) {
    console.error("Error fetching category:", error);
    return c.json({ error: "Failed to fetch category" }, 500); // Error fetching category, return 500
  }
});

export default app;
