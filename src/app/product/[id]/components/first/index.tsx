"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useProductState } from "../../context";
import { FaChevronLeft } from "react-icons/fa";
import { useGlobalState } from "@/context";

export default function FirstSec() {
  const { cart, addToCart } = useGlobalState();
  const { product } = useProductState();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to extract the first 50 words from the description
  const getShortDescription = (description) => {
    return description.split(" ").slice(0, 50).join(" ") + "...";
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : product?.images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < product?.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <div>
      {product && (
        <ul className="flex justify-start items-center text-xs md:text-base overflow-x-scroll md:overflow-auto">
          <li className="px-3 text-[#1D9E34] font-medium min-w-fit">
            <Link href="/">Home</Link>
          </li>
          <FaAngleRight className="min-w-fit" />
          <li className="px-3 text-[#1D9E34] font-medium min-w-fit">
            <Link href="">{product?.category}</Link>
          </li>
          <FaAngleRight className="min-w-fit" />
          <li className="px-3 text-[#1D9E34] font-medium min-w-fit">
            <Link href="">{product?.subcategory}</Link>
          </li>
          <FaAngleRight className="min-w-fit" />
          <li className="px-3 text-black font-medium min-w-fit">
            <Link href="">{product?.product_name}</Link>
          </li>
        </ul>
      )}

      <div className="w-full flex justify-between items-start px-3 my-10 flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-0 md:pr-10">
          <div className="grid gap-4">
            {/* Main Image */}
            <div className="relative z-10">
              <Image
                src={product?.images[currentImageIndex]}
                width={480}
                height={480}
                className="rounded-xl w-full h-[400] object-contain p-10 shadow-md"
                alt="Main Product Image"
              />
              <button
                className="absolute top-1/2 left-4 text-white p-2 rounded-full opacity-75 hover:opacity-100 bg-[#0b0f0e81] z-10"
                onClick={handlePrevious}
              >
                <FaChevronLeft />
              </button>
              <button
                className="absolute top-1/2 right-4 text-white p-2 rounded-full opacity-75 hover:opacity-100 bg-[#0b0f0e81] z-10"
                onClick={handleNext}
              >
                <FaAngleRight />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="overflow-x-scroll md:overflow-auto flex justify-start items-center pb-5">
              {product?.images.map((imageUrl, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className="cursor-pointer"
                >
                  <Image
                    src={imageUrl}
                    width={100}
                    height={100}
                    className="min-w-[100px] h-[100] object-contain mx-1 rounded-lg p-4 shadow-md overflow-hidden active:border-2 active:border-[#1E4C2F]"
                    alt={`Thumbnail ${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          {/* product desc here */}
          <h2 className="font-semibold text-2xl md:text-4xl">
            {product?.product_name}
          </h2>
          <div className="flex items-center py-3">
            <Image
              src="/assets/svgs/star.svg"
              alt="star"
              width={20}
              height={20}
            />
            <span className="pl-1">{product?.product_rating}</span>
          </div>
          <div className="flex justify-start items-end mb-5">
            <h3 className="text-[#1D9E34] font-semibold text-xl md:text-2xl mr-2">
              Rs. {product?.discounted_price}
            </h3>
            <h4 className="text-lg text-gray-300 line-through font-semibold">
              {product?.retail_price}
            </h4>
          </div>
          <p>
            {isExpanded || !product?.description
              ? product?.description
              : getShortDescription(product.description)}
            {product?.description &&
              product.description.split(" ").length > 50 && (
                <button
                  onClick={toggleExpanded}
                  className="text-[#1D9E34] ml-2"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>
              )}
          </p>
          <hr className="my-4" />
          <h4 className="text-lg font-semibold mb-3">Product Variant:</h4>
          <div>
            <div className="w-full md:w-9/12 flex justify-between items-start">
              <div className="w-1/2 mr-2">
                <p className="mb-2">
                  <span className="font-semibold">Type:</span> {product?.type}
                </p>
                {/* 
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-gray-200 px-4 py-2 pr-8 rounded leading-tight focus:outline-none">
                    <option className="focus:bg-[#1E4C2F]">
                      {product?.type}
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z" />
                    </svg>
                  </div>
                </div> */}
              </div>
              {/* <div className="w-1/2 ml-2">
                <p className="mb-2">Color</p>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-gray-200 px-4 py-2 pr-8 rounded leading-tight focus:outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z" />
                    </svg>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="w-full flex justify-between items-center mt-10 flex-col md:flex-row">
            <button className="bg-[#1E4C2F] text-white py-4 px-3 w-full md:w-1/2 md:mr-2 mb-4 md:mb-0 rounded-md font-semibold border-2 border-[#1E4C2F] hover:bg-white hover:text-[#1E4C2F] transition-all ease-in-out duration-300">
              Buy Now
            </button>
            <button
              onClick={() => {
                addToCart(
                  product?.uniq_id,
                  product?.product_name,
                  product?.retail_price,
                  product?.discounted_price,
                  product?.images[0],
                  1
                );
                console.log("added to cart");
                console.log(cart)
              }}
              className="text-[#1E4C2F] border-2 border-[#1E4C2F] w-full md:w-1/2 md:ml-2 py-4 px-3 rounded-md flex justify-center items-center font-semibold hover:bg-[#1E4C2F] hover:text-white hover:fill-white transition-all ease-in-out duration-300"
            >
              <div className="flex">
                <Image
                  src="/assets/svgs/cart.svg"
                  alt="cart-icon"
                  width={20}
                  height={20}
                  className="fill-[#1E4C2F] mr-2"
                />{" "}
                Add to Chart
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
