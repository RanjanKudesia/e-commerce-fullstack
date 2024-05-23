import Image from "next/image";
export default function ThirdSec() {
  return (
    <div className="px-3" id="merchant">
      <h4 className="font-semibold pb-8 text-lg">Merchant Information</h4>
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full md:w-1/2">
          <Image src="/assets/svgs/Logitech Indonesia.svg" alt="" width={200} height={200} className="-m-10 md:-m-14 w-[150px] h-[150px] md:w-[200px] md:h-[200px]" />
          <div className="ml-3">
            <h3 className="font-semibold text-lg">Logitech Indonesia</h3>
            <p className="text-[#818B9C]">Jakarta Pusat</p>

            <div className="flex mt-5">
              <p className="bg-[#1d9e3524] text-[#1D9E34] p-2 rounded-md font-semibold mr-2 text-xs md:text-base">Top Rated Merchant</p>
              <p className="bg-[#1d9e3524] text-[#1D9E34] p-2 rounded-md font-semibold ml-2 text-xs md:text-base">Best Merchant</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="w-full flex md:justify-end items-center mt-10">
            <button className="text-[#1E4C2F] border-2 border-[#1E4C2F] md:ml-2 py-4 px-2 md:px-8 w-1/2 md:w-fit mr-2 md:mr-0 text-sm md:text-base rounded-md flex justify-center items-center font-semibold hover:bg-[#1E4C2F] hover:text-white hover:fill-white transition-all ease-in-out duration-300">
              <div className="flex">
                <Image
                  src="/assets/svgs/message.svg"
                  alt="cart-icon"
                  width={20}
                  height={20}
                  className="fill-[#1E4C2F] mr-2"
                />{" "}
                Chat
              </div>
            </button>
            <button className="text-[#1E4C2F] border-2 border-[#1E4C2F] md:ml-2 py-4 px-2 md:px-8 w-1/2 md:w-fit ml-2 text-sm md:text-base rounded-md flex justify-center items-center font-semibold hover:bg-[#1E4C2F] hover:text-white hover:fill-white transition-all ease-in-out duration-300">
              <div className="flex">
                <Image
                  src="/assets/svgs/shop.svg"
                  alt="cart-icon"
                  width={20}
                  height={20}
                  className="fill-[#1E4C2F] mr-2"
                />{" "}
                Visit Merchant
              </div>
            </button>
          </div>
        </div>
      </div>

      <hr className="my-10" />

    </div>
  );
}
