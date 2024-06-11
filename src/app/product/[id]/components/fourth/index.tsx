"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Review } from "../../interfaces";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function FourthSec() {
  const [productRating, setProductRating] = useState<number>(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const reviewsPerPage = 4;
  const [visibleReviews, setVisibleReviews] = useState(reviewsPerPage);
  const [isOpen, setIsOpen] = useState(true);
  const [maxHeight, setMaxHeight] = useState("0px");

  const loadMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + reviewsPerPage);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setMaxHeight("1000px");
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  const checkBoxStyling = {
    color: "#E4E9EE",
    fontFamily: 'Jost, sans-serif',
    "&.Mui-checked": {
      color: "#1E4C2F",
    },
  };

  //reviews
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const params = productRating ? { rating: productRating } : {};
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/product-reviews?rating=${productRating}`);
        setReviews(response.data);  // Set fetched reviews to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [productRating]);

  const handleCheckboxChange = (rating: number) => {
    setProductRating((prevRating) => (prevRating === rating ? 0 : rating));
  };

  return (
    <div className="px-3 -mt-14 md:-mt-0 md:pt-10 my-10 md:my-20" id="reviews">
      <h3 className="font-semibold text-lg mb-5">Product Reviews</h3>
      <div className="border rounded-lg p-10 flex flex-wrap md:flex-row items-center">
        <div className="w-[50%] font-medium h-[10%] md:w-[10%]">
          <div className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] bg-[#E4E9EE] rounded-full relative overflow-hidden">
            <div className="bg-[#FFA439] w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-full absolute top-0 left-0 flex justify-center items-center">
              <div className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] bg-white rounded-full flex justify-center items-center">
                <p className="text-2xl md:text-3xl font-semibold">4.8</p>
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
            <div
              className="flex justify-between cursor-pointer"
              onClick={toggleOpen}
            >
              <div className="text-[#0B0F0E] text-[16px] font-[600]">
                Rating
              </div>
              <Image
                src="/assets/svgs/UP_ARROW.svg"
                width="12"
                height="12"
                alt="up-arrow"
                className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </div>
            <div
              style={{
                maxHeight: maxHeight,
                overflow: "hidden",
                transition: "max-height 0.5s ease",
              }}
              className="flex flex-col mt-2"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={checkBoxStyling}
                    checked={productRating === 5}
                    onChange={() => handleCheckboxChange(5)}
                    className="-my-1"
                  />
                }
                label={
                  <div className="text-[#818B9C] text-[16px] font-[400] flex">
                    <Image
                      src="/assets/svgs/star.svg"
                      alt="star"
                      width={15}
                      height={15}
                      className="mr-1"
                    />
                    5 Stars
                  </div>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={checkBoxStyling}
                    checked={productRating === 4}
                    onChange={() => handleCheckboxChange(4)}
                    className="-my-1"
                  />
                }
                label={
                  <div className="text-[#818B9C] text-[16px] font-[400] flex">
                    <Image
                      src="/assets/svgs/star.svg"
                      alt="star"
                      width={15}
                      height={15}
                      className="mr-1"
                    />
                    4 Stars
                  </div>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={checkBoxStyling}
                    checked={productRating === 3}
                    onChange={() => handleCheckboxChange(3)}
                    className="-my-1"
                  />
                }
                label={
                  <div className="text-[#818B9C] text-[16px] font-[400] flex">
                    <Image
                      src="/assets/svgs/star.svg"
                      alt="star"
                      width={15}
                      height={15}
                      className="mr-1"
                    />
                    3 Stars
                  </div>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={checkBoxStyling}
                    checked={productRating === 2}
                    onChange={() => handleCheckboxChange(2)}
                    className="-my-1"
                  />
                }
                label={
                  <div className="text-[#818B9C] text-[16px] font-[400] flex">
                    <Image
                      src="/assets/svgs/star.svg"
                      alt="star"
                      width={15}
                      height={15}
                      className="mr-1"
                    />
                    2 Stars
                  </div>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={checkBoxStyling}
                    checked={productRating === 1}
                    onChange={() => handleCheckboxChange(1)}
                    className="-my-1"
                  />
                }
                label={
                  <div className="text-[#818B9C] text-[16px] font-[400] flex">
                    <Image
                      src="/assets/svgs/star.svg"
                      alt="star"
                      width={15}
                      height={15}
                      className="mr-1"
                    />
                    1 Star
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-9/12 border rounded-lg p-5">
          <h3 className="font-semibold text-lg">Review Lists</h3>
          <hr className="mt-5" />

          {/* Review list */}
          <div className="w-full">
            {/* Display reviews */}
            <div className="w-full py-5">
              {reviews.slice(0, visibleReviews).map((review) => (
                <div key={review.id} className="mb-5">
                  {/* Individual review item */}
                  <div className="w-full flex justify-end md:justify-between items-end">
                    <div className="w-[70%] md:w-9/12">
                      <div className="flex">
                        <p className="font-medium mr-1">{review?.rating}.0</p>
                        <Image
                          src="/assets/svgs/star.svg"
                          alt="rating star"
                          width={20}
                          height={20}
                          className="mb-3"
                        />
                      </div>
                      <h3 className="font-bold text-sm md:text-lg leading-5 md:leading-8">
                        {review?.review}
                      </h3>
                      <p className="text-[#818B9C] text-xs md:text-base mt-2">
                        July 2, 2020 03:29 PM
                      </p>
                      <div className="mt-5 flex items-center">
                        <Image
                          src={review.profilePicture}
                          alt="user_rating_profile"
                          width={50}
                          height={50}
                          className="mr-2 w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full"
                        />
                        <h3 className="font-medium text-xs md:text-lg">
                          Darrell Steward
                        </h3>
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
            {visibleReviews < reviews.length && (
              <button className="text-[#1E4C2F] border-2 border-[#1E4C2F] md:ml-2 p-2 md:px-4 w-1/2 md:w-fit ml-2 text-sm md:text-base rounded-md flex justify-center items-center font-semibold hover:bg-[#1E4C2F] hover:text-white transition-all ease-in-out duration-300" onClick={loadMoreReviews}>Load More</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
