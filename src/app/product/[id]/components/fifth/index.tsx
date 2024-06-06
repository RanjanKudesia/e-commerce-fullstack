"use client";
import Image from "next/image";
import { useProductState } from "../../context";
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

export default function FifthSec() {
    const { relatedProducts, product } = useProductState();

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
                product.discounted_price.toString(),
                product.retail_price.toString()
            ) + "%"; // Convert to string and fix to 2 decimal places
    } catch (error) {
        console.error(error);
        percentage = "N/A"; // Handle error, perhaps display 'N/A' or similar
    }



    return (
        <div id="relatedProduct" className="px-3">
            <div className="w-[100%] flex justify-between items-center mb-10 md:mb-5">
                <h3 className="font-semibold text-lg mb-0 md:mb-5">Related Product</h3>

                <Link href={`/search/${product?.category}`} className="text-[#1E4C2F] border-2 border-[#1E4C2F] md:ml-2 p-2 md:px-4 w-fit ml-2 text-sm md:text-base rounded-md flex justify-center items-center font-semibold hover:bg-[#1E4C2F] hover:text-white transition-all ease-in-out duration-300">
                    View Detail
                </Link>

            </div>

            <div className="w-full flex items-center flex-wrap md:flex-nowrap gap-[16px]">
                {relatedProducts && relatedProducts.length > 0 ? (
                    relatedProducts.map((relatedProduct) => (
                        <Link href={`/product/${relatedProduct?.uniq_id}`} className="w-[47%] min-h-[220px] md:min-h-[200px] md:w-full border-2 border-[#E4E9EE] rounded-[8px] ">
                            <div className="relative px-2 md:px-5 py-0 pt-8 pb-3 md:py-10 h-fit flex flex-col transition-transform duration-300 hover:transform hover:scale-105">
                                <div className="bg-white rounded-md p-1 absolute top-2 right-2 md:top-4 md:right-4 text-xs md:text-sm text-gray-600 flex items-center">
                                    {relatedProduct.brand_rating}{" "}
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
                                        src={relatedProduct.images[0] || "/assets/pngs/placeholder.png"}
                                        alt="Image is not available for this product."
                                        width={100}
                                        height={100}
                                        className="object-contain w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
                                    /> */}
                                    <DummyImage
                                        src={relatedProduct.images[0]}
                                        alt="Image is not available for this product."
                                        fallbackSrc="/assets/pngs/placeholder.png"
                                        width={100}
                                        height={100}
                                        className="object-contain w-[100px] h-[100px] md:w-[200px] md:h-[200px]" />
                                </div>
                                <div className="basis-1/2 flex flex-col justify-between px-2 mt-3">
                                    <div className="text-xs md:text-base font-semibold pb-2 text-center">
                                        {getShortProductName(relatedProduct.product_name)}
                                    </div>
                                    <div className="flex items-center gap-1 justify-center flex-wrap">
                                        <div className="text-xs md:text-sm flex text-gray-900 font-semibold">
                                            <span className="font-semibold">Rs. </span>
                                            {relatedProduct.discounted_price},
                                        </div>

                                        <div className="text-[8px] md:text-xs text-gray-600">
                                            MRP:
                                            <span className="line-through">{relatedProduct.retail_price}</span>
                                        </div>
                                        <div className="text-[8px] md:text-xs text-[#ff905a] w-full md:w-fit text-center">
                                            ({percentage} OFF)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div><p className="text-center">No more related products available in this category.</p></div>
                )}
            </div>


        </div>
    );
}
