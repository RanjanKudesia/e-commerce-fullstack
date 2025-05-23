'use client';
import { useSearchState } from "../../context";
import Image from "next/image";
import { useState } from "react";

export default function HeadSection() {
    const { category, sortByFilter, setSortByFilter, setIsFilterOpen, isFilterOpen } = useSearchState();
    // const [sortFilter, setSortFilter] = useState<string>("Relevant products");
    const [sortOptionsVisible, setSortOptionsVisible] = useState(false);

    const handleSortChange = (sortOption: string) => {
        setSortByFilter(sortOption);
        setSortOptionsVisible(false);
    };

    function filterToggleHandler() {
        setIsFilterOpen(!isFilterOpen);
        // console.log(isFilterOpen);
    }

    return (
        <div className="w-full flex flex-col gap-[32px]">
            <div className="flex justify-start items-center gap-[8px]">
                <div className='text-[#1D9E34] text-[16px] font-[500]'>Home</div>
                <Image src='/assets/svgs/RIGHT_ARROW.svg' width='12' height='12' alt='right-arrow' />
                <div className='text-[#1D9E34] text-[16px] font-[500]'>{decodeURIComponent(category)}</div>
                <Image src='/assets/svgs/RIGHT_ARROW.svg' width='12' height='12' alt='right-arrow' />
            </div>
            <div>

            </div>
            <div className="flex justify-between md:items-center items-start flex-col md:flex-row">
                <div className="basis-1/2 flex flex-col mb-5 md:mb-0">
                    <div className='text-[#0B0F0E] text-[18px] md:text-[24px] font-[600]'>Showing products for "{decodeURIComponent(category)}"</div>
                    <div className='text-[#818B9C] text-[14px] md:text-[16px] font-[400]'>Showing 1-12 products</div>
                </div>
                <div className="w-[100%] basis-1/2 flex justify-between items-center md:justify-end">


                    <div className='justify-end items-center flex gap-[10px] md:gap-[30px] relative border-2 md:border-0 rounded-md px-2 md:px-0'>
                        <div className="md:text-[#818B9C] text-black text-[12px] md:text-[16px] font-[400] py-0 md:py-3">Sort By:</div>
                        <div
                            className='cursor-pointer py-3 px-0 md:py-3 md:px-5 rounded-md border-0 md:border-2 text-[12px] md:text-[16px]'
                            onClick={() => setSortOptionsVisible(!sortOptionsVisible)}
                        >
                            {sortByFilter}
                        </div>
                        {sortOptionsVisible && (
                            <div className="absolute top-full right-0 bg-white border border-gray-300 shadow-lg z-10 p-0 md:p-2">
                                <div
                                    className="p-2 cursor-pointer hover:bg-gray-100 text-[12px] md:text-[16px]"
                                    onClick={() => handleSortChange("Relevant products")}
                                >
                                    Relevant products
                                </div>
                                <div
                                    className="p-2 cursor-pointer hover:bg-gray-100 text-[12px] md:text-[16px]"
                                    onClick={() => handleSortChange("Price: Low to High")}
                                >
                                    Price: Low to High
                                </div>
                                <div
                                    className="p-2 cursor-pointer hover:bg-gray-100 text-[12px] md:text-[16px]"
                                    onClick={() => handleSortChange("Price: High to Low")}
                                >
                                    Price: High to Low
                                </div>
                                <div
                                    className="p-2 cursor-pointer hover:bg-gray-100 text-[12px] md:text-[16px]"
                                    onClick={() => handleSortChange("Rating")}
                                >
                                    Rating
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="border-2 p-[10px] md:hidden rounded-md" onClick={filterToggleHandler}>
                        <Image src="/assets/svgs/filter.svg" alt="filter-icon" width={15} height={15} />
                    </div>
                </div>


            </div>
        </div>
    );
}
