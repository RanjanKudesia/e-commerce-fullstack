import Image from "next/image";
import Link from "next/link";
import BlogCards from "./component/blogcards";

export default function Fifth() {
  return (
    <div className="w-full px-[24px] md:w-[1200px] md:px-[0px] mx-auto flex flex-col gap-[52px] justify-center items-center pb-[60px]">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="text-[24px] md:text-[38px] font-[600] leading-[25.2px] md:leading-[53.2px] tracking-[-0.2px] ">
          Lenny’s Article
        </div>
        <Link href="/articles">
          <button className="text-[#1E4C2F] border-2 border-[#1E4C2F] md:ml-2 px-5 md:px-10 py-3 w-full md:w-fit ml-2 text-[14px] md:text-[18px] rounded-md flex justify-center items-center font-semibold hover:bg-[#1E4C2F] hover:text-white transition-all ease-in-out duration-300">
            View All
          </button>
        </Link>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-center  gap-[24px] ">
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
      </div> */}
      <BlogCards />
    </div>
  );
}
