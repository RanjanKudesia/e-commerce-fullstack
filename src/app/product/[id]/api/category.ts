// import { Hono } from "hono";
// import { db } from "@/firebase/config/firebaseConfig";
// import { collection, getDocs, query, where, limit } from "firebase/firestore";

// const app = new Hono();

// app.get("/product-category", async (c) => {
//   const colRef = collection(db, "categories");
  
//   // Get the screen size from the query parameter
//   const screenSize = parseInt(c.req.query("screenSize"), 10);
//   const limitValue = screenSize < 1200 ? 10 : 24; // Adjust limit based on screen size

//   try {
//     // Create a query to filter documents where category_level === 1 and apply the dynamic limit
//     const q = query(colRef, where("category_level", "==", 1), limit(limitValue));
//     const querySnapshot = await getDocs(q);
//     if (!querySnapshot.empty) {
//       const categoryData = querySnapshot.docs.map((doc) => {
//         const data = doc.data();
//         // console.log("Document data:", data); // Log the document data for debugging
//         return { category_name: data?.category_name };
//       });
//       return c.json(categoryData, 200); // Return filtered category data as JSON response with 200 status
//     } else {
//       console.log("No documents found in 'category' collection with category_level 1");
//       return c.json({ error: "No category found" }, 404); // No category found, return 404
//     }
//   } catch (error) {
//     console.error("Error fetching category:", error);
//     return c.json({ error: "Failed to fetch category" }, 500); // Error fetching category, return 500
//   }
// });

// export default app;


import { Hono } from "hono";
import { db } from "@/firebase/config/firebaseConfig";
import { collection, getDocs, query, where, limit } from "firebase/firestore";

const app = new Hono();

// Helper function to infer screen size from User-Agent
const getScreenSize = (userAgent: string): number => {
  if (/Mobi|Android/i.test(userAgent)) {
    return 600; // Mobile screen size approximation
  }
  return 1600; // Desktop screen size approximation
};

app.get("/product-category", async (c) => {
  const colRef = collection(db, "categories");
  
  // Get the User-Agent from the request headers
  const userAgent = c.req.header("User-Agent");
  if (!userAgent) {
    return c.json({ error: "User-Agent header not found" }, 400);
  }
  
  const screenSize = getScreenSize(userAgent);
  const limitValue = screenSize < 1200 ? 12 : 24; // Adjust limit based on screen size

  try {
    // Create a query to filter documents where category_level === 1 and apply the dynamic limit
    const q = query(colRef, where("category_level", "==", 1), limit(limitValue));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const categoryData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return { category_name: data?.category_name };
      });
      return c.json(categoryData, 200); // Return filtered category data as JSON response with 200 status
    } else {
      console.log("No documents found in 'category' collection with category_level 1");
      return c.json({ error: "No category found" }, 404); // No category found, return 404
    }
  } catch (error) {
    console.error("Error fetching category:", error);
    return c.json({ error: "Failed to fetch category" }, 500); // Error fetching category, return 500
  }
});

export default app;
