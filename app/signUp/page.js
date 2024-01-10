"use client";
import Link from "next/link";
import { useState } from "react";

import { FaPhoneAlt, FaGoogle, FaRegEyeSlash, FaEye } from "react-icons/fa";
import Navbar from "../components/navbar";
import Image from "next/image";
import styles from "./page.module.css"
export default function SignUp() {

  const [formData, setformData] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    birthDate: ""
  })
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://carryuptest.somee.com/api/Manage/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Data sent', data);
      } else {
        const errorData = await response.json();
        console.error('Error sending data:', errorData);
        if (errorData.errors) {
          console.log('Validation errors:', errorData.errors);
        }
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center md:flex-row min-h-screen">
        <div className="flex flex-col bg-white rounded-2xl shadow-2xl justify-center text-center items-center px-7">
          <Image src="/carry.png" width={150} height={150} className="my-5" />
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
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
                  style={{ border: "1px solid linear-gradient(to right, #f8ccfd, #cbfbff" }}
                  className="appearance-none block w-full  text-gray-400 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  style={{ color: "rgba(117, 107, 227, 0.70)" }}
                  className="block tracking-wide text-gray-700 text-xs font-bold text-left mb-1"
                  htmlFor="grid-last-name"
                >
                  Surname
                </label>
                <input
                  style={{ border: "1px solid #c2deff" }}
                  className="appearance-none block w-full text-gray-400 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
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
                  Birthday
                </label>
                <input
                  style={{ border: "1px solid linear-gradient(to right, #f8ccfd, #cbfbff" }}
                  className="appearance-none block w-full  text-gray-400 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="date"
                  placeholder="DD/MM/YYYY"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                />
              </div>

              {/* gender */}
              <div className="w-full md:w-1/2 px-3 text-left">
                <label style={{ color: "rgba(117, 107, 227, 0.70)", marginBottom: "12px" }} className="block tracking-wide text-gray-700 text-xs font-bold text-left mb-1">
                  Gender
                </label>

                <label htmlFor="male" id="male-label" className={styles["male-label"]}>
                  <input type="radio" id="male" name="gender" className={`${styles.male} ${styles['custom-radio']}`} />
                  Male
                </label>
                <label htmlFor="female" className={styles["female-label"]}>
                  <input type="radio" id="female" name="gender" className={`${styles.female} ${styles['custom-radio']}`} />
                  Female
                </label>

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
                  style={{ border: "1px solid #c2deff" }}
                  className="appearance-none block w-full  text-gray-400 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  style={{ border: "1px solid #c2deff" }}
                  className="appearance-none block w-full text-gray-400 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
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
                  style={{ color: "#9e97ecb", border: "1px solid #c2deff" }}
                  className="appearance-none block w-full  text-gray-400 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="password"
                  placeholder="Password"
                  // value={password}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
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
                  style={{ border: "1px solid #c2deff" }}
                  className="appearance-none block w-full text-gray-400 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="password"
                  placeholder="Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            {error && (
              <div className="text-red-500 text-sm mt-2">
                {error}
              </div>
            )}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0 text-left">
                <label className="text-gray-500 font-bold flex">
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
                  type="submit"
                >
                  Sign Up
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
    </div>
  );
}