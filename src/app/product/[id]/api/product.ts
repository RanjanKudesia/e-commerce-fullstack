import { Hono } from "hono";
import { db } from "@/firebase/config/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  orderBy,
} from "firebase/firestore";

const app = new Hono();

// Handling GET request
app.get("/get-details/:id", async (c) => {
  const id = c.req.param("id");
  const colRef = collection(db, "productsv2");
  const q = query(colRef, where("uniq_id", "==", id));

  try {
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0]; 
      return c.json(docSnap.data());
    } else {
      console.log("No such document!");
      return c.json({ error: "Document not found" }, 404);
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return c.json({ error: "Failed to fetch document" }, 500);
  }
});

app.get("/get-products", async (c) => {
  const colRef = collection(db, "productsv2");

  try {
    // Add a where clause to filter products by brand_rating greater than 4.5
    const q = query(colRef, where("brand_rating", ">", "4.0"));

    // Limit the number of results to 10 using the limit method on the query object
    const limitedQuery = query(q, limit(8));

    const querySnapshot = await getDocs(limitedQuery);
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return c.json(products);
  } catch (error) {
    console.error("Error fetching documents:", error);
    return c.json({ error: "Failed to fetch documents" }, 500);
  }
});

export default app;
