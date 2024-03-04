import Image from "next/image";
import React from "react";

const Navbar1 = () => {
  return (
    <div>
      <nav className="border-gray-200 bg-gray-50 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/carry.png"
              className="h-6"
              width={110}
              height={70}
              alt="Carry UP"
              priority={true}
            />
            {/* <span classNameName="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
              <li className="flex gap-1">
                <Image src="/wallet.png" width={20} height={20} />
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-[#9C9C9C] "
                  aria-current="page"
                >
                  7.40
                </a>
              </li>
              <li>
                <Image src="/notification.png" width={20} height={20} />
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded  "
                ></a>
              </li>
              <li className="flex gap-1">
                <Image
                  src="/Raul.png"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 rounded  md:border-0 text-[#9C9C9C]"
                >
                  Raul Qasimov
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md  h-10 w-36 text-white font-medium px-[24px] py-[10px]"
                  style={{
                    backgroundImage:
                      "linear-gradient( 270deg, #61C2FF  , #C966FF)",
                  }}
                >
                  Post an Ad
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;
