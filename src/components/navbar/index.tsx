"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import Submenu from "./components/submenu";

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const navList = document.querySelector('.navList');
    if (navList) {
      navList.classList.toggle('hidden');
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

 
  return (
    <div className="text-black sticky top-0">
      <nav className="w-full flex justify-between items-center py-5 px-3 bg-white relative z-10 xl:px-40">
        <div className="w-1/4 xl:w-1/6 ">
          <Link href="/"><Image
            src="/assets/svgs/Logo.svg"
            alt="Logo"
            width={300}
            height={300}
            className="mx-2 w-full sm:w-1/2"
          /></Link>
        </div>

        <div className="navList hidden font-semibold transition-all ease-in-out duration-300 absolute top-0 left-0 py-10 px-5 bg-white z-10 h-screen w-9/12 sm:w-1/4 xl:w-1/2 xl:py-0 xl:static xl:h-0 xl:block">
          <ul className="flex justify-start items-start flex-col xl:flex-row xl:justify-center xl:items-center">
            <li className="px-4 hover:font-bold py-2 xl:py-0">
              <Link href="">Home</Link>
            </li>
            <li
              className="px-4 py-2 xl:py-0"
              onMouseEnter={handleShopMenuHover}
              onMouseLeave={handleShopMenuLeave}
            >
              <Link href="" className="flex hover:font-bold">
                Shop
                <Image
                  src="/assets/svgs/chevron-down.svg"
                  alt="icon"
                  width={10}
                  height={10}
                  className="ml-1 xl:w-[20px] xl:h-[20px]"
                />{" "}
              </Link>
              {/* Mega Menu */}
              {isMegaMenuOpen && (
                <div className="megamenu flex justify-between align-top w-full p-5 absolute top-16 left-0 bg-[#F7F7F7] z-10 shadow-md xl:px-40">
                  <div className="w-1/4 ">
                    <ul>
                      <h3 className="px-4 font-bold py-2">
                        <Link href="">Men</Link>
                      </h3>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">T-Shirts</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Casual Shirts</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Formal Shirts</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Jackets</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Blazers & Coats</Link>
                      </li>
                    </ul>

                    <ul>
                      <h3 className="px-4 font-bold py-2">
                        <Link href="">Indian & Festive Wear</Link>
                      </h3>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Kurtas & Kurta Sets</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Sherwanis</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="w-1/4 pl-5">
                    <ul>
                      <h3 className="px-4 font-bold py-2">
                        <Link href="">Women</Link>
                      </h3>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Kurtas & Suits</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Sarees</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Ethnic Wear</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Lehenga Cholis</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Jackets</Link>
                      </li>
                    </ul>

                    <ul>
                      <h3 className="px-4 font-bold py-2">
                        <Link href="">Western Wear</Link>
                      </h3>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Dresses</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Jumpsuits</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="w-1/4 pl-5">
                    <ul>
                      <h3 className="px-4 font-bold py-2">
                        <Link href="">Footwear</Link>
                      </h3>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Flats</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Casual Shoes</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Heels</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Boots</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Sports Shoes & Floaters</Link>
                      </li>
                    </ul>

                    <ul>
                      <h3 className="px-4 font-bold py-2">
                        <Link href="">Product Features</Link>
                      </h3>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">360 Product Viewer</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Product with Video</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="w-1/4 pl-5">
                    <ul>
                      <h3 className="px-4 font-bold py-2">
                        <Link href="">Kids</Link>
                      </h3>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">T-Shirts</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Shirts</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Jeans</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Party Wear</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Innerwear & Thermal</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Track Pants</Link>
                      </li>
                      <li className="px-4 leading-8 hover:font-bold text-[#757575] hover:text-black">
                        <Link href="">Value Pack</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li className="xl:hidden">
            {/* <Submenu/> */}
            </li>
            <li className="px-4 hover:font-bold py-2 xl:py-0">
              <Link href="">Our Stroy</Link>
            </li>
            <li className="px-4 hover:font-bold py-2 xl:py-0">
              <Link href="">Blogs</Link>
            </li>
            <li className="px-4 hover:font-bold py-2 xl:py-0">
              <Link href="">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-end items-center w-1/3 xl:w-1/5">
          <Image
            src="/assets/svgs/shopping-cart.svg"
            alt="Logo"
            width={20}
            height={20}
            className="mx-2 xl:w-[25px] xl:mx-4 cursor-pointer"
          />

          <Image
            src="/assets/svgs/user_profile.svg"
            alt="Logo"
            width={25}
            height={25}
            className="mx-2 xl:w-[35px] xl:mx-4 cursor-pointer"
          />

<div className="mr-5">
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
