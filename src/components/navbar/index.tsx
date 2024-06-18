"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import Submenu from "./components/submenu";
import { useGlobalState } from "@/context";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
  const { productCategory, cart } = useGlobalState();
  const { productCategory, cart } = useGlobalState();
  const pathname = usePathname();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const navList = document.querySelector(".navList");
    if (navList) {
      navList.classList.toggle("hidden");
    }
  };

  // Event handler to show mega menu on hover
  const handleShopMenuHover = () => {
    setIsMegaMenuOpen(true);
  };

  // Event handler to hide mega menu when mouse leaves
  const handleShopMenuLeave = () => {
    setIsMegaMenuOpen(false);
  };

  // useEffect(() => {
  //   toast.success('Added to Bag!', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // }, [cart]);


  return (
    <div className="text-black sticky top-0 z-50">
      <nav className="w-full flex justify-between items-center py-5 px-3 bg-white relative z-50 xl:px-[150px]">
        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}

        <div className="w-1/4 xl:w-1/6 ">
          <Link href="/">
            <Image
              src="/assets/svgs/Logo.svg"
              alt="Logo"
              width={350}
              height={350}
              className="mx-2 w-full sm:w-2/3"
            />
          </Link>
        </div>

        <div className={`navList flex md:justify-center md:items-center font-medium absolute top-0 left-0 py-10 px-5 bg-white z-10 h-screen w-9/12 sm:w-1/4 xl:py-0 xl:h-0 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } xl:translate-x-0 xl:static xl:w-full`}>
          <ul className="flex justify-start items-start flex-col xl:flex-row xl:justify-center xl:items-center">
            <li
              className={`text-[#1E4C2F] font-semibold px-4 hover:font-bold py-2 xl:py-0 ${pathname === "/"
                  ? "active"
                  : "font-medium px-4 hover:font-bold py-2 xl:py-0 text-black"
                }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`hidden xl:block text-[#1E4C2F] px-4 font-semibold hover:font-bold py-2 xl:py-0 ${pathname === "/shop"
                  ? "active"
                  : "font-medium px-4 hover:font-bold py-2 xl:py-0 text-black"
                }`}
              onMouseEnter={handleShopMenuHover}

            >
              <Link href="" className="flex hover:font-bold">
                All Category
                <Image
                  src="/assets/svgs/chevron-down.svg"
                  alt="icon"
                  width={10}
                  height={10}
                  className="ml-1 xl:w-[20px] xl:h-[20px]"
                />{" "}
              </Link>

            </li>
            <li className="xl:hidden">
              <Submenu />
            </li>
            {/* <li
              className={`text-[#1E4C2F] px-4 font-semibold hover:font-bold py-2 xl:py-0 ${pathname === "/our-story"
                ? "active"
                : "font-medium px-4 hover:font-bold py-2 xl:py-0 text-black"
                }`}
            >
              <Link href="">Our Stroy</Link>
            </li> */}
            <li
              className={`text-[#1E4C2F] px-4 font-semibold hover:font-bold py-2 xl:py-0 ${pathname === "/articles"
                  ? "active"
                  : "font-medium px-4 hover:font-bold py-2 xl:py-0 text-black"
                }`}
            >
              <Link href="/articles">Articles</Link>
            </li>
            {/* <li
              className={`text-[#1E4C2F] px-4 font-semibold hover:font-bold py-2 xl:py-0 ${pathname === "/contact-us"
                ? "active"
                : "font-medium px-4 hover:font-bold py-2 xl:py-0 text-black"
                }`}
            >
              <Link href="">Contact Us</Link>
            </li> */}
          </ul>
        </div>
        {/* Mega Menu */}
        {isMegaMenuOpen && (
          <div onMouseLeave={handleShopMenuLeave} className="megamenu transform flex font-medium justify-between align-top w-full py-5 absolute top-16 left-0 bg-[#F7F7F7] z-10 shadow-md md:px-[120px]">
            <div className="w-full flex flex-wrap px-5">
              {productCategory?.map((category, categoryIndex) => (
                <ul key={categoryIndex} className="w-1/4 pl-5">
                  <li className="leading-8 font-medium hover:font-bold text-[#757575] hover:text-black">
                    <Link href={`/search/${category?.category_name}`}>
                      {category?.category_name}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        )}
        <div className="flex justify-end items-center w-[75%] xl:w-1/5">
          <Link className="relative" href="/checkout">
            <Image
              src="/assets/svgs/shopping-cart.svg"
              alt="Logo"
              width={20}
              height={20}
              className="mx-2 xl:w-[25px] xl:mx-4 cursor-pointer"
            />
            {cart.length > 0 && (
              <span className="absolute -top-2 md:right-1 -right-[2px] bg-[#1d9e34] text-white rounded-full w-[15px] h-[15px] md:w-[20px] md:h-[20px] p-1 text-[10px] md:text-xs flex justify-center items-center">
                {cart.length}
              </span>
            )}
          </Link>

          <Image
            src="/assets/svgs/user_profile.svg"
            alt="Logo"
            width={25}
            height={25}
            className="mx-2 xl:w-[35px] xl:mx-4 cursor-pointer"
          />

          <div>
            {isOpen ? (
              <IoIosClose
                className="text-4xl cursor-pointer"
                onClick={toggleMenu}
                aria-label="Close menu"
              />
            ) : (
              <Image
                src="/assets/svgs/menu.svg"
                alt="Menu Icon"
                width={30}
                height={30}
                className="mx-2 border-l-2 pl-4 w-[40px] xl:hidden cursor-pointer"
                onClick={toggleMenu}
                aria-label="Open menu"
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
