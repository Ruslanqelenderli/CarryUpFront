"use client";
import React, { useRef, useState } from "react";
// import Navbar from "../components/navbar";
import Image from "next/image";
import Navbar1 from "../components/navbar1";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Create = () => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [open, setOpen] = useState(false);
  const [forCarryClicked, setForCarryClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startDate1, setStartDate1] = useState(null);

  const initialData = {
    title: "",
    description: "",
    package: {
      currency: 0,
      price: 0,
      count: 0,
      deadline: "2024-01-18T07:46:39.258Z",
      packageCategoryId: 0,
      packageSubCategoryId: 0,
    },
    case: {
      userId: "123e4567-e89b-12d3-a456-426614174001",
    },
    tripPlaceDetailAddModels: [
      {
        fromPlace: "",
        fromTripDate: "",
        toPlace: "",
        toTripDate: "",
        travelType: 0,
      },
    ],
  };
  const [formData, setFormData] = useState(initialData);

  const limit = 200;
  const limit1 = 200;

  const handleInput = (event) => {
    const textLength = event.target.value.length;
    setText(event.target.value);
  };
  const handleInput1 = (event) => {
    const textLength1 = event.target.value.length;
    setText1(event.target.value);
  };

  const ref = useRef();
  const ref1 = useRef();

  const handleAnotherClick = () => {
    setOpen(!open);
    setForCarryClicked(!forCarryClicked);
    // setTextColor(textColor ? "#85AEFF" : "black")
  };

  const handleChange = (event) => {
    const value = event.target.value;

    if (!isNaN(value)) {
      const numeric = parseFloat(value);
      if (numeric >= 0 && numeric <= 999) {
        setInputValue(value);
      }
    }
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      // Handle price input separately if needed
      setFormData((prevData) => ({
        ...prevData,
        package: {
          ...prevData.package,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    // setFormData({ ...formData, [name]: value });
  };

  const handleStartDate = (date) => {
    setStartDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://carryforus-001-site1.htempurl.com/api/Trip/Create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Data sents", data);
      } else {
        const errorData = await response.json();
        console.error("Error sending datas:", errorData);
        if (errorData.errors) {
          console.log("Validation errorss:", errorData.errors);
        }
      }
    } catch (error) {
      console.error("Fetch errors:", error);
    }
  };

  return (
    <>
      <Navbar1 />
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
              <button
                className={`border border-[#C5D9FF] rounded-lg w-32 h-12 font-medium ${
                  forCarryClicked ? "bg-[#85AEFF]" : "bg-transparent"
                } ${forCarryClicked ? "text-[#fff]" : "text-[#C5D9FF]"}`}
                onClick={handleAnotherClick}
              >
                For Carry
              </button>
              <p
                className={`w-52 font-medium text-sm ${
                  forCarryClicked ? "text-[#85AEFF]" : "text-[#C5D9FF]"
                }`}
              >
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
              <form action=""></form>
              <textarea
                className="border border-[#C5D9FF] rounded-lg p-2 resize-none w-64 placeholder:text-[#ACC9FF] focus:outline-none focus:border-[#78A7FF]"
                name="title"
                id="title_textarea"
                cols="25"
                rows="2"
                placeholder="Type here..."
                style={{ letterSpacing: "0.4px" }}
                value={formData?.title}
                onChange={handleChange1}
                maxLength={200}
              ></textarea>
              <p
                id="result"
                className="text-[#85AEFF] text-xs leading-normal font-medium md:text-right"
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
                    className="border border-[#C5D9FF] rounded-lg p-2 resize-none placeholder:text-[#ACC9FF] focus:outline-none focus:border-[#78A7FF]"
                    name="description"
                    id="title_textarea"
                    cols="30"
                    rows="3"
                    placeholder="Type here..."
                    style={{ letterSpacing: "0.4px" }}
                    onChange={handleChange1}
                    value={formData?.description}
                    maxLength={200}
                  ></textarea>
                </div>
                <div className="">
                  <p
                    id="result"
                    className="text-[#85AEFF] text-xs leading-normal font-medium md:text-right"
                  >
                    {text1.length} / {limit1}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col p-6 gap-20">
            <div className="">
              <form action="" className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="" className="mb-1">
                  Category
                  <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                    *
                  </span>
                </label>
                <input
                  disabled
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
                  value={formData.package?.price}
                  onChange={handleChange1}
                  max="999"
                  min="0"
                  type="text"
                  className="border border-[#C5D9FF] rounded-lg p-2 w-28 focus:outline-none focus:border-[#78A7FF]
                  "
                  placeholder="Amount"
                  name="price"
                />
              </form>
              <div className="">
                <form action="" className="">
                  <label htmlFor="" className="flex mb-1 mt-2">
                    Currency
                    <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                      *
                    </span>
                  </label>
                  <input
                    type="radio"
                    checked={formData.package.currency === 0}
                    name="currency"
                    id="AznCurrency"
                    className="mr-1"
                  />
                  <label htmlFor="AznCurrency" className="mr-2">
                    AZN
                  </label>
                  <input
                    type="radio"
                    checked={formData.package.currency === 1}
                    name="currency"
                    id="UsdCurrency"
                    className="mr-1"
                  />
                  <label htmlFor="UsdCurrency">USD</label>
                </form>
              </div>
            </div>
          </div>

          {open && (
            <div className="addAnother">
              <div className="flex md:flex-row flex-col p-6 gap-20">
                <div className="">
                  <form action="" className="flex flex-col">
                    <label htmlFor="" className="mb-1">
                      From
                      <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border border-[#C5D9FF] rounded-md p-2 w-64 focus:outline-none focus:border-[#78A7FF]
                      "
                      placeholder="City"
                      value={formData.tripPlaceDetailAddModels.fromPlace}
                      onChange={handleChange1}
                    />
                  </form>
                </div>

                <div className="flex gap-16">
                  <form action="" className="flex flex-col relative">
                    <label htmlFor="" className="mb-1">
                      Date
                      <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                        *
                      </span>
                    </label>
                    <div className="relative">
                      {/* <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                          handleChange1({
                            target: { name: "fromTripDate", value: date },
                          });
                          handleStartDate(date);
                        }}
                        className="border border-[#C5D9FF] rounded-md p-2 w-64 focus:outline-none focus:border-[#C5D9FF]  placeholder:text-[#ACC9FF]"
                        placeholderText="DD/MM/YYYY"
                        value={
                          formData.tripPlaceDetailAddModels[0]?.fromTripDate
                        }
                      /> */}
                      <DatePicker
  selected={startDate}
  onChange={(date) => {
    handleChange1({
      target: { name: "toTripDate", value: date },
    });
    handleStartDate(date);
  }}
  showTimeSelect
  timeFormat="HH:mm"
  timeIntervals={15}
  dateFormat="dd/MM/yyyy HH:mm"
  className="border border-[#C5D9FF] rounded-md p-2 w-64 focus:outline-none focus:border-[#C5D9FF] placeholder:text-[#ACC9FF]"
  placeholderText="DD/MM/YYYY HH:mm"
  value={formData.tripPlaceDetailAddModels[0]?.toTripDate}
/>
                    </div>
                    <Image
                      src="/date.png"
                      width={20}
                      height={20}
                      className="absolute"
                      style={{ top: "60%", left: "87%" }}
                    />
                  </form>
                </div>
              </div>

              <div className="flex md:flex-row flex-col p-6 gap-20">
                <div className="">
                  <form action="" className="flex flex-col">
                    <label htmlFor="" className="mb-1">
                      To
                      <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border border-[#C5D9FF] rounded-md p-2 w-64 focus:outline-none focus:border-[#78A7FF]"
                      placeholder="City"
                      value={formData.tripPlaceDetailAddModels.toPlace}
                      onChange={handleChange1}
                    />
                  </form>
                </div>

                <div className="flex gap-16">
                  <form action="" className="flex flex-col relative">
                    <label htmlFor="" className="mb-1">
                      Date
                      <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                        *
                      </span>
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                          handleChange1({
                            target: { name: "toTripDate", value: date },
                          });
                          handleStartDate(date);
                        }}
                        className="border border-[#C5D9FF] rounded-md p-2 w-64 focus:outline-none focus:border-[#C5D9FF]  placeholder:text-[#ACC9FF]"
                        placeholderText="DD/MM/YYYY"
                        value={formData.tripPlaceDetailAddModels[0]?.toTripDate}
                      />
                    </div>
                    <Image
                      src="/date.png"
                      width={20}
                      height={20}
                      className="absolute"
                      style={{ top: "60%", left: "87%" }}
                    />
                  </form>
                </div>
              </div>
              <div className="p-6 flex justify-between">
                <div>
                  <p>
                    Transport{" "}
                    <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                      *
                    </span>
                  </p>

                  <form action="" className=" gap-1">
                    <input
                      type="radio"
                      value="Bus"
                      id="bus"
                      name="transport"
                      className="mr-1 cursor-pointer"
                    />
                    <label htmlFor="bus" className="mr-5">
                      Bus
                    </label>
                    <input
                      type="radio"
                      value="Car"
                      id="car"
                      name="transport"
                      className="mr-1"
                    />
                    <label htmlFor="car" className="mr-5">
                      Car
                    </label>
                    <input
                      type="radio"
                      value="Plane"
                      id="plane"
                      name="transport"
                      className="mr-1"
                    />
                    <label htmlFor="plane" className="mr-5">
                      Plane
                    </label>
                    <input
                      type="radio"
                      value="Ship"
                      id="ship"
                      name="transport"
                      className="mr-1"
                    />
                    <label htmlFor="ship" className="mr-5">
                      Ship
                    </label>
                    <input
                      type="radio"
                      value="Train"
                      id="train"
                      name="transport"
                      className="mr-1"
                    />
                    <label htmlFor="train" className="mr-5">
                      Train
                    </label>
                  </form>
                </div>

                <div className="self-center">
                  <button className="rounded-sm bg-[#A8C6FF] h-10 w-36 text-white font-medium">
                    Add another
                  </button>
                </div>
              </div>
            </div>
          )}
          <form action="" onSubmit={handleSubmit}>
            <div className="text-right flex justify-end gap-6 mt-4">
              <button className="rounded-lg border-2 border-[#85AEFF] h-11 w-32 text-[#85AEFF] font-medium">
                Cancel
              </button>
              <button className="rounded-lg bg-[#A8C6FF] h-11 w-32 text-white font-medium">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
