import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#F7F7F7] px-2 xl:px-40 text-black">
      <div className="flex justify-start items-start flex-wrap py-10 w-full md:justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 md:pr-10 p-4 sm:p-0">
          <Link href="/"><Image
            src="/assets/svgs/Logo.svg"
            alt="Logo"
            width={200}
            height={200}
            className="mx-2 w-1/3 md:w-1/2 mb-5"
          /></Link>

          <p className="leading-6">
            The biggest marketplace managed by Ideologist corp, which provides
            various kinds of daily needs and hobbies.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4">
          <ul>
            <h3 className="px-4 text-lg font-bold py-2">
              <Link href="">Information</Link>
            </h3>
            <li className="px-4 leading-8 hover:font-bold">
              <Link href="">About Us</Link>
            </li>
            <li className="px-4 leading-8 hover:font-bold">
              <Link href="">My Account</Link>
            </li>
            <li className="px-4 leading-8 hover:font-bold">
              <Link href="/checkout">My Cart</Link>
            </li>
            <li className="px-4 leading-8 hover:font-bold">
              <Link href="">My Wishlist</Link>
            </li>
            <li className="px-4 leading-8 hover:font-bold">
              <Link href="/checkout">Checkout</Link>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4">
          <ul>
            <h3 className="px-4 text-lg font-bold py-2">
              <Link href="">Service</Link>
            </h3>
            <li className="px-4 leading-8 hover:font-bold">
              <Link href="">FAQ</Link>
            </li>
            <li className="px-4 leading-8 hover:font-bold">
              <Link href="">Delivery Information</Link>
            </li>
            <li className="px-4 leading-8 hover:font-bold">
              <Link href="">Return Policy</Link>
            </li>
            <li className="px-4 leading-8 hover:font-bold">
              <Link href="">Privacy Policy</Link>
            </li>
            <li className="px-4 leading-8 hover:font-bold">
              <Link href="">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4">
          <ul>
            <h3 className="px-4 text-lg font-bold py-2">
              <Link href="">Contact Info</Link>
            </h3>
            <li className="px-4 leading-5">
              For  Lenny Consumer
              Complaint Services
            </li>
            <li className="px-4 leading-8">
              <Link href="" className="block hover:font-bold">(684) 555-0102</Link>
              <Link href="" className="block -mt-3 hover:font-bold">curtis.weaver@example.com</Link>
            </li>
            <hr />
            <li className="px-4 leading-8">
              Customers Complaint Service
            </li>
            <li className="px-4 leading-5">
              Directorate Generate of the
              Republic of Indonesia
            </li>
            <li className="px-4 leading-8 hover:font-bold">
              <Link href="">(480) 555-0103</Link>
            </li>
          </ul>
        </div>

      </div>
      <hr className="w-full mx-auto" />
      <div className="py-5 flex justify-between items-center flex-col-reverse sm:flex-row px-4 sm:px-0">
        <div className="w-full sm:w-1/2 mt-5 sm:mt-0 text-center md:text-left text-sm">
          <p>COPYRIGHT © LENNY CO., LTD. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-center md:justify-end">
          <div className="w-[50px] h-[25px] bg-white rounded mx-1 flex justify-center items-center">
            <Image src="/assets/pngs/visa.png" alt="Visa" width={30} height={10} className="object-contain" />
          </div>
          <div className="w-[50px] h-[25px] bg-white rounded mx-1 flex justify-center items-center">
            <Image src="/assets/jpgs/Mastercard.jpg" alt="Mastercard" width={30} height={10} className="object-contain" />
          </div>
          <div className="w-[50px] h-[25px] bg-white rounded mx-1 flex justify-center items-center">
            <Image src="/assets/pngs/Google_Pay.png" alt="GooglePay" width={30} height={10} className="object-contain" />
          </div>
          <div className="w-[50px] h-[25px] bg-white rounded mx-1 flex justify-center items-center">
            <Image src="/assets/pngs/paypal.png" alt="Paypal" width={30} height={10} className="object-contain" />
          </div>
        </div>
      </div>

    </footer>
  );
}
