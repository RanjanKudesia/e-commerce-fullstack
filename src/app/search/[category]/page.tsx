import { Suspense } from "react";
import HeadSection from "./components/head-section";
import Products from "./components/products-section";



export default function Search() {

    return (
        <Suspense fallback={<h1 className="w-full text-black font-bold">Loading...</h1>}>
            <div className="h-full w-full pt-[60px] pb-[120px] flex flex-col gap-[52px] px-[120px]">
                <HeadSection />
                <div className="flex gap-[32px] mt-[52px]">
                    <Products />
                </div>
            </div>
        </Suspense>
    )
}