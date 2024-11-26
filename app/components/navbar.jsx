"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown durumu
  const router = useRouter();

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("user"));

    if (username) {
      setUser(username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    setUser(null);
    router.push("/logIn");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center shadow-xl p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/images/carry.png"
              className="h-6"
              width={110}
              height={70}
              alt="Carry UP"
              priority={true}
            />
          </a>
          <div className="relative">
            {!user ? (
              <div className="flex items-center space-x-6 rtl:space-x-reverse">
                <a
                  href="/logIn"
                  className="text-sm text-[#9C9C9C] hover:text-[#706AB5]"
                >
                  LogIn
                </a>
                <a
                  href="/signUp"
                  className="text-sm text-[#9C9C9C] hover:text-[#706AB5]"
                >
                  <li>SignUp</li>
                </a>
              </div>
            ) : (
              <div className="relative">
                <span
                  onClick={toggleDropdown}
                  className="cursor-pointer text-sm text-[#706AB5]"
                >
                  {user.name} {user.surname}
                </span>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-60 p-4 bg-white border rounded shadow-md z-20">
                    <ul>
                    {/* <li
                        className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                       
                      >
                        <Link href="/profile">
                        Profile
                        </Link>
                      </li>
                      <li
                        className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </li> */}
                          <li>
              <Link
                href="/profile"
             
                className={`flex items-center p-1 pt-4 text-gray-900 rounded-md-lg  group `}
              >
                {
                <Image
                    src="/icons/user.png"
                    width={25}
                    height={30}
                    alt="user"
                    priority={true}
                  />
                }
                <span className={`flex-1 ms-3 whitespace-nowrap tabs`}>Profile</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-1  text-gray-900 rounded-md-lg   group `}

              >
                {
                 <Image
                    src="/icons/megaphone.png"
                    width={25}
                    height={30}
                    alt="megaphone"
                    priority={true}
                  />
                }
                <span className={`flex-1 ms-3 whitespace-nowrap  tabs`}>My Ads Trip</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-1  text-gray-900 rounded-md-lg   group `}

              >
                {
                <Image
                    src="/icons/megaphone.png"
                    width={25}
                    height={30}
                    alt="megaphone"
                    priority={true}
                  />
                }
                <span className={`flex-1 ms-3 whitespace-nowrap  tabs`}>My Ads Send</span>
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                onClick={() => toggleTab(4)}
                className={`flex items-center p-1  text-gray-900 rounded-md-lg   group `}

              >
                {
                  toggleState === 4 ? <Image
                    src="/icons/box2.png"
                    width={25}
                    height={30}
                    alt="box"
                    priority={true}
                  /> : <Image
                    src="/icons/box.png"
                    width={25}
                    height={30}
                    alt="box"
                    priority={true}
                  />
                }
                <span className={`flex-1 ms-3 whitespace-nowrap  ${toggleState === 4 ? "active-tabs" : "tabs"}`}>
                  My Packages
                </span>
              </a>
            </li> */}

            <li>
              <a
                href="#"
onClick={handleLogout}
                className="flex items-center p-1 pt-6 text-gray-900 rounded-md-lg  group"

              >
                <Image
                  src="/icons/logout.png"
                  width={25}
                  height={30}
                  alt="logout"
                  priority={true}
                />
                <span className="flex-1 ms-3 whitespace-nowrap logout ">
                  Log Out
                </span>
              </a>
            </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
