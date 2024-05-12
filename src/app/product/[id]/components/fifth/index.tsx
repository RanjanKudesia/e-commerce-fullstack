"use client";
import Image from "next/image";
import { useProductState } from "../../context";
import Link from "next/link";

export default function FifthSec() {
    const { relatedProducts } = useProductState();

    // Function to extract the first 2 words and add ellipsis if there are more words
    const getShortProductName = (name) => {
        const words = name.split(' ');
        if (words.length > 2) {
            return words.slice(0, 2).join(' ') + '...';
        }
        return name; // Return the full name if it's 3 words or fewer
    };


    return (
        <div id="relatedProduct">
            <div className="flex justify-between items-center mb-10 md:mb-5 px-3">
                <h3 className="font-semibold text-lg mb-0 md:mb-5">Related Product</h3>
                <Link href="/">
                    <button className="text-[#1E4C2F] border-2 border-[#1E4C2F] md:ml-2 p-2 md:px-4 w-1/2 md:w-fit ml-2 text-sm md:text-base rounded-md flex justify-center items-center font-semibold hover:bg-[#1E4C2F] hover:text-white transition-all ease-in-out duration-300">
                        View Detail
                    </button>
                </Link>
            </div>

            <div className="w-full flex justify-evenly items-center flex-wrap md:flex-nowrap">
                {relatedProducts?.map((relatedProduct) => (

                    <Link href={`/product/${relatedProduct?.uniq_id}`} key={relatedProduct.pid} className="flex flex-col rounded-[8px] h-auto bg-white mx-4 w-[40%] md:w-full my-2 md:my-0" >

                        <div className="relative h-[150px] md:h-[280px] rounded-[8px] rounded-tr-[8px] p-5 md:p-10 w-full flex justify-center items-center bg-[#ffffff] shadow-md">
                            {/* <Image
                                src="/assets/svgs/heart.svg"
                                width={40}
                                height={40}
                                alt="wishlist"
                                className="bg-white p-3 rounded-full absolute right-1 top-1 md:top-5 md:right-5 object-contain"
                            /> */}
                            <Image
                                src={relatedProduct?.images[0] || "/assets/jpgs/dummy-image.jpg"}
                                width={180}
                                height={180}
                                alt={relatedProduct?.product_name}
                                className="w-full h-[200px] object-contain overflow-hidden"
                            />
                        </div>
                        <div className="flex flex-col gap-[8px] py-[10px] px-[10px] justify-start items-start">
                            <div className="w-full">
                                <div className="text-[#0B0F0E] text-sm md:text-base font-[600] leading-[28px] tracking-[-0.2px] bloack md:flex justify-start md:justify-between items-start flex-col md:flex-row">
                                    <span>{relatedProduct ? getShortProductName(relatedProduct.product_name) : 'Loading...'}</span>

                                    <br />
                                    <div className="text-[#1D9E34] text-sm md:text-base font-[600] leading-[28px] tracking-[-0.2px]"> Rs. {relatedProduct?.retail_price}</div>
                                </div>
                                <div>
                                    <span className="font-[600] text-xs leading-3 md:text-base md:leading-[25.6px] text-[#818B9C]">
                                        {relatedProduct?.subcategory}
                                    </span>

                                </div>
                            </div>
                            <div className="flex flex-row gap-[4px]">
                                <Image src="/assets/svgs/star.svg" width={16} height={16} alt="star rating" />
                                <div className="text-sm md:text-base text-[#0B0F0E] leading-[25.6px]">
                                    {relatedProduct?.product_rating}
                                </div>

                            </div>
                        </div>

                    </Link>


                ))}
            </div>
        </div>
    );
}
