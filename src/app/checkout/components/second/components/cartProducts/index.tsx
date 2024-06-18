"use client";
import { useGlobalState } from "@/context";
import Image from "next/image";
import { useEffect, useState } from "react";
import products from "./cartProducts";
import DummyImage from "@/components/dummy-img-placeholder";
import Link from "next/link";


export default function CartProducts() {
  const {
    itemPrice,
    discountedPrice,
    setItemPrice,
    setDiscountedPrice,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
  } = useGlobalState();

  useEffect(() => {
    console.log(cart);
  });

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col md:w-[788px]  py-[32px] px-[24px] gap-[24px] rounded-[12px] outline-[#E4E9EE] outline outline-[1px] bg-white ">
        <div className="flex gap-[8px]  ">
          <Image src="/pngs/LOGITECH_LOGO.png" width={46} height={46} alt="" />
          <div className="text-[10px] md:text-[14px] font-[400] leading-[16px] md:leading-[22.4px]">
            <span className="text-[12px] md:text-[16px] leading-[16px] md:leading-[22.4px] tracking-[-0.2px] font-[600] ">
              Logitech Indonesia
            </span>{" "}
            <br />
            Central Jakarta
          </div>
        </div>

        <div className="flex flex-col gap-[24px] ">
          {cart.map((product: any) => (
            <div className="flex flex-col gap-[24px] ">
              <div className="flex flex-col md:flex-row gap-[16px] items-end md:justify-between  md:items-center ">
                <Link href={`/product/${product.uniqid}`} className="flex w-full flex-row gap-[24px]  ">
                  <div className="flex flex-row gap-[16px]">
                    <div className="flex justify-center items-center rounded-[8px] md:w-[80px] md:h-[80px] shadow-md p-2">
                      {/* <Image
                        className="w-[70px] h-[70px] object-contain"
                        src={product.imageSrc}
                        width={100}
                        height={100}
                        alt=""
                      /> */}
                      <DummyImage
                        src={product.imageSrc}
                        alt="Image is not available for this product."
                        fallbackSrc="/assets/pngs/placeholder.png"
                        width={100}
                        height={100}
                        className="w-[70px] h-[70px] object-contain" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <div className="text-[14px] font-[400] leading-[22.4px] ">
                        <span className="text-[14px] font-[600] leading-[19.6px] tracking-[-0.2px] ">
                          {product.name}
                        </span>
                        <br />
                        {product.subcategory} | {product.category}
                      </div>
                      <div className="text-[16px] leading-[22.4px] tracking-[-0.2px]">
                        <span className="text-[#1D9E34] font-[600]"> Rs.{product.discountedPrice} </span> <span className="line-through text-gray-400">{product.price}</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="flex flex-row gap-[12px] items-end h-[32px]">
                  <div className="flex flex-row p-[4px] rounded-[8px]">
                    <Image
                      onClick={() => {
                        if (product.quantity > 1) {
                          updateCartItemQuantity(
                            product.id,
                            product.quantity - 1
                          );
                        }
                      }}
                      className="cursor-pointer"
                      src="/svgs/MINUS_LOGO.svg"
                      width={24}
                      height={24}
                      alt=""
                    />
                    <div className="flex justify-center w-[24px]">
                      {product.quantity}
                    </div>
                    <Image
                      onClick={() => {
                        updateCartItemQuantity(
                          product.id,
                          product.quantity + 1
                        );
                      }}
                      className="cursor-pointer"
                      src="/svgs/PLUS_LOGO.svg"
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                  <Image
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                    className="cursor-pointer"
                    src="/svgs/DELETE_LOGO.svg"
                    width={32}
                    height={32}
                    alt=""
                  />
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
