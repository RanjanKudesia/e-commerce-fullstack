"use client";
import BestFilter from "./components/best-filter";
import CategoryFilter from "./components/category-filter";
import PriceFilter from "./components/price-filter";
import { useSearchState } from "../../context";
import { CgClose } from "react-icons/cg";

export default function FilterSection() {
    const { isFilterOpen, setIsFilterOpen } = useSearchState();

    function filterToggleHandler() {
        setIsFilterOpen(!isFilterOpen);
    }

    return (
        <div className={`absolute top-[70px] left-0 rounded-[5px] md:static md:top-0 md:left-0 bg-white z-10 w-[278px] md:rounded-[12px] border-2 border-[#E4E9EE] flex-col gap-[20px] md:gap-[24px] p-[24px] transition-all ease-in-out duration-300 ${isFilterOpen ? 'flex opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible md:flex'}`}>
            <div className="flex justify-between items-center">
                <div className="text-[#0B0F0E] text-[16px] md:text-[20px] font-[600] text-start">
                    Filter Option
                </div>
                <div className="md:hidden">
                    <CgClose className="text-xl" onClick={filterToggleHandler} />
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#E4E9EE]" />
            <BestFilter />
            <CategoryFilter />
            <PriceFilter />
        </div>
    );
}
