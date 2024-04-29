import Link from "next/link";

export default function Submenu() {
  return (
    <div className=''>
      <div className='absolute top-0 left-0 p-5 h-screen w-full bg-gray-400'>
      <ul className="flex justify-start items-start flex-col xl:flex-row xl:justify-center xl:items-center">
            <li className="px-4 hover:font-bold py-2 xl:py-0">
              <Link href="">Submenu</Link>
            </li>
            </ul>
      </div>
      </div>
  )
}
