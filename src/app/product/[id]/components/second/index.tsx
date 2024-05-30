"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProductState } from "../../context";
import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsPhoneFlip } from "react-icons/bs";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { useState, useEffect } from 'react';



export default function SecondSec() {
  const [deliveryDate, setDeliveryDate] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);


  const toggleShowFullDescription = () => {
    setShowFullDescription(!showFullDescription);
  };


  useEffect(() => {
    // Function to calculate delivery date
    const calculateDeliveryDate = () => {
      const currentDate = new Date();
      const deliveryDate = new Date(currentDate);
      deliveryDate.setDate(currentDate.getDate() + 7); // Add 7 days

      // Format the delivery date
      const dayOfWeek = deliveryDate.toLocaleString('en-US', { weekday: 'short' });
      const month = deliveryDate.toLocaleString('en-US', { month: 'short' });
      const dayOfMonth = deliveryDate.getDate();

      const formattedDeliveryDate = `${dayOfWeek}, ${month} ${dayOfMonth}`;

      // Set the formatted delivery date in state
      setDeliveryDate(formattedDeliveryDate);
    };

    // Calculate delivery date when component mounts
    calculateDeliveryDate();
  }, []);





  const pathname = usePathname();
  const { product } = useProductState();
  const isActive = pathname === `/product/${product?.uniq_id}`;

  const scrollToDetailProduct = () => {
    const element = document.getElementById('detailProduct');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const specificationsToShow = showAll ? product?.product_specifications : product?.product_specifications.slice(0, 3);
  const descriptionWords = product?.description.split(' ');
  const descriptionToShow = showFullDescription ? product?.description : descriptionWords.slice(0, 70).join(' ') + (descriptionWords.length > 70 ? '...' : '');


  return (
    <div className="px-3">
      <div className="flex overflow-x-scroll md:overflow-auto">
        <Link
          href={"#detailProduct"}
          className={`min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#1E4C2F] border-b-[3px] border-[#1E4C2F] ${isActive
            ? 'active'
            : 'text-[#818B9C] border-none'
            }`}
        >
          Detail Product
        </Link>
        {/* <Link
          href={"#merchant"}
          className={`min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#1E4C2F] border-b-[3px] border-[#1E4C2F] ${pathname === "/product/"
            ? "active"
            : "min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#818B9C] border-none"
            }`}
        >
          Merchant
        </Link> */}
        <Link
          href={"#reviews"}
          className={`min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#1E4C2F] border-b-[3px] border-[#1E4C2F] hover:text-[#1E4C2F] ${pathname === "/product/"
            ? "active"
            : "min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#818B9C] border-none"
            }`}
        >
          Reviews
        </Link>
        <Link
          href="#relatedProduct"
          className={`min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#1E4C2F] border-b-[3px] border-[#1E4C2F] hover:text-[#1E4C2F]  ${pathname === "/product/"
            ? "active"
            : "min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#818B9C] border-none"
            }`}
        >
          Related Product
        </Link>
      </div>

      <div className="py-10" id="detailProduct">
        <h2 className="font-semibold text-xl pb-3">{product?.product_name}</h2>

        {/* <p className="text-[#818B9C]">{product?.description}</p> */}
        <div>
          <p className="text-[#818B9C]">
            {descriptionToShow}
            {descriptionWords.length > 70 && !showFullDescription && (
              <span
                onClick={toggleShowFullDescription}
                className="ml-2 text-[#1D9E34] underline cursor-pointer font-semibold"
              >
                Read More
              </span>
            )}
            {showFullDescription && (
              <span
                onClick={toggleShowFullDescription}
                className="ml-2 text-[#1D9E34] underline cursor-pointer font-semibold"
              >
                Show Less
              </span>
            )}
          </p>
        </div>

      </div>

      <div className="w-full flex justify-between items-start flex-col md:flex-row">
        <div className="w-full md:w-1/3 md:mr-10 mb-10 md:mb-0">
          <h4 className="font-semibold pb-5">Specification</h4>

          {/* <div>
            {product?.product_specifications.map((specification, index) => (
              <ul key={specification.key}>
                <li
                  className={`py-3 px-4 w-full flex ${index % 2 === 0 ? "bg-[#F6F6F6]" : "bg-white"
                    }`}
                >
                  <p className="w-1/2 text-[#818B9C]">{specification.key}</p>{" "}
                  <p className="w-1/2 font-medium">{specification.value}</p>
                </li>
              </ul>
            ))}
          </div> */}
          <div>
            {specificationsToShow.map((specification, index) => (
              <ul key={specification.key}>
                <li
                  className={`py-3 px-4 w-full flex ${index % 2 === 0 ? "bg-[#F6F6F6]" : "bg-white"}`}
                >
                  <p className="w-1/2 text-[#818B9C]">{specification.key}</p>
                  <p className="w-1/2 font-medium">{specification.value}</p>
                </li>
              </ul>
            ))}
            {product?.product_specifications.length > 3 && (
              <button
                onClick={toggleShowAll}
                className="mt-3 text-[#1D9E34] underline font-semibold"
              >
                {showAll ? "Show Less" : "Read More"}
              </button>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/3 md:mr-10 mb-10 md:mb-0">
          <h4 className="font-semibold pb-5">Delivery Options</h4>
          <div>
            <div className="flex items-center mb-5">
              <CiDeliveryTruck className="text-3xl mr-1" /> <p className="font-medium">Get it by {deliveryDate ? `${deliveryDate}` : '7 days'}</p>
            </div>
            <div className="flex items-center mb-5">
              <BsPhoneFlip className="text-2xl mr-2" /> <p className="font-medium">Pay on delivery available</p>
            </div>
            <div className="flex items-center mb-5">
              <LiaExchangeAltSolid className="text-2xl mr-2" /> <p className="font-medium">Easy 14 days return & exchange available</p>
            </div>
          </div>
        </div>


        <div className="w-full md:w-1/3 mb-10 md:mb-0">
          <h4 className="font-semibold pb-5">Merchant Information</h4>
          <div className="flex flex-col md:flex-row">
            <div className="flex w-full justify-start items-center">
              <Image src="/assets/svgs/Logitech Indonesia.svg" alt="" width={200} height={200} className="-m-10 md:-m-14 w-[150px] h-[150px] md:w-[200px] md:h-[200px]" />
              <div className="ml-3">
                <h3 className="font-semibold text-lg">Logitech Indonesia</h3>
                <p className="text-[#818B9C]">Jakarta Pusat</p>
              </div>

            </div>
          </div>
          <div className="mt-5 flex">
            <p className="bg-[#1d9e3524] text-[#1D9E34] p-2 rounded-md font-semibold text-xs md:text-base mr-2 mt-2 w-fit">Top Rated Merchant</p>
            <p className="bg-[#1d9e3524] text-[#1D9E34] p-2 rounded-md font-semibold text-xs md:text-base ml-2 mt-2 w-fit">Best Merchant</p>
          </div>
        </div>




        <hr className="my-10" />
      </div>
    </div>
  );
}
