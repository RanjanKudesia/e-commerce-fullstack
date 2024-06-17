import DummyImage from "@/components/dummy-img-placeholder";
import Image from "next/image";
import Link from "next/link";

type propsType = {
  prodImg: string;
  prodName: string;
  prodPrice: string;
  prodRating: string;
  prodLink: string;
  prodRetailPrice: string;
};

function calculatePercentage(numerator: string, denominator: string): number {
  const num = parseInt(numerator, 10);
  const denom = parseInt(denominator, 10);

  if (isNaN(num) || isNaN(denom)) {
    throw new Error("Input values must be convertible to numbers");
  }

  if (denom === 0) {
    throw new Error("Denominator cannot be zero");
  }
  const result: number = Math.round((num / denom) * 100);
  return result;
}


export default function ProductCard({
  prodImg,
  prodName,
  prodPrice,
  prodRating,
  prodLink,
  prodRetailPrice,
}: propsType) {

  // Function to extract the first 3 words and add ellipsis if there are more words
  const getShortProductName = (name: any) => {
    const maxLength = 15; // Maximum number of characters allowed
    if (name.length > maxLength) {
      return name.slice(0, maxLength) + "...";
    }
    return name; // Return the full name if it's 25 characters or fewer
  };

  // Safe way to calculate percentage and handle errors
  let percentage = "";
  try {
    percentage =
      calculatePercentage(
        prodPrice.toString(),
        prodRetailPrice.toString()  //prodRetailPrice
      ) + "%"; // Convert to string and fix to 2 decimal places
  } catch (error) {
    console.error(error);
    percentage = "N/A"; // Handle error, perhaps display 'N/A' or similar
  }



  return (
    // <Link
    //   href={`/product/${prodLink}`}
    //   className="cursor-pointer flex flex-col md:w-[282px] rounded-[8px]  gap-[23px] md:gap-[16px] h-auto bg-white"
    // >
    //   <div className=" md:h-[280px] rounded-[8px] rounded-tr-[8px] px-[32px] md:px-[51px] py-[20px] md:py-[50px] w-full justify-center items-center bg-[#ffffff] shadow-md ">
    //     <div className="flex  w-[90px] h-[90px] md:w-[180px] md:h-[180px]">
    //       <Image
    //         // src="/svgs/GREEN_JACKET_V2.svg"
    //         className="object-contain"
    //         src={
    //           prodImg ===
    //             `"url" parameter is valid but upstream response is invalid`
    //             ? `/pngs/PRODUCT_PLACEHOLDER.png`
    //             : prodImg
    //         }
    //         width={180}
    //         height={180}
    //         alt="Image is not available for this product."
    //       />
    //     </div>
    //   </div>
    //   <div className="flex flex-col gap-[8px] pb-[20px] md:pb-0  md:px-[10px] justify-start items-start ">
    //     <div className="flex flex-row  w-full justify-between">
    //       <div className=" text-[14px] w-[105px] md:w-[212px] md:text-[20px] text-[#0B0F0E] font-[600] leading-[19.6px] md:leading-[28px] tracking-[-0.2px] ">
    //         {/* Spy X family */}
    //         {prodName.split(" ").slice(0, 2).join(" ")}
    //         {prodName.split(" ").length > 2 && "..."}
    //         <br />
    //         <span className="text-[12px] md:text-[16px] leading-[19.2px] md:leading-[25.6px] text-[#818B9C]">
    //           Cimahi, Bandung
    //           {/* {prodDescription} */}
    //         </span>
    //       </div>
    //       <div className="text-[14px] md:text-[20px] font-[600] text-[#1D9E34] leading-[19.6px] md:leading-[28px] tracking-[-0.2px]  ">
    //         {/* $26 */}Rs{prodPrice}
    //       </div>
    //     </div>
    //     <div className="flex flex-row gap-[4px]">
    //       <Image src="/svgs/ORANGE_STAR.svg" width={16} height={16} alt="" />
    //       <div className="text-[12px] md:text-[16px] text-[#0B0F0E] leading-[19.2px] md:leading-[25.6px]">
    //         {/* 4,3 */}
    //         {prodRating}
    //       </div>
    //       <Image src="/svgs/GRAY_DOT.svg" width={3} height={3} alt="" />
    //       <div className="text-[12px] md:text-[16px] text-[#0B0F0E] leading-[19.2px] md:leading-[25.6px]">
    //         723 Sold
    //         {/* {prodSold} Sold */}
    //       </div>
    //     </div>
    //   </div>
    // </Link>



    <Link href={`/product/${prodLink}`} className="w-full min-h-[220px] md:min-h-[200px] md:w-[280px] border-2 border-[#E4E9EE] rounded-[8px] ">
      <div className="relative px-2 md:px-5 py-0 pt-8 pb-3 md:py-10 h-fit flex flex-col transition-transform duration-300 hover:transform hover:scale-105">
        <div className="bg-white rounded-md p-1 absolute top-2 right-2 md:top-4 md:right-4 text-xs md:text-sm text-gray-600 flex items-center">
          {prodRating}{" "}
          <Image
            src="/assets/svgs/star.svg"
            alt="star"
            width={15}
            height={15}
            className="ml-1 w-[12px] h-[12px] md:w-[15px] md:h-[15px]"
          />
        </div>

        <div className="relative basis-1/2 w-full rounded-[8px] shadow-red-500 flex justify-center items-center">
          {/* <Image
            src={prodImg || "/assets/pngs/placeholder.png"}
            alt="Image is not available for this product."
            width={100}
            height={100}
            className="object-contain w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
          /> */}
          <DummyImage
            src={prodImg}
            alt="Image is not available for this product."
            fallbackSrc="/assets/pngs/placeholder.png"
            width={300}
            height={300}
            className="object-contain w-[100px] h-[100px] md:w-[200px] md:h-[200px]" />
        </div>
        <div className="basis-1/2 flex flex-col justify-between px-2 mt-3">
          <div className="text-xs md:text-base font-semibold pb-2 text-center">
            {getShortProductName(prodName)}
          </div>
          <div className="flex items-center gap-1 justify-center flex-wrap">
            <div className="text-xs md:text-sm flex text-gray-900 font-semibold">
              <span className="font-semibold">Rs. </span>
              {prodPrice}
            </div>

            <div className="text-[8px] md:text-xs text-gray-600">
              MRP:
              <span className="line-through">{prodRetailPrice}</span>
            </div>
            <div className="text-[8px] md:text-xs text-[#ff905a] w-full md:w-fit text-center">
              ({percentage} OFF)
            </div>
          </div>
        </div>
      </div>
    </Link>


  );
}
