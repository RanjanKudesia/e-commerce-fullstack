import { Hono } from 'hono';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config/firebaseConfig";
import jwt from 'jsonwebtoken';

const app = new Hono();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

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

        // Generate JWT token
        const token = jwt.sign(
            {
                uid: userCredential.user.uid,
                email: userCredential.user.email
            },
            JWT_SECRET,
            { expiresIn: '7d' } // Token expires in 7 days
        );

        // Return a response indicating successful login and include some user info and token
        return c.json({
            message: "Login successful",
            uid: userCredential.user.uid,
            name: userCredential.user.displayName, // Include the user's name if available
            emailVerified: userCredential.user.emailVerified, // Confirm that the email is verified
            token // Include the JWT token in the response
        }, 200); // Set status code to 200 - OK
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error during login:", error.message);
            return c.json({ message: error.message }, 401); // Send a 401 status code for authentication errors
        } else {
            console.error("Unexpected error during login");
            return c.json({ message: "Unexpected error during login" }, 500); // Send a 500 status code for server errors
        }
    }
});

export default app;
