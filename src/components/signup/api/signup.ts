import { Hono } from 'hono';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/config/firebaseConfig";

const app = new Hono();

app.post('/signup', async (c) => {
    try {
        const { email, password, name } = await c.req.json(); // Retrieve name along with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // Update the user profile
        await updateProfile(userCredential.user, {
            displayName: name // Set the displayName to the user's name
        });

        // Return a response indicating success and include some user info
        return c.json({
            message: "User created successfully",
            uid: userCredential.user.uid,
            name: userCredential.user.displayName // Confirm the name has been set
        }, 201); // Set status code to 201 - Created
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error during user creation and update:", error.message);
            return c.json({ error: error.message }, 400); // Send a 400 status code for client errors
        } else {
            console.error("Unexpected error during user creation and update");
            return c.json({ error: "Unexpected error during user creation and update" }, 500); // Send a 500 status code for server errors
        }
    }
});

export default app;
