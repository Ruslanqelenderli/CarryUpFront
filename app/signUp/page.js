
"use client";
import Link from "next/link";
import { useState } from "react";
import { FaPhoneAlt, FaGoogle, FaRegEyeSlash, FaEye } from "react-icons/fa";
// import { IoChevronDownSharp } from "react-icons/io5";
export default function SignUp() {
  const [visible, setVisible] = useState("");
  const [password, setPassword] = useState("");

  const divStyle = {
    background: "linear-gradient(270deg, #00F0FF -39.67%, #E600FF 137.29%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center md:flex-row min-h-screen">
      <div className="flex flex-col bg-white rounded-2xl shadow-2xl justify-center text-center items-center px-7">
        <h1
          style={divStyle}
          className="first-letter:my-5 text-center text-4xl font-bold leading-9 tracking-tight my-3"
        >
          Carry <span className="uppercase">Up</span>
        </h1>

        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <label
                style={{ color: "rgba(117, 107, 227, 0.70)" }}
                className="block tracking-wide text-gray-700 text-xs font-bold text-left mb-1"
                htmlFor="grid-first-name"
              >
                Name
              </label>
              <input
                style={{ border: "2px solid #c2deff" }}
                className="appearance-none block w-full  text-gray-400 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                style={{ color: "rgba(117, 107, 227, 0.70)" }}
                className="block tracking-wide text-gray-700 text-xs font-bold text-left mb-1"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                style={{ border: "2px solid #c2deff" }}
                className="appearance-none block w-full text-gray-400 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <label
                style={{ color: "rgba(117, 107, 227, 0.70)" }}
                className="block tracking-wide text-gray-700 text-xs font-bold text-left mb-1"
                htmlFor="grid-first-name"
              >
                Email
              </label>
              <input
                style={{ border: "2px solid #c2deff" }}
                className="appearance-none block w-full  text-gray-400 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                style={{ color: "rgba(117, 107, 227, 0.70)" }}
                className="block tracking-wide text-gray-700 text-xs font-bold text-left mb-1"
                htmlFor="grid-last-name"
              >
                Phone Number
              </label>
              <input
                style={{ border: "2px solid #c2deff" }}
                className="appearance-none block w-full text-gray-400 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 md:mb-0 relative">
              <label
                style={{ color: "rgba(117, 107, 227, 0.70)" }}
                className="block tracking-wide text-gray-700 text-xs font-bold text-left mb-1"
                htmlFor="grid-first-name"
              >
                Create Password
              </label>
              <input
                style={{ color: "#9e97ecb", border: "2px solid #c2deff" }}
                className="appearance-none block w-full  text-gray-400 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type={visible ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                value={password}
              />
              <div
                className="absolute right-6 top-9"
                onClick={() => setVisible(!visible)}
              >
                {visible ? <FaRegEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                style={{ color: "rgba(117, 107, 227, 0.70)" }}
                className="block tracking-wide text-gray-700 text-xs font-bold text-left mb-1"
                htmlFor="grid-last-name"
              >
                Confirm Password
              </label>

              <input
                style={{ border: "2px solid #c2deff" }}
                className="appearance-none block w-full text-gray-400 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0 text-left">
              <label className="block text-gray-500 font-bold">
                <input className="mr-2" type="checkbox" />
                <span className="text-sm" style={{ color: "#746BD4" }}>
                  I have read and agree to the{" "}
                  <span style={{ color: "#38B4FF" }}>terms of service</span>
                </span>
              </label>
            </div>
          </div>
          <div className="-mx-3 mb-6">
            <div className="w-50 px-3 mb-6">
              <button
                style={{ backgroundColor: "#ADA7EB" }}
                className="w-full shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Log In
              </button>
            </div>
          </div>
          <div className="inline-flex items-center justify-center w-full mb-6">
            <hr className="w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />
            <span
              style={{ color: "#645ACF" }}
              className="uppercase absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900"
            >
              or
            </span>
          </div>
          <div className="flex justify-center items-center mb-2">
            <FaPhoneAlt
              style={{ background: "#746bd4" }}
              className="text-white bg-violet-800 rounded-xl w-5 h-5 p-1 cursor-pointer"
            />
            <span
              className="px-2 font-bold cursor-pointer"
              style={{ color: "#746bd4" }}
            >
              Log in with Phone number
            </span>
          </div>
          <div className="flex justify-center items-center mb-4">
            <FaGoogle
              style={{ background: "#746bd4" }}
              className="text-white rounded-xl w-5 h-5 p-1 cursor-pointer"
            />
            <span
              className="px-2 font-bold cursor-pointer"
              style={{ color: "#746bd4" }}
            >
              Log in with Google
            </span>
          </div>
          <div className="mb-5 ">
            <span className=" mr-2" style={{ color: "#746bd4" }}>
              Already have an account?
            </span>
            <Link href="/logIn"
              className="font-bold" style={{ color: "#38B4FF", background: "transparent" }}>
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

