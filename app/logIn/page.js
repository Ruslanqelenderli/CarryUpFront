"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LogIn() {
  const apiurl = process.env.NEXT_PUBLIC_API_URL;

  const [users, setUsers] = useState({});
  const [error, setError] = useState("");
  const [visible, setVisible] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [data, setData] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [code, setCode] = useState("");
  const navigate = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUsers((values) => ({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const signIn = async () => {
    try {
      // Check if username and password are filled
      if (!users.userName || !users.password) {
        throw new Error("Please fill in all fields");
      }

      const res = await fetch(`${apiurl}/Manage/Login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstTab: users.userName,
          password: users.password,
          rememberMe: users.rememberMe,
        }),
        cache: "force-cache",
      });

      if (!res.ok) {
        throw new Error("API request failed");
      }

      const responseData = await res.json();

      if (responseData.success === false && responseData.errors) {
        // Handle specific errors if available
        if (responseData.errors.length > 0) {
          const errorMessages = responseData.errors.map(
            (error) => error.message
          );
          errorMessages.forEach((message) => toast.error(message));
        }
        return; // Stop further execution
      }

      const accessToken = responseData?.list?.[0]?.accessToken;
      const refreshToken = responseData?.list?.[0]?.refreshToken;

      if (accessToken && refreshToken && responseData.success === true) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        // Update state with tokens or data
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setData(responseData?.list);

        router.push("/");
      }
    } catch (error) {
      console.error("signIn error: ", error.message); // Log the specific error message
      toast.error(error?.message); // Show the specific error message to the user
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
                <label className="block text-sm  mb-2">Create Password</label>
                <input
                  className="border w-full py-2.5 px-3  mb-3 focus:outline-none focus:shadow-outline"
                  type={visible ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={users.password}
                  onChange={handleChange}
                />
                <div onClick={() => setVisible(!visible)}>
                  {visible ? (
                    <Image
                      src="/icons/hidden.png"
                      width={25}
                      height={35}
                      alt="Hide"
                      className="mt-0.5 hide"
                      priority={true}
                    />
                  ) : (
                    <Image
                      src="/icons/eye.png"
                      width={25}
                      height={35}
                      alt="Hide"
                      className="mt-0.5 hide"
                      priority={true}
                    />
                  )}
                </div>
              </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ToastContainer />
            <div className="flex justify-between items-center">
              <label className="block text-gray-500 font-bold my-4">
                <input
                  type="checkbox"
                  className="leading-loose "
                  name="rememberMe"
                  checked={users.rememberMe}
                  onChange={handleChange}
                />
                <span className="py-2 text-sm text-[#706AB5] leading-snug ml-2">
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
              className={`bg-[#635bb2] w-full text-white font-bold py-2.5 px-4 mt-4 transition-colors `}
              type="button"
              onClick={signIn}
              // disabled={isButtonDisabled}
            >
              Log In
            </button>
            <div className="inline-flex items-center justify-center w-full mb-6 mt-12">
              <hr className="w-full h-px border-0 " />
              <span
                style={{ color: "#645ACF" }}
                className="uppercase absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2"
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
                  console.log("res", res);
                }}
                onReject={(error) => {
                  console.log("error", error);
                }}
              >
                <span
                  className="px-1 font-bold cursor-pointer"
                  style={{ color: "#746bd4" }}
                >
                  Log in with Facebook
                </span>
              </LoginSocialFacebook>
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
