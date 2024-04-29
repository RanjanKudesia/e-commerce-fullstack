import { Hono } from 'hono';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config/firebaseConfig";

const app = new Hono();

// Login endpoint
app.post('/login', async (c) => {
    try {
        const { email, password } = await c.req.json(); // Retrieve email and password from request
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // Check if the user's email is verified
        if (!userCredential.user.emailVerified) {
            return c.json({
                message: "Please verify your email address to proceed",
            }, 403); // Set status code to 403 - Forbidden
        }

        // Return a response indicating successful login and include some user info
        return c.json({
            message: "Login successful",
            uid: userCredential.user.uid,
            name: userCredential.user.displayName, // Include the user's name if available
            emailVerified: userCredential.user.emailVerified // Confirm that the email is verified
        }, 200); // Set status code to 200 - OK
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error during login:", error.message);
            return c.json(error, 401); // Send a 401 status code for authentication errors
        } else {
            console.error("Unexpected error during login");
            return c.json({ message: "Unexpected error during login" }, 500); // Send a 500 status code for server errors
        }
    }
});

export default app;
