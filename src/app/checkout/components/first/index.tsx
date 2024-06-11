import Image from "next/image";

export default function First() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center px-[24px] py-[32px] md:px-[120px] md:pt-[60px] md:pb-[52px] relative gap-[24px] ">
      <div className="absolute top-0 left-0 -z-10 min-w-full h-[333px] bg-[#F7F7F7]"></div>
      <div className="text-[16px]  font-[400] leading-[25.6px] tracking-[-0.2px] ">
        <span className="text-[24px] font-[600] leading-[33.6px]  ">
          Shopping Chart
        </span>
        <br />
        Showing your choices product
      </div>
    </div>
  );
}
