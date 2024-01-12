import Image from "next/image";
import React from "react";

const Navbar = () => {
  
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
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
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
          </a>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="/logIn"
              className="text-sm  text-[#9C9C9C] dark:text-white hover:text-[#706AB5] "
            >
              LogIn
            </a>
            {/* <span>.</span> */}
            <a
              href="/signUp"
              className="text-sm text-[#9C9C9C] dark:text-blue-500 hover:text-[#706AB5]"
            >
              <li>SignUp</li>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
