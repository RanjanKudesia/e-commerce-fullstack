"use client";
import { useGlobalState } from "@/context";
import Image from "next/image";
import { useEffect, useState } from "react";
import products from "@/app/checkout/components/second/components/cartProducts/cartProducts";
import { useRouter } from "next/navigation";

export default function Method() {
  const { cart } = useGlobalState();

  useEffect(() => {
    console.log(cart);
  });

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);

  const handleCheckboxClick = (paymentMethod: string) => {
    if (selectedPaymentMethod === paymentMethod) {
      setSelectedPaymentMethod(null); // Deselect if already selected
    } else {
      setSelectedPaymentMethod(paymentMethod); // Select the new payment method
    }
  };

  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (selectedPaymentMethod !== null) {
      router.push("/checkout/payment/confirmed");
    } else {
      alert("Please select Payment Method.");
    }
  };

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col md:w-[788px]  py-[32px] px-[24px] gap-[24px] rounded-[12px] outline-[#E4E9EE] outline outline-[1px] bg-white ">
        <div className="text-[20px] leading-[16px] md:leading-[22.4px] tracking-[-0.2px] font-[600] ">
          Payment Method
        </div>
        <div className="flex items-center flex-row gap-[16px]">
          <Image
            onClick={() => handleCheckboxClick("1")}
            className="cursor-pointer w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            src={
              selectedPaymentMethod === "1"
                ? "/svgs/CHECKBOX_TICK.svg"
                : "/svgs/CHECKBOX.svg"
            }
            width={24}
            height={24}
            alt=""
          />
          <Image src="/svgs/PAYPAL_LOGO.svg" width={100} height={67} alt="" className="object-contain w-[90px] h-[50px] md:w-[100px] md:h-[70px]" />
          <div className="flex justify-center flex-col gap-[4px] ">
            <div className="text-[16px] md:text-[20px] font-[600] leading-[18px] md:leading-[28px] tracking-[-0.2px] ">
              Paypal
            </div>
            <div className="text-[12px] md:text-[16px] font-[400] leading-[14px] md:leading-[25.6px]">
              yelenastacia99@gmail.com
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center flex-row gap-[16px]">
          <Image
            onClick={() => handleCheckboxClick("2")}
            className="cursor-pointer w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            src={
              selectedPaymentMethod === "2"
                ? "/svgs/CHECKBOX_TICK.svg"
                : "/svgs/CHECKBOX.svg"
            }
            width={24}
            height={24}
            alt=""
          />
          <Image src="/svgs/STRIPE.svg" width={100} height={52} alt="" className="object-contain w-[90px] h-[50px] md:w-[100px] md:h-[70px]" />
          <div className="flex justify-center flex-col gap-[4px] ">
            <div className="text-[16px] md:text-[20px] font-[600] leading-[28px] tracking-[-0.2px] ">
              Stripe
            </div>
            <div className="text-[12px] md:text-[16px] font-[400] leading-[14px] md:leading-[25.6px] ">
              8329 3288 823 ****
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center flex-row gap-[16px]">
          <Image
            onClick={() => handleCheckboxClick("3")}
            className="cursor-pointer w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            src={
              selectedPaymentMethod === "3"
                ? "/svgs/CHECKBOX_TICK.svg"
                : "/svgs/CHECKBOX.svg"
            }
            width={24}
            height={24}
            alt=""
          />
          <Image src="/svgs/PAYONEER.svg" width={100} height={67} alt="" className="object-contain w-[90px] h-[50px] md:w-[100px] md:h-[70px]" />
          <div className="flex justify-center flex-col gap-[4px] ">
            <div className="text-[16px] md:text-[20px] font-[600] leading-[28px] tracking-[-0.2px] ">
              Payoneer
            </div>
            <div className="text-[12px] md:text-[16px] font-[400] leading-[14px] md:leading-[25.6px] ">
              8329 3288 823 ****
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[24px] pt-[32px] px-[24px] pb-[24px]  outline-[#E4E9EE] outline outline-[1px] rounded-[12px] "
      >
        <div className="text-[20px] font-[600] leading-[28px] tracking-[-0.2px] ">
          Add Debit Card
        </div>

        <div className="grid grid-cols-2 gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <div className="text-[12px] md:text-[16px] font-[600] leading-[22.4px] tracking-[-0.2px] ">
              Holder Name
            </div>
            <input
              required
              className="flex px-[16px] py-[10px] rounded-[12px] outline-[#E4E9EE] outline outline-[1px]"
              placeholder="Enter our Name"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="text-[12px] md:text-[16px] font-[600] leading-[22.4px] tracking-[-0.2px] ">
              Card Number
            </div>
            <input
              required
              className="flex px-[16px] py-[10px] rounded-[12px] outline-[#E4E9EE] outline outline-[1px]"
              placeholder="0000 - 0000 - 0000 - 0000"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="text-[12px] md:text-[16px] font-[600] leading-[22.4px] tracking-[-0.2px] ">
              Expiry Date
            </div>
            <input
              required
              className="flex  px-[16px] py-[10px] rounded-[12px] outline-[#E4E9EE] outline outline-[1px]"
              placeholder="Select expiry date"
              type="date"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="text-[12px] md:text-[16px] font-[600] leading-[22.4px] tracking-[-0.2px] ">
              CVV
            </div>
            <input
              required
              className="flex px-[16px] py-[10px] rounded-[12px] outline-[#E4E9EE] outline outline-[1px]"
              placeholder="Enter your Cvv"
            />
          </div>
        </div>
        <div className="w-full flex flex-row gap-[16px] justify-end ">
          <button className="w-[160px] h-[46px] rounded-[8px] flex justify-center items-center text-[16px] font-[600] leading-[22.4px] tracking-[-0.2px] bg-[#E4E9EE] cursor-pointer  ">
            Cancel
          </button>
          <button
            type="submit"
            className="w-[160px] h-[46px] rounded-[8px] flex justify-center items-center text-[16px] font-[600] leading-[22.4px] tracking-[-0.2px] text-white bg-[#1E4C2F] cursor-pointer "
          >
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
}
