import Image from "next/image";
import Link from 'next/link'

import style from "../app.module.css";


export default function LogIn() {
  return (
    <main className=" flex flex-col items-center justify-center w-full flex-1 px-20  md:flex-row min-h-screen">
      <div className="main flex flex-col bg-white rounded-2xl shadow-2xl justify-center  items-center px-7 pt-6 ">
      <Image
            src="/images/carry.png"
            width={150}
            height={50}
            alt="Carry UP"
            priority={true}
          />
   
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 pt-7">
            <div className="w-full  px-3 md:mb-0">
              <label className="block  text-sm  mb-2">
                Phone Number or Email
              </label>
              <input
                className="border w-full py-2.5 px-3 mb-3 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Number or Email"
              />
            </div>
            <div className="w-full px-3 relative">
              <label className="block text-sm  mb-2">Password</label>
              <input
                className="border w-full py-2.5 px-3  mb-3 focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
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

          <a className={style.link} href="#">
        Forgot Password?
      </a>
      <button class=" w-full text-white font-bold py-2.5 px-4 mt-4 " type="button">
        Log In
      </button>
          <div className="inline-flex items-center justify-center w-full mb-6 mt-12">
            <hr className="w-full h-px border-0 dark:bg-gray-700" />
            <span
              style={{ color: "#645ACF" }}
              className="uppercase absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900"
            >
              or
            </span>
          </div>
          <div className="flex justify-center items-center mb-2">
          <Image
            src="/icons/phone.png"
            width={20}
            height={30}
            alt="Phone"
            className="mt-0.5"
            priority={true}
          />
            <span className="px-1 font-bold" style={{ color: "#746bd4" }}>
         Log in with Phone number
            </span>
          </div>
          <div className="flex justify-center items-center mb-4">
          <Image
            src="/icons/google.png"
            width={20}
            height={30}
            alt="Google"
            className="mt-0.5"
            priority={true}
          />
            <span className="px-2 font-bold" style={{ color: "#746bd4" }}>
              Log in with Google
            </span>
          </div>
          <div className="mb-5 text-center">
            <span className=" mr-2" style={{ color: "#746bd4" }}>
            Don’t have an account?
            </span>
            <Link className="font-bold" style={{ color: "#38B4FF" }} href="/signUp">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

