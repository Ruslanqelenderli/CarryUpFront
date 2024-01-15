"use client";

import { getData } from "@/app/components/postApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login"

export default function LogIn() {
  const [users, setUsers] = useState({
    userName: "",
    password: "",
  });
  const [visible, setVisible] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [data, setData] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

const clientId = "31047251623-lqjdgijc5q70avn2c7dj0tnf7cvk7bfm.apps.googleusercontent.com"


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUsers((values) => ({ ...values, [name]: value }));
    setIsButtonDisabled(
      !(
        users.userName &&
        users.userName.length >= 1 &&
        users.password &&
        users.password.length >= 6
      )
    );
  };

  const signIn = async () => {
    try {
      // const router = useRouter();
      const res = await fetch("http://carryforus-001-site1.htempurl.com/api/Manage/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstTab: users.userName,
          password: users.password,
          rememberMe: true,
        }),
        cache: "force-cache",
      });

      const responseData = await res.json();
      console.log("responseData", responseData);

      const accessToken = responseData?.list[0]?.accessToken;
      const refreshToken = responseData?.list[0]?.refreshToken;



      if (accessToken && refreshToken) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);


        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

        setData(responseData?.list);
        // router.push("/profile")
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("signIn error: ", error);
    }
  };
  return (
    <>
      <Navbar />
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
                  name="userName"
                  value={users.userName}
                  onChange={handleChange}
                />
              </div>

              <div className="w-full px-3 relative">
                <label
                  className="block text-sm  mb-2"
                >
                  Create Password
                </label>
                <input
                  className="border w-full py-2.5 px-3  mb-3 focus:outline-none focus:shadow-outline"
                  type={visible ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={users.password}
                  onChange={handleChange}


                />
                <div

                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <Image
                    src="/icons/hidden.png"
                    width={25}
                    height={35}
                    alt="Hide"
                    className="mt-0.5 hide"
                    priority={true}
                  /> : <Image
                    src="/icons/eye.png"
                    width={25}
                    height={35}
                    alt="Hide"
                    className="mt-0.5 hide"
                    priority={true}
                  />}
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <label className="block text-gray-500 font-bold my-4">
                <input type="checkbox" className="leading-loose " />{" "}
                <span className="py-2 text-sm text-[#706AB5] leading-snug">
                  Remember Me
                </span>
              </label>
              <label className="block text-gray-500 font-bold my-4">
                <a href="#" className="link cursor-pointer tracking-tighter ">
                  <span>Forgot Password?</span>
                </a>
              </label>
            </div>
            <button
              className={`w-full text-white font-bold py-2.5 px-4 mt-4 transition-colors `}
              type="button"
              onClick={signIn}
              // disabled={isButtonDisabled}
              style={{
                backgroundColor: "#635bb2",
              }}
            >
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
              <LoginSocialFacebook
                appId="1353360878656411"
                onResolve={(res) => {
                  console.log('res', res);
                }}
                onReject={(error) => {
                  console.log('error', error);
                }}
              >
                <span className="px-1 font-bold cursor-pointer" style={{ color: "#746bd4" }}>
                  Log in with Facebook
                </span>
              </LoginSocialFacebook>

            </div>
            <div className="flex justify-center items-center mb-4 cursor-pointer">
              <Image
                src="/icons/google.png"
                width={20}
                height={30}
                alt="Google"
                className="mt-0.5"
                priority={true}
              />

              <LoginSocialGoogle
                client_id={"1096172010992-28n6kbrvd7t8p4ctv1s9dvfacq9j0dpn.apps.googleusercontent.com"}
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={(provider,data) => {
                  console.log('res', provider,{...data});
                }}
                onReject={(error) => {
                  console.log('error', error);
                }}
              >
                <span className="px-2 font-bold" style={{ color: "#746bd4" }}>
                  Log in with Google
                </span>
              </LoginSocialGoogle>
            </div>
            <div className="mb-5 text-center">
              <span className=" mr-2" style={{ color: "#746bd4" }}>
                Don’t have an account?
              </span>
              <Link
                className="font-bold"
                style={{ color: "#38B4FF" }}
                href="/signUp"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>

  );
}
