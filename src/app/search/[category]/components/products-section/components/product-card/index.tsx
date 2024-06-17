import Image from "next/image";
import { Product } from "../../../../interfaces";
import Link from "next/link";
import DummyImage from "@/components/dummy-img-placeholder";


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

const getShortProductName = (name: any) => {
  const maxLength = 15; // Maximum number of characters allowed
  if (name.length > maxLength) {
    return name.slice(0, maxLength) + "...";
  }
  return name; // Return the full name if it's 25 characters or fewer
};

export default function ProductCard({ product }: { product: Product }) {
  // Safe way to calculate percentage and handle errors
  let percentage = "";
  try {
    percentage =
      calculatePercentage(
        product.discounted_price.toString(),
        product.retail_price.toString()
      ) + "%"; // Convert to string and fix to 2 decimal places
  } catch (error) {
    console.error(error);
    percentage = "N/A"; // Handle error, perhaps display 'N/A' or similar
  }

  const saving: number =
    parseInt(product.retail_price) - parseInt(product.discounted_price);

  // Calculate star rating as a percentage
  const brandRating = parseFloat(product.brand_rating);

  return (
    <div>
      <Link href={`/product/${product?.uniq_id}`}>
        <div className="relative px-2 md:px-5 py-0 pt-8 pb-3 md:py-10 w-full h-fit flex flex-col gap-[10px] md:gap-[16px] rounded-[8px] border-2 border-[#E4E9EE] transition-transform duration-300 hover:transform hover:scale-105">
          <div className="bg-white rounded-md p-1 absolute top-2 right-2 md:top-4 md:right-4 text-xs md:text-sm text-gray-600 flex items-center">
            {product.brand_rating}{" "}
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
              src={product.images[0] || "/assets/pngs/placeholder.png"}
              alt="product-image"
              width={300}
              height={300}
              className="object-contain w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
            /> */}
            <DummyImage
              src={product.images[0]}
              alt="Image is not available for this product."
              fallbackSrc="/assets/pngs/placeholder.png"
              width={500}
              height={500}
              className="object-contain w-[100px] h-[100px] md:w-[200px] md:h-[200px]" />
          </div>
          <div className="basis-1/2 flex flex-col justify-between px-2">
            <div className="text-xs md:text-base font-semibold pb-2 text-center">
              {getShortProductName(product.product_name)}
            </div>
            <div className="flex items-center gap-1 justify-center flex-wrap">
              <div className="text-xs md:text-sm flex text-gray-900 font-semibold">
                <span className="font-semibold">Rs. </span>
                {product.discounted_price},
              </div>

              <div className="text-[8px] md:text-xs text-gray-600">
                MRP:
                <span className="line-through">{product.retail_price}</span>
              </div>
              <div className="text-[8px] md:text-xs text-[#ff905a] w-full md:w-fit text-center">
                ({percentage} OFF)
              </div>
            </div>
            {/* <div className='mx-auto text-center border-2 border-[#1d9e34] text-[#1d9e34] w-max rounded text-sm font-medium p-2 my-2'>
                    Save ₹{saving}
                </div> */}
            {/* Star Rating */}
            {/* <div className="flex items-center justify-evenly gap-1">
                    {[...Array(5)].map((_, index) => (
                        <svg key={index} className={`h-5 w-5 ${index < Math.floor(brandRating) ? 'text-yellow-400' : index + 0.5 === brandRating ? 'text-yellow-500' : 'text-gray-400'} fill-current`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 1l2.6 6.4H18l-5.2 4.2L15.7 19 10 15.3 4.3 19l1.9-7.4L2 7.4h5.4L10 1z" />
                        </svg>
                    ))}
                    <div className="text-sm text-gray-600">{product.brand_rating}/5</div>
                </div> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
