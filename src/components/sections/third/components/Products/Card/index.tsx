import Image from "next/image";

type propsType = {
  prodImg: string;
  prodName: string;
  prodPrice: string;
  prodRating: string;
};
export default function ProductCard({
  prodImg,
  prodName,
  prodPrice,
  prodRating,
}: propsType) {
  return (
    <div className="flex flex-col md:w-[282px] rounded-[8px]  gap-[23px] md:gap-[16px]   h-auto bg-white">
      <div className=" md:h-[280px] rounded-[8px] rounded-tr-[8px] px-[32px] md:px-[51px] py-[20px] md:py-[50px] w-full justify-center items-center bg-[#ffffff] shadow-md ">
        <div className="flex  w-[90px] h-[90px] md:w-[180px] md:h-[180px]">
          <Image
            // src="/svgs/GREEN_JACKET_V2.svg"
            className="object-contain"
            src={prodImg}
            width={180}
            height={180}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-[8px] pb-[20px] md:pb-0  md:px-[10px] justify-start items-start ">
        <div className="flex flex-row  w-full justify-between">
          <div className=" text-[14px] w-[105px] md:w-[212px] md:text-[20px] text-[#0B0F0E] font-[600] leading-[19.6px] md:leading-[28px] tracking-[-0.2px] ">
            {/* Spy X family */}
            {prodName.split(" ").slice(0, 2).join(" ")}
            {prodName.split(" ").length > 2 && "..."}
            <br />
            <span className="text-[12px] md:text-[16px] leading-[19.2px] md:leading-[25.6px] text-[#818B9C]">
              Cimahi, Bandung
              {/* {prodDescription} */}
            </span>
          </div>
          <div className="text-[14px] md:text-[20px] font-[600] text-[#1D9E34] leading-[19.6px] md:leading-[28px] tracking-[-0.2px]  ">
            {/* $26 */}${prodPrice}
          </div>
        </div>
        <div className="flex flex-row gap-[4px]">
          <Image src="/svgs/ORANGE_STAR.svg" width={16} height={16} alt="" />
          <div className="text-[12px] md:text-[16px] text-[#0B0F0E] leading-[19.2px] md:leading-[25.6px]">
            {/* 4,3 */}
            {prodRating}
          </div>
          <Image src="/svgs/GRAY_DOT.svg" width={3} height={3} alt="" />
          <div className="text-[12px] md:text-[16px] text-[#0B0F0E] leading-[19.2px] md:leading-[25.6px]">
            723 Sold
            {/* {prodSold} Sold */}
          </div>
        </div>
      </div>
    </div>
  );
}
