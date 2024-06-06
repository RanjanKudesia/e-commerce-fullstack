"use client";
import { useGlobalState } from "@/context";
import Image from "next/image";
import { useState } from "react";

type propsType = {
  heading: string;
  description: string;
  imageURL: string;
  prodImg: string;
  prodName: string;
  prodDescription: string;
  prodRating: string;
  prodSold: number;
  imgPosRight: number;
  imgPosBottom: number;
};

export default function Card({
  heading,
  description,
  imageURL,
  prodImg,
  prodName,
  prodDescription,
  prodRating,
  prodSold,
  imgPosRight,
  imgPosBottom,
}: propsType) {
  const [isOpen, setIsOpen] = useState(false);

  // console.log(imgPosRight, imgPosBottom);

  // const { screenSize } = useGlobalState();
  // const isMobileView = screenSize < 600;
  // console.log(isMobileView);

  return (
    <div className="flex flex-col md:flex-row pt-[22px] md:pt-[100px] px-[24px] md:pl-[120px] min-h-[620px] bg-[#F7F7F7] pb-[100px] gap-[32px] relative">
      <div className="flex justify-center flex-col gap-[32px] w-[100%] md:w-[650px] z-10">
        <div className="flex justify-center flex-col gap-[16px] text-center md:text-left">
          <div className="text-black text-[28px] md:text-[58px] font-[600] leading-[39.2px] md:leading-[69.6px] tracking-tight ">
            {/* Upgrade Your Wardrobe With Our Collection */}
            {heading}
          </div>
          <div className="text-black text-[14px] md:text-[18px] font-[400] leading-[160%] tracking-tight w-[100%] md:w-[585px]">
            {/* Eget neque aenean viverra aliquam tortor diam nunc. Dis pellentesque
            lectus quis velit fusce aenean nunc dui consectetur. Eu lorem est
            ullamcorper nisl amet non mollis. */}
            {description}
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row gap-[16px]">
          <div className="flex rounded-[8px] cursor-pointer h-[53px] w-full md:w-[200px] justify-center items-center text-stone-50 bg-[#1E4C2F] text-[14px] md:text-[18px] font-[600] tracking-[-0.2px] hover:bg-white hover:text-[#1E4C2F] transition-all ease-in-out duration-300 hover:border-2 hover:border-[#1E4C2F]">
            Buy Now
          </div>
          <div className="flex rounded-[8px] cursor-pointer h-[53px] w-full md:w-[200px] justify-center items-center outline outline-[2px] outline-[#1E4C2F] text-[#1E4C2F] text-[14px] md:text-[18px] font-[600] tracking-[-0.2px] hover:bg-[#1E4C2F] hover:text-white transition-all ease-in-out duration-300">
            View Detail
          </div>
        </div> */}
      </div>
      <Image
        className={`md:absolute right-[0px] top-[0px] object-contain w-[826px] md:h-[620px] h-fit`}
        // className={`absolute right-[${imgPosRight}] bottom-[${imgPosBottom}]`}
        // src="/svgs/IMAGE1.svg"
        src={imageURL}
        width={827}
        height={620}
        alt=""
      />
      <div
        className="flex flex-col z-10"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Image
          // right-54 and top + 43
          className="absolute right-[50%] bottom-[35%] md:right-[457px] md:top-[125px] object-contain"
          src="/svgs/WHITE_DOT.svg"
          width={42}
          height={42}
          alt=""
        />
        <div className="md:hidden block">
          <div className="gap-[4px] pt-[4px] flex flex-col justify-center items-center w-[128px] h-[193px] absolute left-[27%] bottom-[10.5%]">
            <Image
              className=""
              src="/svgs/WHITE_LINES.svg"
              width={2}
              height={22}
              alt=""
            />
            <div className="flex flex-col w-full rounded-[8px]  h-[193px] bg-white">
              <div className="h-[128px] rounded-tl-[8px] rounded-tr-[8px] px-[15px] py-[12px] w-full justify-center items-center bg-[#F6F6F6]">
                <Image
                  //   src="/svgs/GREEN_JACKET_V2.svg"
                  src={prodImg}
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-[8px] py-[10px] px-[10px] justify-start items-start ">
                <div className="text-[12px] text-[#0B0F0E] font-[600] leading-[16.8px] tracking-[-0.2px] ">
                  {/* Green Jacket V2 */}
                  {prodName}
                  <br />
                  <span className="text-[9px] leading-[14.4px] text-[#818B9C]">
                    {/* Cimahi, Bandung */}
                    {prodDescription}
                  </span>
                </div>
                <div className="flex flex-row gap-[4px]">
                  <Image
                    src="/svgs/ORANGE_STAR.svg"
                    width={16}
                    height={16}
                    alt=""
                  />
                  <div className="text-[10px] text-[#0B0F0E] leading-[16px]">
                    {/* 4,3 */}
                    {prodRating}
                  </div>
                  <Image src="/svgs/GRAY_DOT.svg" width={3} height={3} alt="" />
                  <div className="text-[10px] text-[#0B0F0E] leading-[16px]">
                    {/* 723 Sold */}
                    {prodSold} Sold
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:block hidden">
          {isOpen && (
            <div
              className="cursor-pointer gap-[4px] pt-[4px] flex flex-col justify-center items-center w-[150px] h-[249px] absolute  right-[403px] top-[168px]"
              style={{
                transition: "opacity 3s",
                transitionDelay: isOpen ? "0.3s" : "0s",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <Image
                className=""
                src="/svgs/WHITE_LINES.svg"
                width={2}
                height={22}
                alt=""
              />
              <div className="flex flex-col w-full rounded-[8px]  h-[223px] bg-white">
                <div className="h-[144px] rounded-tl-[8px] rounded-tr-[8px] px-[15px] py-[12px] w-full justify-center items-center bg-[#F6F6F6]">
                  <Image
                    //   src="/svgs/GREEN_JACKET_V2.svg"
                    src={prodImg}
                    width={120}
                    height={120}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-[8px] py-[10px] px-[10px] justify-start items-start ">
                  <div className="text-[14px] text-[#0B0F0E] font-[600] leading-[19.6px] tracking-[-0.2px] ">
                    {/* Green Jacket V2 */}
                    {prodName}
                    <br />
                    <span className="text-[10px] leading-[16px] text-[#818B9C]">
                      {/* Cimahi, Bandung */}
                      {prodDescription}
                    </span>
                  </div>
                  <div className="flex flex-row gap-[4px]">
                    <Image
                      src="/svgs/ORANGE_STAR.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                    <div className="text-[10px] text-[#0B0F0E] leading-[16px]">
                      {/* 4,3 */}
                      {prodRating}
                    </div>
                    <Image
                      src="/svgs/GRAY_DOT.svg"
                      width={3}
                      height={3}
                      alt=""
                    />
                    <div className="text-[10px] text-[#0B0F0E] leading-[16px]">
                      {/* 723 Sold */}
                      {prodSold} Sold
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
