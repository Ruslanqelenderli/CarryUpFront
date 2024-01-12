import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 mb-5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
           href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/carry.png"
              class="h-8"
              alt="CarryUp logo"
              width={150}
              height={150}
            />
            {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
          </a>
          <div class="space-x-6 group">
            <ul className="cursor-pointer flex flex-row gap-4 "> 
            <li className="list-none"><a href="/logIn" className="text-sm text-[#9C9C9C] dark:text-white group-hover:text-[#706AB5]">LogIn</a></li> 
            <li className="list-none"><a href="/signUp" className="text-sm text-[#9C9C9C] dark:text-blue-500 group-hover:text-[#706AB5]">SignUp</a></li> 
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
