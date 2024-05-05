import Image from "next/image";

export default function Fifth() {
  return (
    <div className="flex flex-col gap-[52px] justify-center px-[24px] md:px-[120px] pb-[60px] md:pb-[120px] ">
      <div className="flex flex-row justify-between items-center w-full ">
        <div className="text-[18px] md:text-[38px] font-[600] leading-[25.2px] md:leading-[53.2px] tracking-[-0.2px] ">
          Lenny’s Article
        </div>
        <div className="flex rounded-[8px] cursor-pointer px-[12px] py-[6px] md:w-[200px] justify-center items-center outline outline-[1px] outline-[#1E4C2F] text-[#1E4C2F] text-[18px] font-[600] tracking-[-0.2px] ">
          View Detail
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center  gap-[24px] ">
        <div className="flex flex-col gap-[16px]  ">
          <Image src="/pngs/ARTICLE1.png" width={384} height={280} alt="" />
          <div className="flex flex-col gap-[12px] md:w-[361px]">
            <div className="text-[16px] font-[400] leading-[25.6px] ">
              22 Dec 2022
            </div>
            <div className="text-[16px] font-[400] leading-[25.6px] ">
              <span className="text-[20px] font-[600] tracking-[-0.2px] ">
                Make your desk more neat and beautiful
              </span>
              <br />
              Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam
              scelerisque pharetra id. Maecenas diam eu amet cras
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]  ">
          <Image src="/svgs/IMAGE2.svg" width={384} height={280} alt="" />
          <div className="flex flex-col gap-[12px] md:w-[361px]">
            <div className="text-[16px] font-[400] leading-[25.6px] ">
              22 Dec 2022
            </div>
            <div className="text-[16px] font-[400] leading-[25.6px] ">
              <span className="text-[20px] font-[600] tracking-[-0.2px] ">
                What are the fashion trend in 2023?
              </span>
              <br />
              Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam
              scelerisque pharetra id. Maecenas diam eu amet cras
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]  ">
          <Image src="/pngs/ARTICLE2.png" width={384} height={280} alt="" />
          <div className="flex flex-col gap-[12px] md:w-[361px]">
            <div className="text-[16px] font-[400] leading-[25.6px] ">
              22 Dec 2022
            </div>
            <div className="text-[16px] font-[400] leading-[25.6px] ">
              <span className="text-[20px] font-[600] tracking-[-0.2px] ">
                Tips for Work Life Balance
              </span>
              <br />
              Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam
              scelerisque pharetra id. Maecenas diam eu amet cras
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
