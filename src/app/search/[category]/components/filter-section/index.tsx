import BestFilter from "./components/best-filter"
import CategoryFilter from "./components/category-filter"
import PriceFilter from "./components/price-filter"







export default function FilterSection() {
    return (
        <div className="w-[278px] h-[1238px] rounded-[12px] border-2 border-[#1E4C2F] flex flex-col gap-[24px] p-[24px] ">
            <div className="text-[#0B0F0E] text-[20px] font-[600] text-start">Filter Option</div>
            <div className="w-full h-[1px] bg-[#1E4C2F]" />
            <BestFilter />
            <CategoryFilter />
            <PriceFilter />
        </div>
    )
}