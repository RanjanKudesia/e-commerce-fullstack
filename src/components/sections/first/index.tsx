"use client";
import Image from "next/image";
import Card from "./components/Horizontal-slide/card";
import data from "./components/Horizontal-slide/list.js";
import Carousel from "react-material-ui-carousel";
import React, { useState, useContext, useRef } from "react";

export default function First() {
  // const ref = useRef(null);
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);

  // const handleMouseDown = (e) => {
  //   setIsDragging(true);
  //   setStartX(e.pageX - ref.current.offsetLeft);
  //   setScrollLeft(ref.current.scrollLeft);
  // };

  // const handleMouseMove = (e) => {
  //   if (!isDragging) return;
  //   const x = e.pageX - ref.current.offsetLeft;
  //   const walk = x - startX;
  //   ref.current.scrollLeft = scrollLeft - walk;
  // };

  // const handleMouseUp = () => {
  //   setIsDragging(false);
  // };

  // const handleMouseLeave = () => {
  //   setIsDragging(false);
  // };

  return (
    <div>
      <div className="md:block hidden">
        <Carousel
          autoPlay={true}
          interval={3000}
          indicators={false}
          navButtonsAlwaysVisible={true}
          navButtonsProps={{
            // You can also set individual styles for the navigation buttons here
            style: {
              marginRight: "120px",
              padding: "0px",
              backgroundColor: "white",
              color: "black",
              width: "52px", // Set button width
              height: "52px", // Set button height
            },
          }}
        >
          {data.map((data) => (
            <Card
              key={data.id}
              heading={data.heading}
              description={data.description}
              imageURL={data.imageURL}
              prodImg={data.prodImg}
              prodName={data.prodName}
              prodDescription={data.prodDescription}
              prodRating={data.prodRating}
              prodSold={data.prodSold}
              imgPosRight={data.imgPosRight}
              imgPosBottom={data.imgPosBottom}
            />
          ))}
        </Carousel>
      </div>
      <div className="md:hidden block">
        <Carousel
          autoPlay={true}
          interval={3000}
          indicators={false}
          navButtonsAlwaysInvisible={true}
        >
          {data.map((data) => (
            <Card
              key={data.id}
              heading={data.heading}
              description={data.description}
              imageURL={data.imageURL}
              prodImg={data.prodImg}
              prodName={data.prodName}
              prodDescription={data.prodDescription}
              prodRating={data.prodRating}
              prodSold={data.prodSold}
              imgPosRight={data.imgPosRight}
              imgPosBottom={data.imgPosBottom}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
