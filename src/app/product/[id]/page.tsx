import MainImage from "./components/main-image";
import { Suspense } from "react";

export default function Product() {
  return (
    <Suspense fallback={<h1 className="w-full text-center">Loading...</h1>}>
      {/* <MainImage /> */}
    </Suspense>
  );
}
