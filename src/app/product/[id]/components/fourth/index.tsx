"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useProductState } from "../../context";
import { Review } from "../../interfaces";


export default function FourthSec() {

  const { review } = useProductState();
  const reviewsPerPage = 4; // Number of reviews to show per page
  const [visibleReviews, setVisibleReviews] = useState(reviewsPerPage);

  const loadMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + reviewsPerPage);
  };


  return (
    <div className="px-3 mt-10" id="reviews">
      <h3 className="font-semibold text-lg mb-5">Product Reviews</h3>
      <div className="border rounded-lg p-5 md:p-10 flex flex-wrap md:flex-row">
        <div className="w-[50%] font-medium h-[10%] md:w-[10%]">


          <div className="w-[120px] h-[120px] bg-[#E4E9EE] rounded-full relative overflow-hidden">
            <div className="bg-[#FFA439] w-[120px] h-[120px] rounded-full absolute top-0 left-0 flex justify-center items-center">
              <div className="w-[110px] h-[110px] bg-white rounded-full flex justify-center items-center">
                <p className="text-3xl font-semibold">4.8</p>
              </div>
            </div>
          </div>


        </div>
        <div className="w-[50%] text-center md:w-[20%]">
          <Image
            src="/assets/svgs/star_rating.svg"
            alt="star_rating"
            width={150}
            height={50}
            className="mx-auto mb-2 w-[100px] md:w-[150px]"
          />
          <p className="font-medium text-xs md:text-base">from 50+ reviews</p>
        </div>
        <div className="w-full md:w-[70%] mt-10 md:mt-0">
          <div className="flex justify-center items-center mb-5">
            <div className="flex justify-center items-center">
              <p className="mr-1 font-medium">5.0</p>
              <Image
                src="/assets/svgs/star.svg"
                alt="star"
                width={20}
                height={20}
              />
            </div>
            <div className="w-full bg-[#E4E9EE] rounded-full h-2.5 mx-7">
              <div className="bg-[#1D9E34] h-2.5 rounded-full w-[90%]"></div>
            </div>
            <p className="font-medium">2823</p>
          </div>

          <div className="flex justify-center items-center mb-5">
            <div className="flex justify-center items-center">
              <p className="mr-1 font-medium">4.0</p>
              <Image
                src="/assets/svgs/star.svg"
                alt="star"
                width={20}
                height={20}
              />
            </div>
            <div className="w-full bg-[#E4E9EE] rounded-full h-2.5 mx-7">
              <div className="bg-[#1D9E34] h-2.5 rounded-full w-[50%]"></div>
            </div>
            <p className="font-medium">38</p>
          </div>

          <div className="flex justify-center items-center mb-5">
            <div className="flex justify-center items-center">
              <p className="mr-1 font-medium">3.0</p>
              <Image
                src="/assets/svgs/star.svg"
                alt="star"
                width={20}
                height={20}
              />
            </div>
            <div className="w-full bg-[#E4E9EE] rounded-full h-2.5 mx-7">
              <div className="bg-[#1D9E34] h-2.5 rounded-full w-[10%]"></div>
            </div>
            <p className="font-medium">4</p>
          </div>

          <div className="flex justify-center items-center mb-5">
            <div className="flex justify-center items-center">
              <p className="mr-1 font-medium">2.0</p>
              <Image
                src="/assets/svgs/star.svg"
                alt="star"
                width={20}
                height={20}
              />
            </div>
            <div className="w-full bg-[#E4E9EE] rounded-full h-2.5 mx-7">
              <div className="bg-[#1D9E34] h-2.5 rounded-full w-[0%]"></div>
            </div>
            <p className="font-medium">0</p>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <p className="mr-1 font-medium">1.0</p>
              <Image
                src="/assets/svgs/star.svg"
                alt="star"
                width={20}
                height={20}
              />
            </div>
            <div className="w-full bg-[#E4E9EE] rounded-full h-2.5 mx-7">
              <div className="bg-[#1D9E34] h-2.5 rounded-full w-[0%]"></div>
            </div>
            <p className="font-medium">0</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex">
        <div className="hidden w-1/4 border rounded-lg p-5 mr-5 md:block">
          <h3 className="font-semibold text-lg">Rating Filter</h3>
          <hr className="my-5" />


          <div>
            <div className="w-full flex justify-between items-center mb-5">
              <h3 className="font-semibold">Rating</h3>
              <IoIosArrowUp />
            </div>

            <div className="flex justify-start items-center my-2">
              <input type="checkbox" name="" id="" className="w-5 h-5 mr-2" />
              <Image
                src="/assets/svgs/star.svg"
                alt="star"
                width={15}
                height={15}
              />
              <p className="ml-1 font-medium text-[#818B9C]">5</p>
            </div>

            <div className="flex justify-start items-center my-2">
              <input type="checkbox" name="" id="" className="w-5 h-5 mr-2" />
              <Image
                src="/assets/svgs/star.svg"
                alt="star"
                width={15}
                height={15}
              />
              <p className="ml-1 font-medium text-[#818B9C]">4</p>
            </div>

            <div className="flex justify-start items-center my-2">
              <input type="checkbox" name="" id="" className="w-5 h-5 mr-2" />
              <Image
                src="/assets/svgs/star.svg"
                alt="star"
                width={15}
                height={15}
              />
              <p className="ml-1 font-medium text-[#818B9C]">3</p>
            </div>

            <div className="flex justify-start items-center my-2">
              <input type="checkbox" name="" id="" className="w-5 h-5 mr-2" />
              <Image
                src="/assets/svgs/star.svg"
                alt="star"
                width={15}
                height={15}
              />
              <p className="ml-1 font-medium text-[#818B9C]">2</p>
            </div>

            <div className="flex justify-start items-center my-2">
              <input type="checkbox" name="" id="" className="w-5 h-5 mr-2" />
              <Image
                src="/assets/svgs/star.svg"
                alt="star"
                width={15}
                height={15}
              />
              <p className="ml-1 font-medium text-[#818B9C]">1</p>
            </div>
          </div>
          {/* <hr className="my-5" /> */}

          {/* <div className="w-full flex justify-between items-start mb-5">
            <h3 className="font-semibold">Reviews Filter</h3>
            <IoIosArrowUp />
          </div>
          <div>
            <div className="flex justify-start items-center my-2">
              <input type="checkbox" name="" id="" className="p-2 mr-2 w-5 h-5" />
              <p className="ml-1 font-medium text-[#818B9C]">Product Quality</p>
            </div>

            <div className="flex justify-start items-center my-2">
              <input type="checkbox" name="" id="" className="w-5 h-5 mr-2" />
              <p className="ml-1 font-medium text-[#818B9C]">Seller Services</p>
            </div>

            <div className="flex justify-start items-center my-2">
              <input type="checkbox" name="" id="" className="w-5 h-5 mr-2" />
              <p className="ml-1 font-medium text-[#818B9C]">Product Price</p>
            </div>

            <div className="flex justify-start items-center my-2">
              <input type="checkbox" name="" id="" className="w-5 h-5 mr-2" />
              <p className="ml-1 font-medium text-[#818B9C]">Shipment</p>
            </div>

            <div className="flex justify-start items-center my-2">
              <input type="checkbox" name="" id="" className="w-5 h-5 mr-2" />
              <p className="ml-1 font-medium text-[#818B9C]">Match with Description</p>
            </div>
          </div> */}


        </div>

        <div className="w-full md:w-9/12 border rounded-lg p-5">
          <h3 className="font-semibold text-lg">Review Lists</h3>
          <hr className="mt-5" />
          {/* <div className="flex flex-wrap md:flex-nowrap">
            <button className="text-[#1D9E34] border-2 border-[#1D9E34] md:ml-2 my-1 md:my-0 p-2 md:px-4 w-fit ml-2 text-sm md:text-base rounded-md flex justify-center items-center font-semibold hover:bg-[#1D9E34] hover:text-white transition-all ease-in-out duration-300">
              All Reviews
            </button>

            <button className="hover:text-[#1D9E34] border-2 hover:border-[#1D9E34] md:ml-2 my-1 md:my-0 p-2 md:px-4 w-fit ml-2 text-sm md:text-base rounded-md flex justify-center items-center font-semibold transition-all ease-in-out duration-300">
              With Photo & Video
            </button>

            <button className="hover:text-[#1D9E34] border-2 hover:border-[#1D9E34] md:ml-2 my-1 md:my-0 p-2 md:px-4 w-fit ml-2 text-sm md:text-base rounded-md flex justify-center items-center font-semibold transition-all ease-in-out duration-300">
              With Description
            </button>
          </div> */}

          {/* Review list */}
          <div className="w-full">
            {/* Display reviews */}
            <div className="w-full py-5">
              {review.slice(0, visibleReviews).map((reviewItem) => (
                <div key={reviewItem.id} className="mb-5">
                  {/* Individual review item */}
                  <div className="w-full flex justify-end md:justify-between items-end">
                    <div className="w-[70%] md:w-9/12">
                      <div className="flex">
                        <p className="font-medium mr-1">{reviewItem?.rating}.0</p>
                        <Image
                          src="/assets/svgs/star.svg"
                          alt="rating star"
                          width={20}
                          height={20}
                          className="mb-3"
                        />
                      </div>
                      <h3 className="font-bold text-sm md:text-lg leading-5 md:leading-8">{reviewItem?.review}</h3>
                      <p className="text-[#818B9C] text-xs md:text-base mt-2">July 2, 2020 03:29 PM</p>
                      <div className="mt-5 flex items-center">
                        <Image
                          // src="/assets/svgs/user_rating_profile.svg"
                          src={reviewItem.profilePicture}
                          alt="user_rating_profile"
                          width={50}
                          height={50}
                          className="mr-2 w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full"
                        />
                        <h3 className="font-medium text-xs md:text-lg">Darrell Steward</h3>
                      </div>
                    </div>
                    {/* Like and dislike buttons */}
                    <div className="w-[30%] md:w-1/4 flex">
                      <div className="flex items-center justify-center border px-3 py-2 rounded-md w-fit mr-2 hover:bg-[#1D9E34] transition-all ease-in-out duration-300">
                        <Image
                          src="/assets/svgs/like.svg"
                          alt="like"
                          width={30}
                          height={30}
                          className="mr-1 fill-black w-[15px] h-[15px] md:w-[30px] md:h-[30px] cursor-pointer"
                        />
                        {/* <span className="text-xs md:text-base">128</span> */}
                      </div>
                      <div className="flex items-center justify-center border px-3 py-2 rounded-md w-fit hover:bg-[#1D9E34]">
                        <Image
                          src="/assets/svgs/dislike.svg"
                          alt="dislike"
                          width={30}
                          height={30}
                          className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="my-5" />
                </div>
              ))}
            </div>
            {/* Pagination button */}
            {review.length > visibleReviews && (
              <button
                onClick={loadMoreReviews}
                className="text-[#1D9E34] border-2 border-[#1D9E34] md:ml-2 p-2 md:px-4 w-1/2 md:w-fit ml-2 text-sm md:text-base rounded-md flex justify-center items-center font-semibold hover:bg-[#1D9E34] hover:text-white transition-all ease-in-out duration-300"
              >
                Show More
              </button>
            )}
          </div>
        </div>

      </div>
      <hr className="mt-16 mb-10" />
    </div>
  );
}
