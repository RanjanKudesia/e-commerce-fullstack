import { Suspense } from "react";
import HeadSection from "./components/head-section";
import ProductsSection from "./components/products-section";
import FilterSection from "./components/filter-section";
import Spinner from "@/components/loading-spinner";


export default function Search() {

    return (
        <Suspense fallback={<h1 className="w-full text-black font-bold"><Spinner /></h1>}>
            <div className="h-full w-full pt-[60px] pb-[120px] flex flex-col gap-[52px] px-5 md:px-[120px]">
                <HeadSection />
                <div className="flex gap-[32px]">
                    <FilterSection />
                    <ProductsSection />
                </div>
            </div>
        </Suspense>
    )
}