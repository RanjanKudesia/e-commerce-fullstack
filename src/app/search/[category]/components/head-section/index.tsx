'use client';
import { useSearchState } from "../../context";
import Image from "next/image";


export default function HeadSection() {

    const { products, category } = useSearchState();
    console.log(products, category)

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
                    <div className='text-[#0B0F0E] text-[24px] font-[600]'>Showing products for "{'Gaming Gear'}"</div>
                    <div className='text-[#818B9C] text-[16px] font-[400]'>Showing 1-60 products</div>
                </div>
                <div className='basis-1/2 justify-end flex gap-[30px]'>
                    <div className="text-[#818B9C] text-[16px] font-[400]">Sort By:</div>
                    <div className=''>Relevent products</div>
                    <div>{'[]'}</div>
                </div>
            </div>
        </div>
    )
}