import MainImage from "./components/main-image";
import { Suspense } from "react";
import FirstSec from "./components/first";
import SecondSec from "./components/second";
import ThirdSec from "./components/third";

export default function Product() {
  return (
    <Suspense fallback={<h1 className="w-full text-center">Loading...</h1>}>
      <div className="xl:px-40 md:py-12 px-5 py-5">
        <FirstSec />
        <SecondSec />
        <ThirdSec />
      </div>
    </Suspense>
  );
}
