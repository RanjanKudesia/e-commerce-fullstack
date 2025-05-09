import { Hono } from "hono";
import { handle } from "hono/vercel";
import signupRoute from "@/components/signup/api/signup";
import loginRoute from "@/components/login/api/login";
import productsRoute from "@/app/product/[id]/api/product";
import searchRoute from "@/app/search/[category]/api/search";
import reviewsRoute from "@/app/product/[id]/api/review";
import relatedProductRoute from "@/app/product/[id]/api/related-product";
import productCategoryRoute from "@/app/product/[id]/api/category";

// export const runtime = 'edge';

const app = new Hono().basePath("/api");

// Handling GET request
app.get("/", (c) => {
  return c.json({
    message: "Testing... api",
  });
});

app.route("/v1/auth",  signupRoute);
app.route("/v1/auth",  loginRoute);
app.route("/v1/product", productsRoute);
app.route("/v1/search", searchRoute);
app.route("/v1", reviewsRoute);
app.route("/v1", relatedProductRoute);
app.route("/v1", productCategoryRoute);

















































app.route("/v1/product", productsRoute);
app.route("/v1", reviewsRoute);
app.route("/v1", relatedProductRoute);
app.route("/v1", productCategoryRoute);



// Export handlers for HTTP methods
export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
