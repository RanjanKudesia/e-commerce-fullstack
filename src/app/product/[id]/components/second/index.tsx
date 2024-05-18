"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProductState } from "../../context";

export default function SecondSec() {
  const pathname = usePathname();
  const { product } = useProductState();

  return (
    <div className="px-3">
      <div className="flex overflow-x-scroll md:overflow-auto">
        <Link
          href="/product/b070bafb9af9e97a68312e2fed57109c"
          className={`min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#1E4C2F] border-b-[3px] border-[#1E4C2F] ${
            pathname === "/product/b070bafb9af9e97a68312e2fed57109c"
              ? "active"
              : "min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#818B9C] border-none"
          }`}
        >
          Detail Product
        </Link>
        <Link
          href="/product/"
          className={`min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#1E4C2F] border-b-[3px] border-[#1E4C2F] ${
            pathname === "/product/"
              ? "active"
              : "min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#818B9C] border-none"
          }`}
        >
          Merchant
        </Link>
        <Link
          href="/product/"
          className={`min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#1E4C2F] border-b-[3px] border-[#1E4C2F] ${
            pathname === "/product/"
              ? "active"
              : "min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#818B9C] border-none"
          }`}
        >
          Reviews
        </Link>
        <Link
          href="/product/"
          className={`min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#1E4C2F] border-b-[3px] border-[#1E4C2F] ${
            pathname === "/product/"
              ? "active"
              : "min-w-fit text-base md:text-lg font-semibold md:py-4 md:px-6 py-2 px-3 text-[#818B9C] border-none"
          }`}
        >
          Related Product
        </Link>
      </div>

      <div className="py-10">
        <h2 className="font-semibold text-xl pb-3">{product?.product_name}</h2>

        <p className="text-[#818B9C]">{product?.description}</p>
      </div>

      <div className="w-full flex justify-between items-start flex-col md:flex-row">
        <div className="w-full md:w-1/3 md:mr-10 mb-10 md:mb-0">
          <h4 className="font-semibold pb-5">Specification</h4>

          <div>
            {product?.product_specifications.map((specification, index) => (
              <ul key={specification.key}>
                <li
                  className={`py-3 px-4 w-full flex ${
                    index % 2 === 0 ? "bg-[#F6F6F6]" : "bg-white"
                  }`}
                >
                  <p className="w-1/2 text-[#818B9C]">{specification.key}</p>{" "}
                  <p className="w-1/2 font-medium">{specification.value}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 md:mr-10 mb-10 md:mb-0">
          <h4 className="font-semibold pb-5">In The Box</h4>
        </div>

        <div className="w-full md:w-1/3 mb-10 md:mb-0">
          <h4 className="font-semibold pb-5">System Required</h4>
        </div>
      </div>

      <hr className="my-10"/>
    </div>
  );
}
