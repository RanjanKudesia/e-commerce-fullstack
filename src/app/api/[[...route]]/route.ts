import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import signupRoute from "@/components/signup/api/signup";
import loginRoute from "@/components/login/api/login";

// export const runtime = 'edge';

const app = new Hono().basePath('/api')

// Handling GET request
app.get('/', (c) => {
  return c.json({
    message: 'Testing... api',
  })
})




app.route("/v1/auth",signupRoute);
app.route("/v1/auth",loginRoute);




















































// Export handlers for HTTP methods
export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);