'use client';
import { useSearchState } from "../../context";
import Image from "next/image";
import { useState } from "react";

export default function HeadSection() {
    const { category,sortByFilter,setSortByFilter } = useSearchState();
    // const [sortFilter, setSortFilter] = useState<string>("Relevant products");
    const [sortOptionsVisible, setSortOptionsVisible] = useState(false);

    const handleSortChange = (sortOption: string) => {
        setSortByFilter(sortOption);
        setSortOptionsVisible(false);
    };

    return (
        <div className="w-full flex flex-col gap-[32px]">
            <div className="flex justify-start items-center gap-[8px]">
                <div className='text-[#1D9E34] text-[16px] font-[500]'>Home</div>
                <Image src='/assets/svgs/RIGHT_ARROW.svg' width='12' height='12' alt='right-arrow' />
                <div className='text-[#1D9E34] text-[16px] font-[500]'>{decodeURIComponent(category)}</div>
                <Image src='/assets/svgs/RIGHT_ARROW.svg' width='12' height='12' alt='right-arrow' />
            </div>
            <div className="flex justify-between items-center">
                <div className="basis-1/2 flex flex-col">
                    <div className='text-[#0B0F0E] text-[24px] font-[600]'>Showing products for "{decodeURIComponent(category)}"</div>
                    <div className='text-[#818B9C] text-[16px] font-[400]'>Showing 1-12 products</div>
                </div>
                <div className='basis-1/2 justify-end flex gap-[30px] relative'>
                    <div className="text-[#818B9C] text-[16px] font-[400]">Sort By:</div>
                    <div 
                        className='cursor-pointer' 
                        onClick={() => setSortOptionsVisible(!sortOptionsVisible)}
                    >
                        {sortByFilter}
                    </div>
                    {sortOptionsVisible && (
                        <div className="absolute top-full right-0 bg-white border border-gray-300 shadow-lg">
                            <div 
                                className="p-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleSortChange("Relevant products")}
                            >
                                Relevant products
                            </div>
                            <div 
                                className="p-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleSortChange("Price: Low to High")}
                            >
                                Price: Low to High
                            </div>
                            <div 
                                className="p-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleSortChange("Price: High to Low")}
                            >
                                Price: High to Low
                            </div>
                            <div 
                                className="p-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleSortChange("Rating")}
                            >
                                Rating
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
