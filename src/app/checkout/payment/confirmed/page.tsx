import Image from "next/image";
import Home from "./../../../page";
import Link from "next/link";

export default function Confirmed() {
  return (
    <div className="flex justify-center items-center h-svh">
      <div className="flex flex-col gap-[32px] justify-center items-center w-[]">
        <Image src="/svgs/TICK_CIRCLE.svg" width={138} height={138} alt="" />
        <div className="flex flex-col justify-center items-center gap-[12px]">
          <div className="text-[32px] font-[600] leading-[44.8px] tracking-[-0.2px] ">
            Your Payment is Succesfull
          </div>
          <div className="text-[16px] font-[400] leading-[25.6px] text-center ">
            Your payment will be proceed in 30 mins. If any problem please chat
            to customer service.
            <br />
            Detail information will included below.
          </div>
        </div>
        <div className="w-full flex flex-row gap-[16px] justify-center ">
          <Link
            href="/"
            className="w-[160px] h-[46px] rounded-[8px] flex justify-center items-center text-[16px] font-[600] leading-[22.4px] tracking-[-0.2px] bg-[#1E4C2F] text-white cursor-pointer  "
          >
            Back to Home
          </Link>
          <div className="w-[160px] h-[46px] rounded-[8px] flex justify-center items-center text-[16px] font-[600] leading-[22.4px] tracking-[-0.2px]  bg-[#E4E9EE] cursor-pointer ">
            Check Detail
          </div>
        </div>
      </div>
    </div>
  );
}
