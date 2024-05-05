import Image from "next/image";
import { Product } from "../../../../interfaces";

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

export default function ProductCard({ product }: { product: Product }) {
    // Safe way to calculate percentage and handle errors
    let percentage = '';
    try {
        percentage = calculatePercentage(
            product.discounted_price.toString(),
            product.retail_price.toString()
        ) + '%'; // Convert to string and fix to 2 decimal places
    } catch (error) {
        console.error(error);
        percentage = 'N/A'; // Handle error, perhaps display 'N/A' or similar
    }

    const saving: number = parseInt(product.retail_price) - parseInt(product.discounted_price);

    // Calculate star rating as a percentage
    const brandRating = parseFloat(product.brand_rating);

    return (
        <div className="h-[284px] w-[200px] flex flex-col gap-[16px] rounded-[8px] border-x-2 border-y-0 border-[#1E4C2F] transition-transform duration-300 hover:transform hover:scale-105">
            <div className="relative basis-1/2 w-full rounded-[8px]  shadow-red-500 flex justify-center items-center">
                <Image src={product.images[0]} alt='product-image'
                    width={50}
                    height={50}
                />
            </div>
            <div className="basis-1/2 flex flex-col justify-between px-2">
                <div className='text-sm font-bold text-center'>{product.product_name}</div>
                <div className="flex items-center gap-1">
                    <div className='text-lg flex text-gray-900 font-medium'>
                        <span className='text-xs font-semibold'>Rs</span>
                        {product.discounted_price}
                    </div>
                    ,
                    <div className="text-sm text-gray-600">MRP:
                        <span className='line-through'>
                            {product.retail_price}
                        </span>
                    </div>
                    <div className='text-gray-900 text-sm'>
                        ({percentage})
                    </div>
                </div>
                <div className='bg-green-500 w-max rounded text-sm font-medium'>
                    Save ₹{saving}
                </div>
                {/* Star Rating */}
                <div className="flex items-center justify-between gap-1">
                    {[...Array(5)].map((_, index) => (
                        <svg key={index} className={`h-5 w-5 ${index < Math.floor(brandRating) ? 'text-yellow-400' : index + 0.5 === brandRating ? 'text-yellow-500' : 'text-gray-400'} fill-current`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 1l2.6 6.4H18l-5.2 4.2L15.7 19 10 15.3 4.3 19l1.9-7.4L2 7.4h5.4L10 1z" />
                        </svg>
                    ))}
                    <div className="text-sm text-gray-600">{product.brand_rating}/5</div>
                </div>
            </div>
        </div>
    )
}
