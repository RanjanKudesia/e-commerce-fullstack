import Image from "next/image";

export default function Fourth() {
  return (
    <div className="flex py-[80px] bg-white px-[24px] md:px-[120px] justify-center items-center ">
      <div className="flex flex-col md:flex-row rounded-[16px] py-[32px] px-[24px] md:px-[80px] gap-[32px] md:gap-[120px] bg-[#FCECE1] w-[327px] md:w-[1200px] h-[444px] md:h-[400px]  md:overflow-visible md:items-center">
        <Image
          className="h-[176px] w-[157px] md:h-[430px] md:w-[382px]"
          src="svgs/IPAD_AIR_2020.svg"
          width={382}
          height={430}
          alt=""
        />
        <div className="flex flex-col justify-start  gap-[32px]">
          <div className="flex flex-col gap-[16px] ">
            <div className="text-[18px] md:text-[38px] font-[600] leading-[25.2px] md:leading-[53.2px] tracking-[-0.2px] text-black">
              Ipad Air Gen 5
            </div>
            <div className="text-[14px] md:text-[18px] font-[400] leading-[22.4px] md:leading-[28.8px] ">
              Explore Lenny's bestseller: iPad Air Gen 5. Join countless satisfied customers and discover why it's the ultimate choice in tablets!
            </div>
          </div>

          <div className="flex flex-row gap-[13px] md:gap-[16px]">
            <div className="flex rounded-[8px] cursor-pointer h-[53px] w-[133px] md:w-[200px] justify-center items-center text-stone-50 bg-[#1E4C2F] text-[18px] font-[600] tracking-[-0.2px]">
              Buy $900
            </div>
            <div className="flex rounded-[8px] cursor-pointer h-[53px] w-[133px] md:w-[200px] justify-center items-center outline outline-[1px] outline-[#1E4C2F] text-[#1E4C2F] text-[18px] font-[600] tracking-[-0.2px] ">
              View Detail
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
