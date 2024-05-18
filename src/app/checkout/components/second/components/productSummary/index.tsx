"use client";
import { useGlobalState } from "@/context";
import Image from "next/image";
import products from "../cartProducts/cartProducts";
import { useEffect } from "react";

export default function ProductSummary() {
  const { itemPrice, discountedPrice, setItemPrice, setDiscountedPrice, cart } =
    useGlobalState();

  const handlePriceChange = () => {
    let totalPrice = 0;
    let totalDiscountedPrice = 0;

    cart.map((product) => {
      totalPrice += parseFloat(product.price.slice(1)) * product.quantity;
      totalDiscountedPrice +=
        parseFloat(product.discountedPrice.slice(1)) * product.quantity;
    });

    // Update item price and discounted price in the global state
    setItemPrice(totalPrice.toFixed(2)); // Convert to string with 2 decimal places
    setDiscountedPrice(totalDiscountedPrice.toFixed(2));
  };

  useEffect(() => {
    handlePriceChange();
  }, [cart]);

  return (
    <div className="w-[380px] h-full bg-white flex flex-col p-[24px] rounded-[12px] outline outline-[1px] outline-[#E4E9EE] gap-[24px]">
      <div className="text-[20px] font-[600] leading-[28px] tracking-[-0.2px] ">
        Product Summary
      </div>
      {/* <div>No products selected</div> */}
      <div className="flex flex-col gap-[8px]">
        {/* <div>No products selected</div> */}

        {cart.length === 0 ? (
          <div>No products selected</div>
        ) : (
          cart.map((product) => {
            return (
              <div className="flex flex-col gap-[8px]" key={product.id}>
                <div className="flex flex-row justify-between ">
                  <div>{product.name}</div>
                  <div>{product.price}</div>
                </div>
              </div>
            ); // Return null if the selected product is not found
          })
        )}
      </div>
      <hr />
      <div className="flex flex-col gap-[8px]">
        <div className="flex flex-row justify-between ">
          <div>Total Price</div>
          <div>{itemPrice === null ? "$0.00" : `$${itemPrice}`}</div>
        </div>
        <div className="flex flex-row justify-between ">
          <div>Total Price (Discount)</div>
          <div>
            {discountedPrice === null ? "$0.00" : `$${discountedPrice}`}
          </div>
        </div>
        <div className="flex flex-row justify-between ">
          <div>Tax & Fee</div>
          <div>{itemPrice === null ? "$0" : "$100"}</div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between ">
        <div>Total Price</div>
        <div>{discountedPrice === null ? "$0.00" : `$${discountedPrice}`}</div>
      </div>
      <div className="cursor-pointer w-[332px] h-[88px] rounded-[12px] flex flex-row px-[16px] py-[19px] outline outline-[1px] outline-[#E4E9EE] justify-between">
        <div className="flex flex-row gap-[16px]">
          <Image
            src="/svgs/PROMO_CODE_LOGO.svg"
            width={24}
            height={24}
            alt=""
          />
          <div className="text-[16px] font-[400] leading-[25.6px] tracking-[-0.2px] ">
            <span className="text-[16px] font-[600] leading-[22.4px] tracking-[-0.2px] ">
              Use a Promo
            </span>
            <br />
            Choose product to use promo
          </div>
        </div>
        <Image src="/svgs/RIGHT_ARROW.svg" width={16} height={16} alt="" />
      </div>
      <div className="text-[16px] text-white font-[600] leading-[22.4px] tracking-[-0.2px] w-[332px] h-[48px] flex justify-center items-center bg-[#1E4C2F] rounded-[8px] cursor-pointer">
        Checkout
      </div>
    </div>
  );
}
