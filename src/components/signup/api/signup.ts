import { Hono } from 'hono';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
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

        // Send a verification email
        await sendEmailVerification(userCredential.user);

        // Return a response indicating success and include some user info
        return c.json({
            message: "User created successfully. Please verify your email address.",
            uid: userCredential.user.uid,
            name: userCredential.user.displayName, // Confirm the name has been set
            emailVerified: userCredential.user.emailVerified // This will still be false at this point
        }, 201); // Set status code to 201 - Created
    } catch (error:unknown) {
        if (error instanceof Error) {
            console.error("Error during user creation and update:", error.message);
            return c.json(error, 400); // Send a 400 status code for client errors
        } else {
            console.error("Unexpected error during user creation");
            return c.json({ message: "Unexpected error during user creation" }, 500); // Send a 500 status code for server errors
        }
    }
});

export default app;
