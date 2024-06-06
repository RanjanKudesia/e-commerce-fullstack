import Image from "next/image";
import Link from "next/link";

export default function Fourth() {
  return (
    <div className="w-full px-[24px] mx-auto flex pt-[80px] pb-[160px] bg-white md:px-[120px] justify-center items-center ">
      <div className="flex justify-center items-center md:justify-start flex-col md:flex-row rounded-[16px] py-[32px] px-[24px] md:px-[80px] gap-[32px] md:gap-[120px] bg-[#FCECE1] w-full md:w-[1200px] h-[650px] md:h-[400px] md:overflow-visible">
        <Image
          className="h-[250px] w-[250px] md:h-[430px] md:w-[382px] object-contain"
          src="/pngs/Headset.png"
          width={382}
          height={430}
          alt=""
        />
        <div className="w-full px-5 md:px-0 flex flex-col justify-start gap-[32px]">
          <div className="flex justify-center items-center md:justify-start md:items-start flex-col gap-[16px] ">
            <div className="text-[24px] md:text-[38px] text-center md:text-left font-[600] leading-[25.2px] md:leading-[53.2px] tracking-[-0.2px] text-black">
              Steelseries Siberia 200 Wired Headset

            </div>
            <div className="text-[14px] md:text-[18px] font-[400] leading-[22.4px] md:leading-[28.8px] text-center md:text-left ">
              Buy Steelseries Siberia 200 Wired Headset only for Rs. 5,999 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!...

            </div>
          </div>

          <div className="flex justify-center items-center md:justify-start md:items-start flex-row gap-[13px] md:gap-[16px]">
            <Link href="/product/de16889237b5e4d3a1af8b5f7a97b0d5" className="flex rounded-[8px] cursor-pointer h-[53px] w-[133px] md:w-[200px] justify-center items-center text-stone-50 bg-[#1E4C2F] text-[14px] md:text-[18px] font-[600] tracking-[-0.2px] hover:bg-transparent hover:text-[#1E4C2F] transition-all ease-in-out duration-300 hover:border-2 hover:border-[#1E4C2F]">
              Buy Now
            </Link>
            <Link href="/product/de16889237b5e4d3a1af8b5f7a97b0d5#detailProduct" className="flex rounded-[8px] cursor-pointer h-[53px] w-[133px] md:w-[200px] justify-center items-center outline outline-[2px] outline-[#1E4C2F] text-[#1E4C2F] text-[14px] md:text-[18px] font-[600] tracking-[-0.2px] hover:bg-[#1E4C2F] hover:text-white transition-all ease-in-out duration-300">
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
