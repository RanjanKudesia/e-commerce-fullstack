import TProducts from "./components/Products/index";
export default function Third() {
  return (
    <div className="flex flex-col justify-center items-center pt-[100px] pb-[80px] gap-[52px] ">
      <div className="flex flex-col justify-center items-center gap-[16px] ">
        <div className="text-[38px] font-[600] leading-[53.2px] tracking-[-0.2px] ">
          Popular Product on Lenny
        </div>
        <div className="text-[18px] font-[400] leading-[28.8px] ">
          Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
        </div>
      </div>
      <TProducts />
      <div className="cursor-pointer flex justify-center items-center rounded-[8px] outline outline-[1px] outline-[#1E4C2F] w-[200px] h-[53px] ">
        <div className="text-[18px] font-[600] leading-[25.2px] tracking-[-0.2px] text-[#1E4C2F] ">
          Load More
        </div>
      </div>
    </div>
  );
}
