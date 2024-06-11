"use client";
import { useGlobalState } from "@/context";
import TProducts from "./components/Products/index";
export default function Third() {
  const { fetchProducts } = useGlobalState();
  return (
    <div className="flex flex-col justify-center items-center pt-[100px] pb-[20px] md:pb-[80px] px-[] gap-[32px] md:gap-[52px] ">
      <div className="flex flex-col px-[30px] md:px-0 justify-center items-center gap-[16px] ">
        <div className="text-[24px] md:text-[38px] text-center font-[600] leading-[25.2px] md:leading-[53.2px] tracking-[-0.2px] ">
          Popular Product on Lenny
        </div>
        <div className="-mt-3 text-[14px] text-center tracking-tight md:tracking-normal   md:text-[18px] font-[400] leading-[22.4px] md:leading-[28.8px] ">
          Discover Lenny's top-selling item, loved by many.
        </div>
      </div>
      <TProducts />
      <div onClick={() => {
        fetchProducts();
      }} className="cursor-pointer flex px-[32px] py-[14px] justify-center items-center rounded-[8px] outline outline-[2px] outline-[#1E4C2F] md:w-[200px] md:h-[53px] text-[14px] md:text-[18px] font-[600] leading-[25.2px] tracking-[-0.2px] text-[#1E4C2F] hover:bg-[#1E4C2F] hover:text-white transition-all ease-in-out duration-300">

        Load More

      </div>
    </div>
  );
}
