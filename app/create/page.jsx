import React from "react";
import Navbar from "../components/navbar";

const Create = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-10">
        <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-8">
          <h1 className="font-semibold text-4xl mb-5 text-[#4A4A4A]">
            Post an ad
          </h1>

          <div>
            <p className="font-semibold text-xl mb-8 ml-8 text-[#4A4A4A]">
              Reason for publication{" "}
              <span className="text-[#FF5C00] font-semibold text-2xl">*</span>
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

          <div className="flex justify-between md:flex-row flex-col mt-12">
            <div className="font-semibold text-lg">
              <h2 htmlFor="#" className="text-[#4A4A4A] font-semibold">
                Title{" "}
                <span className="text-[#FF5C00] font-semibold text-2xl">*</span>
              </h2>
              <textarea
                className="border border-[#C5D9FF] rounded-lg p-2 resize-none"
                name="title"
                id="title_textarea"
                cols="35"
                rows="3"
                placeholder="Type here..."
              ></textarea>
            </div>
            <div className="font-semibold text-lg">
              <h2 htmlFor="#" className="text-[#4A4A4A]">
                Description{" "}
                <span className="text-[#FF5C00] font-semibold text-2xl">*</span>
              </h2>
              <textarea
                className="border border-[#C5D9FF] rounded-lg p-2 resize-none"
                name="title"
                id="title_textarea"
                cols="30"
                rows="4"
                placeholder="Type here..."
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between md:flex-row flex-col">
            <form action="" className="flex">
              <div className="flex flex-col mr-20">
                <label htmlFor="">
                  Category{" "}
                  <span className="text-[#FF5C00] font-semibold text-2xl">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  className="border border-[#C5D9FF] rounded-md bg-[#F2F6FF] p-2 w-80"
                  placeholder="Document"
                />
              </div>
            </form>

            <div className="flex">
              <div className="flex flex-col mr-16">
                <label htmlFor="">
                  Price{" "}
                  <span className="text-[#FF5C00] font-semibold text-2xl">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  className="border border-[#C5D9FF] rounded-lg p-2 w-28"
                  placeholder="Amount"
                />
              </div>
              <div className="">
                <label htmlFor="" className="flex">
                  Currency
                  <span className="text-[#FF5C00] font-semibold text-2xl">
                    *
                  </span>
                </label>
                <input type="radio" name="" id="" className="mr-1" />
                <label htmlFor="" className="mr-8">
                  AZN
                </label>
                <input type="radio" name="" id="" className="mr-1" />
                <label htmlFor="">USD</label>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-between md:flex-row flex-col mt-12">
            <div>
              <h2 htmlFor="">From</h2>
              <input type="text" placeholder="City" />
            </div>
            <div>
              <h2>Date</h2>
              <input type="date" />
            </div>
          </div> */}

          <div className="text-right mt-12">
            <button className="rounded-lg border-2 border-[#85AEFF] h-12 w-36 text-[#85AEFF] font-medium mr-5">
              Cancel
            </button>
            <button className="rounded-lg bg-[#A8C6FF] h-12 w-36 text-white font-medium">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
