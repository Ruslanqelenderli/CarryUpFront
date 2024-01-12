"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";

const Create = () => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const limit = 200;
  const limit1 = 200;

  const handleInput = () => {
    const textLength = event.target.value.length;
    setText(event.target.value);
    // console.log(textLength);
  };
  const handleInput1 = () => {
    const textLength1 = event.target.value.length;
    setText1(event.target.value);
    // console.log(textLength1);
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-6">
        {/* p-8 */}

        <div
          className="bg-white rounded-2xl shadow-lg max-w-3xl p-8 w-full border border-[#B632FF] border-solid"
          style={{
            boxShadow:
              "-5px 0px 50px 0px rgba(0, 0, 0, 0.10), 5px 0px 50px 0px rgba(0, 0, 0, 0.10",
          }}
        >
          <div className="text-left">
            <h1 className="font-semibold text-3xl text-[#4A4A4A]">
              Post an ad
            </h1>
          </div>

          <div className="text-left p-2">
            <p className="font-semibold text-lg leading-normal mb-8 p-2 text-[#4A4A4A] mt-3">
              Reason for publication
              <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                *
              </span>
            </p>
          </div>

          <div className="flex justify-evenly">
            <div className="text-center">
              <button className="text-[#C5D9FF] border border-[#C5D9FF] rounded-lg w-32 h-12 font-medium">
                For Send
              </button>
              <p className="text-[#C5D9FF] w-60 font-medium text-sm">
                If you want to send something with someone, click on it
              </p>
            </div>
            <div className="text-center">
              <button className="text-[#C5D9FF] border border-[#C5D9FF] rounded-lg w-32 h-12 font-medium">
                For Carry
              </button>
              <p className="text-[#C5D9FF] w-52 font-medium text-sm">
                If you want to carry something, click on it
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col mt-4  p-6 gap-20">
            <div className="font-semibold text-lg">
              <h2 htmlFor="#" className="text-[#4A4A4A] font-semibold mb-1">
                Title
                <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                  *
                </span>
              </h2>
              <textarea
                className="border border-[#C5D9FF] rounded-lg p-2 resize-none w-64 placeholder:text-[#ACC9FF] focus:outline-none focus:border-[#C5D9FF]"
                name="title"
                id="title_textarea"
                cols="25"
                rows="2"
                placeholder="Type here..."
                style={{ letterSpacing: "0.4px" }}
                onChange={handleInput}
                value={text}
                maxLength={200}
              ></textarea>
              <p
                id="result"
                className="text-[#85AEFF] text-xs leading-normal font-medium"
              >
                {text.length} / {limit}
              </p>
            </div>
            <div className="font-semibold text-lg">
              <h2 htmlFor="#" className="text-[#4A4A4A] mb-1">
                Description
                <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                  *
                </span>
              </h2>
              <div className="">
                <div>
                  <textarea
                    className="border border-[#C5D9FF] rounded-lg p-2 resize-none placeholder:text-[#ACC9FF] focus:outline-none focus:border-[#C5D9FF]"
                    name="title"
                    id="title_textarea"
                    cols="30"
                    rows="3"
                    placeholder="Type here..."
                    style={{ letterSpacing: "0.4px" }}
                    onChange={handleInput1}
                    value={text1}
                    maxLength={200}
                  ></textarea>
                </div>

                <div className="">
                  <p
                    id="result"
                    className="text-[#85AEFF] text-xs leading-normal font-medium"
                  >
                    {text1.length} / {limit1}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col p-6 gap-20">
            <div className="">
              <form action="" className="flex flex-col">
                <label htmlFor="" className="mb-1">
                  Category
                  <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  className="border border-[#C5D9FF] rounded-md bg-[#F2F6FF] p-2 w-64 focus:outline-none focus:border-[#C5D9FF]"
                  placeholder="Document"
                />
              </form>
            </div>

            <div className="flex gap-16">
              <form action="" className="flex flex-col">
                <label htmlFor="" className="mb-1">
                  Price
                  <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  className="border border-[#C5D9FF] rounded-lg p-2 w-28 focus:outline-none focus:border-[#C5D9FF]"
                  placeholder="Amount"
                />
              </form>
              <div className="">
                <form action="" className="">
                  <label htmlFor="" className="flex mb-1 mt-3">
                    Currency
                    <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                      *
                    </span>
                  </label>
                  <input
                    type="radio"
                    name="currency"
                    id="AznCurrency"
                    className="mr-1"
                  />
                  <label htmlFor="AznCurrency" className="mr-2">
                    AZN
                  </label>
                  <input
                    type="radio"
                    name="currency"
                    id="UsdCurrency"
                    className="mr-1"
                  />
                  <label htmlFor="UsdCurrency">USD</label>
                </form>
              </div>
            </div>
          </div>

          {/* <div className="">
            <div>
              <h2 htmlFor="">From</h2>
              <input type="text" placeholder="City" className="border border-[#C5D9FF] p-1"/>
            </div>
            <div>
              <h2>Date</h2>
              <input type="date" />
            </div>
          </div> */}

          <div className="text-right flex justify-end gap-6 mt-4">
            <button className="rounded-lg border-2 border-[#85AEFF] h-11 w-32 text-[#85AEFF] font-medium">
              Cancel
            </button>
            <button className="rounded-lg bg-[#A8C6FF] h-11 w-32 text-white font-medium">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
