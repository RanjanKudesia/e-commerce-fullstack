import { Hono } from 'hono'
import { db } from "@/firebase/config/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const app = new Hono()

// Handling GET request
app.get('/get-details/:id', async (c) => {
  const id = c.req.param('id');
  const colRef = collection(db, "productsv2");
  const q = query(colRef, where("uniq_id", "==", id));

  try {
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0]; // Assuming 'id' is unique and only one doc should match
      console.log("Document data:", docSnap.data());
      return c.json(docSnap.data());
    } else {
      console.log("No such document!");
      return c.json({ error: "Document not found" }, 404);
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return c.json({ error: "Failed to fetch document" }, 500);
  }
})

export default app;
