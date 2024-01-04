"use client";

import Image from "next/image";

import style from "../app.module.css";
import { useState } from "react";

export default function Profile() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
    console.log(index);

  }

  return (
    <div className={style.profile}>
      <header className={style.header}>
        <Image
          src="/images/carry.png"
          width={100}
          height={60}
          alt="Carry UP"
          priority={true}
        />
      </header>
      <section className="flex my-10 mx-14">
        <div className="h-full px-4 py-4 w-80  bg-white aside shadow-md">
          <div className="pb-3 flex">
            <div className={style.profileImg}>
              <Image
                src="/images/person.png"
                width={70}
                height={70}
                alt="Person"
                priority={true}
              />
            </div>
            <div className="grid pl-4">
              <span className={style.text}>Raul Gasimov</span>
              <span style={{ color: "#A1A1A1" }}>Azerbaijan,Baku</span>
              <span style={{ color: "#706AB5", fontWeight: "500" }}>4.8</span>
            </div>
          </div>

          <hr />
          <ul className="space-y-2 ">
            <li>
              <a
                href="#"
                onClick={() => toggleTab(1)}
                className={`flex items-center p-1 pt-4 text-gray-900 rounded-md-lg dark:text-white  group `}
              >
                {
                  toggleState === 1 ? <Image
                    src="/icons/user2.png"
                    width={25}
                    height={30}
                    alt="user"
                    priority={true}
                  /> : <Image
                    src="/icons/user.png"
                    width={25}
                    height={30}
                    alt="user"
                    priority={true}
                  />
                }
                <span className={`flex-1 ms-3 whitespace-nowrap  ${toggleState === 1 ? "active-tabs" : "tabs"}`}>Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => toggleTab(2)}

                className={`flex items-center p-1  text-gray-900 rounded-md-lg dark:text-white  group `}
              >
                {
                  toggleState === 2 ? <Image
                    src="/icons/wallet2.png"
                    width={25}
                    height={30}
                    alt="wallet"
                    priority={true}
                  /> : <Image
                    src="/icons/wallet.png"
                    width={25}
                    height={30}
                    alt="wallet"
                    priority={true}
                  />
                }
                <span className={`flex-1 ms-3 whitespace-nowrap  ${toggleState === 2 ? "active-tabs" : "tabs"}`}>Wallet</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => toggleTab(3)}
                className={`flex items-center p-1  text-gray-900 rounded-md-lg dark:text-white  group `}

              >
                {
                  toggleState === 3 ? <Image
                    src="/icons/megaphone2.png"
                    width={25}
                    height={30}
                    alt="megaphone"
                    priority={true}
                  /> : <Image
                    src="/icons/megaphone.png"
                    width={25}
                    height={30}
                    alt="megaphone"
                    priority={true}
                  />
                }
                <span className={`flex-1 ms-3 whitespace-nowrap  ${toggleState === 3 ? "active-tabs" : "tabs"}`}>My Ads</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => toggleTab(4)}
                className={`flex items-center p-1  text-gray-900 rounded-md-lg dark:text-white  group `}

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
            </li>

            <li>
              <a
                href="#"

                className="flex items-center p-1 pt-6 text-gray-900 rounded-md-lg dark:text-white  group"

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

        <div className={`active-content secondBox bg-white aside shadow-md w-3/4 ml-14 px-7 py-5  ${toggleState === 1 ? "active-content" : "tabs"}`}>
          <h3>Personal Information</h3>

          <div className="flex">
            <div
              className={style.profileImg}
              style={{
                width: "120px",
                height: "118px",
                margin: "25px 0 0 25px",
              }}
            >
              <Image
                src="/images/person.png"
                width={130}
                height={130}
                alt="Person"
                priority={true}
              />
            </div>
            <div className="ml-14 pt-6">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 md:mb-0">
                  <label className="block tracking-wide text-gray text-sm  text-left mb-1">
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full   border border-gray-200 rounded-md-lg py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block tracking-wide text-gray text-sm  text-left mb-1">
                    Surname
                  </label>
                  <input
                    className="appearance-none block w-full  border border-gray-200 rounded-md-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white "
                    type="text"
                    placeholder="Surname"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 md:mb-0">
                  <label className="block tracking-wide text-gray text-sm  text-left mb-1">
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full   border border-gray-200 rounded-md-lg py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block tracking-wide text-gray text-sm  text-left mb-1">
                    Telephone Number
                  </label>
                  <input
                    className="appearance-none block w-full  border border-gray-200 rounded-md-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white "
                    type="number"
                    placeholder="Phone number"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-5 " />
          <div className="mt-8">
            <h3>Change Password</h3>
            <div className="flex flex-wrap -mx-3 mb-2 mt-4">
              <div className="w-full md:w-1/3 px-3 md:mb-0 mb-6  relative">
                <label className="block tracking-wide text-gray text-sm  text-left mb-1">
                  Current Password
                </label>
                <input
                  className="appearance-none block w-full  border border-gray-200 rounded-md-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white "
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <Image
                  src="/icons/hide.png"
                  width={25}
                  height={35}
                  alt="Hide"
                  className="mt-0.5 hide"

                  priority={true}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 md:mb-0 mb-6  relative">
                <label className="block tracking-wide text-gray text-sm  text-left mb-1">
                  New Password
                </label>
                <input
                  className="appearance-none block w-full  border border-gray-200 rounded-md-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white "
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <Image
                  src="/icons/hide.png"
                  width={25}
                  height={35}
                  alt="Hide"
                  className="mt-0.5 hide"

                  priority={true}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 md:mb-0 mb-6  relative">
                <label className="block tracking-wide text-gray text-sm  text-left mb-1">
                  Confirm New Password
                </label>
                <input
                  className="appearance-none block w-full  border border-gray-200 rounded-md-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white "
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <Image
                  src="/icons/hide.png"
                  width={25}
                  height={35}
                  alt="Hide"
                  className="mt-0.5 hide"
                  priority={true}
                />
              </div>
            </div>
            <div className="float-right m-5">
              <button class="bg-transparent  font-semibold  py-1.5 px-8 border mr-4   rounded-md cancelButton">
                Cancel
              </button>
              <button class="  font-bold py-1.5 px-10 border  rounded-md saveButton">
                Save
              </button>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
}
