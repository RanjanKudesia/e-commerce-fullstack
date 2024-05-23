import TProducts from "./components/Products/index";
export default function Third() {
  return (
    <div className="flex flex-col justify-center items-center pt-[100px] pb-[20px] md:pb-[80px] px-[] gap-[32px] md:gap-[52px] ">
      <div className="flex flex-col px-[30px] md:px-0 justify-center items-center gap-[16px] ">
        <div className="text-[18px] md:text-[38px] font-[600] leading-[25.2px] md:leading-[53.2px] tracking-[-0.2px] ">
          Popular Product on Lenny
        </div>
        <div className="-mt-3 text-[14px] text-center tracking-tight md:tracking-normal   md:text-[18px] font-[400] leading-[22.4px] md:leading-[28.8px] ">
          Discover Lenny's top-selling item, loved by many.
        </div>
      </div>
      <TProducts />
      <div className="cursor-pointer flex px-[32px] py-[14px] justify-center items-center rounded-[8px] outline outline-[1px] outline-[#1E4C2F] md:w-[200px] md:h-[53px] ">
        <div className="text-[18px] font-[600] leading-[25.2px] tracking-[-0.2px] text-[#1E4C2F] ">
          Load More
        </div>
      </div>
    </div>
  );
}
