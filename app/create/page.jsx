"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar1 from "../components/navbar1";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TableList from "../components/tableList";
import { travelType } from "../components/constant";

const Create = () => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [open, setOpen] = useState(false);
  const [openSend, setOpenSend] = useState(false);
  const [forCarryClicked, setForCarryClicked] = useState(false);
  const [forSendClicked, setForSendClicked] = useState(false);
  const [sendButtonColor, setSendButtonColor] = useState("#C5D9FF");
  const [tableData, setTableData] = useState([]);
  const [carryButtonColor, setCarryButtonColor] = useState("#C5D9FF");
  const [showTableList, setShowTableList] = useState(false);
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("#B0CBFF");
  const [saveBackground, setSaveButtonBackground] = useState("#A8C6FF");
  const [formData, setFormData] = useState({
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
        travelType: "",
      },
    ],
    sendPlaceDetailAddModels: [
      {
        fromPlace: "",
        catchDate: "2024-01-28T22:34:08.460Z",
        toPlace: "",
      },
    ],
  });

  const transportEnum = {
    BUS: "Bus",
    PLANE: "Plane",
    CAR: "Car",
    SHIP: "Ship",
    TRAIN: "Train",
  };
  // debugger;

  // console.log("enum", transportEnum);
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const values = value === "azn" ? 1 : 0;
    const travelType = transportEnum[value]; // Use 'value' to get the selected transport type
    setFormData((prevFormData) => {
      if (name.startsWith("tripPlaceDetailAddModels")) {
        const newTripPlaceDetailAddModels = [
          ...prevFormData.tripPlaceDetailAddModels,
          travelType,
        ];
        newTripPlaceDetailAddModels[index] = {
          ...newTripPlaceDetailAddModels[index],
          [name.split(".")[1]]: value,
        };

        return {
          ...prevFormData,
          tripPlaceDetailAddModels: newTripPlaceDetailAddModels,
        };
      } else {
        return {
          ...prevFormData,
          [name]: value,
          package: {
            ...prevFormData.package,
            [name]: value,
            count: name === "count" ? value : prevFormData.package.count,
            currency: values,
          },
        };
      }
    });
    console.log("target", e.target.value);
  };

  // console.log("form", travelType);
  useEffect(() => {
    console.log(formData);
    setButtonBackgroundColor(areAllFieldsFilled() ? "#85AEFF" : "#B0CBFF");
    setSaveButtonBackground(areAllFieldsFilled() ? "#669AFF" : "#A8C6FF");
  }, [formData]);

  const areAllFieldsFilled = () => {
    const requiredFields = [
      formData.title,
      formData.description,
      formData.package.price,
      formData.package.currency,
      formData.tripPlaceDetailAddModels[0].fromTripDate,
      formData.tripPlaceDetailAddModels[0].fromPlace,
      formData.tripPlaceDetailAddModels[0].toTripDate,
      formData.tripPlaceDetailAddModels[0].toPlace,
      formData.tripPlaceDetailAddModels[0].travelType,
    ];

    // return requiredFields.every((field) => field.trim() !== '');
    return requiredFields.every(
      (field) =>
        field !== undefined && field !== null && field.toString().trim() !== ""
    );
  };

  const limit = 200;
  const limit1 = 200;

  const handleAnotherClick = () => {
    setOpen(!open);
    setForCarryClicked(!forCarryClicked);
    setOpenSend(false);
    // setTextColor(textColor ? "#85AEFF" : "black")

    setSendButtonColor("#C5D9FF");
    setCarryButtonColor("#C5D9FF");
  };

  function handleClickSend() {
    setOpenSend(!openSend);
    setForSendClicked(!forSendClicked);
    setOpen(false);

    setSendButtonColor(forSendClicked ? "#C5D9FF" : "#85AEFF");
    setCarryButtonColor("#C5D9FF");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTableData((prevTableData) => [...prevTableData, formData]);
    setFormData({
      title: "",
      description: "",
      package: {
        currency: 0,
        price: "",
        count: "",
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
          travelType: "",
        },
      ],
    });
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

  function maxLengthCheck(num) {
    if (num.value.length > num.maxLength) {
      num.value = num.value.slice(0, num.maxLength);
    }
  }

  const handleAddAnother = () => {
    setTableData((prevTableData) => [...prevTableData, formData]);
    setFormData((prevFormData) => ({
      ...prevFormData,
      tripPlaceDetailAddModels: [
        {
          fromPlace: "",
          fromTripDate: "",
          toPlace: "",
          toTripDate: "",
          travelType: "",
        },
      ],
    }));
    setShowTableList(true); // Show the TableList when adding another entry
  };

  const handleButtonClick2 = () => {
    // Make POST request to API 2 with formData
    fetch("http://carryforus-001-site1.htempurl.com/api/Send/Create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if needed
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle API 2 response
        console.log("API 2 response:", data);
      })
      .catch((error) => {
        // Handle error for API 2
        console.error("Error making API 2 request:", error);
      });
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
          <form action="" onSubmit={handleSubmit}>
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
                <button
                  className={`border border-[#C5D9FF] rounded-lg w-32 h-12 font-medium
                ${forSendClicked ? "bg-[#85AEFF]" : "bg-transparent"} ${
                    forSendClicked ? "text-[#fff]" : "text-[#C5D9FF]"
                  }`}
                  onClick={handleClickSend}
                  type="button"
                >
                  For Send
                </button>
                <p
                  className={`w-60 font-medium text-sm ${
                    forSendClicked ? "text-[#85AEFF]" : "text-[#C5D9FF]"
                  }`}
                >
                  If you want to send something with someone, click on it
                </p>
              </div>
              <div className="text-center">
                <button
                  className={`border border-[#C5D9FF] rounded-lg w-32 h-12 font-medium ${
                    forCarryClicked ? "bg-[#85AEFF]" : "bg-transparent"
                  } ${forCarryClicked ? "text-[#fff]" : "text-[#C5D9FF]"}`}
                  onClick={handleAnotherClick}
                  type="button"
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
            <div className="flex md:flex-row flex-col mt-4 p-6 gap-20">
              <div className="font-semibold text-lg">
                <h2 htmlFor="#" className="text-[#4A4A4A] font-semibold mb-1">
                  Title
                  <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                    *
                  </span>
                </h2>
                <textarea
                  className="border border-[#C5D9FF] rounded-lg p-2 resize-none w-64 placeholder:text-[#ACC9FF] focus:outline-none focus:border-[#78A7FF]"
                  name="title"
                  id="title_textarea"
                  cols="25"
                  rows="2"
                  placeholder="Type here..."
                  style={{ letterSpacing: "0.4px" }}
                  value={formData.title}
                  onChange={handleChange}
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
                      value={formData?.description}
                      onChange={handleChange}
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

            <div className="flex md:flex-row flex-col p-6 gap-24">
              <div className="flex flex-row gap-1">
                <div className="flex flex-col">
                  <label htmlFor="" className="mb-1">
                    Category
                    <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                      *
                    </span>
                  </label>
                  <input
                    disabled
                    type="text"
                    className="border border-[#C5D9FF] placeholder:text-[#717171] rounded-md bg-[#F2F6FF] p-2 w-40 focus:outline-none focus:border-[#C5D9FF] cursor-not-allowed"
                    placeholder="Document"
                  />
                </div>
                {/* <div className="flex flex-col">
                  <label htmlFor="" className="mb-1">
                    Count
                    <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                      *
                    </span>
                  </label>
                  <input
                    type="number"
                    className="border border-[#C5D9FF] rounded-md bg-[#F2F6FF] p-2 w-20 focus:outline-none focus:border-[#C5D9FF]"
                    placeholder="1"
                    value={formData.package.count}
                    onChange={handleChange}
                  />
                </div> */}
              </div>

              <div className="flex gap-20">
                <div className="flex flex-col">
                  <label htmlFor="" className="mb-1">
                    Price
                    <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                      *
                    </span>
                  </label>
                  <input
                    value={formData.package.price}
                    onChange={handleChange}
                    onInput={(e) => maxLengthCheck(e.target)}
                    max="999"
                    min="0"
                    maxLength={3}
                    type="number"
                    className="border border-[#C5D9FF] rounded-lg p-2 w-28
                   focus:outline-none focus:border-[#78A7FF] placeholder:text-[#ACC9FF]"
                    placeholder="Amount"
                    name="price"
                    pattern="[0-9]*"
                  />
                </div>

                <div className="">
                  <label htmlFor="" className="flex mt-1">
                    Currency
                    <span
                      className="text-[#FF5C00] font-semibold text-2xl transform
                     translate-x-0 -translate-y-1"
                    >
                      *
                    </span>
                  </label>
                  <select
                    onChange={handleChange}
                    id="countries"
                    className="border border-[#C5D9FF] text-[#ACC9FF] text-sm rounded-lg block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option selected disabled>
                      Choose
                    </option>
                    <option
                      value="azn"
                      name="azn"
                      id="azn"
                      checked={formData.package.currency === 1}
                      onChange={handleChange}
                    >
                      Azn
                    </option>
                    <option
                      value="usd"
                      name="usd"
                      id="usd"
                      checked={formData.package.currency === 0}
                      onChange={handleChange}
                    >
                      Usd
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {openSend && (
              <>
                <div className="flex flex-col p-6 gap-20 md:flex-row">
                  <div className="flex flex-col">
                    <label htmlFor="">
                      From
                      <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border border-[#C5D9FF] rounded-md p-2 w-64 focus:outline-none focus:border-[#C5D9FF]"
                      placeholder="City"
                      value={formData.tripPlaceDetailAddModels[0].fromPlace}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">
                      To
                      <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border border-[#C5D9FF] rounded-md p-2 w-64 focus:outline-none focus:border-[#C5D9FF]"
                      placeholder="City"
                      value={formData.tripPlaceDetailAddModels[0].toPlace}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="p-6 flex flex-col">
                  <label htmlFor="">
                    Date of appointment
                    <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                      *
                    </span>
                  </label>
                  <input
                    type="date"
                    className="border border-[#C5D9FF] rounded-md p-2 w-64 focus:outline-none focus:border-[#C5D9FF]"
                    placeholder="DD/MM/YYYY"
                    name={`sendPlaceDetailAddModels[0].catchDate`}
                    // value={formData.tripPlaceDetailAddModels[0].toPlace}
                    // onChange={handleChange}
                    // onChange={}
                  />
                </div>
              </>
            )}

            {open && (
              <div>
                <div className="flex flex-row p-6 gap-20">
                  <div className="flex flex-col">
                    <label htmlFor="">
                      From
                      <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border border-[#C5D9FF] rounded-md p-2 w-64 focus:outline-none focus:border-[#C5D9FF]"
                      placeholder="City"
                      // value={formData.tripPlaceDetailAddModels[0].fromPlace}
                      name={`tripPlaceDetailAddModels[0].fromPlace`}
                      onChange={(e) => handleChange(e, 0)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">
                      Date
                      <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                        *
                      </span>
                    </label>
                    <input
                      type="date"
                      className="border border-[#C5D9FF] rounded-md p-2 w-64 focus:outline-none focus:border-[#C5D9FF]"
                      placeholder="City"
                      name={`tripPlaceDetailAddModels[0].fromTripDate`}
                      // value={formData.tripPlaceDetailAddModels[0].fromTripDate}
                      onChange={(e) => handleChange(e, 0)}
                    />
                  </div>
                </div>

                <div className="flex flex-row p-6 gap-20">
                  <div className="flex flex-col">
                    <label htmlFor="">
                      To
                      <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border border-[#C5D9FF] rounded-md p-2 w-64 focus:outline-none focus:border-[#C5D9FF]"
                      placeholder="City"
                      // value={formData.tripPlaceDetailAddModels[0].toPlace}
                      name={`tripPlaceDetailAddModels[0].toPlace`}
                      onChange={(e) => handleChange(e, 0)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">
                      Date
                      <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                        *
                      </span>
                    </label>
                    <input
                      type="date"
                      className="border border-[#C5D9FF] rounded-m p-2 w-64 focus:outline-none focus:border-[#C5D9FF]"
                      placeholder="City"
                      name={`tripPlaceDetailAddModels[0].toTripDate`}
                      // value={formData.tripPlaceDetailAddModels[0].toTripDate}
                      onChange={(e) => handleChange(e, 0)}
                    />
                  </div>
                </div>
                <div className="flex flex-row p-6 gap-48">
                  <div>
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Transport
                    </label>
                    <select
                      onChange={(e) => handleChange(e)}
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected disabled>
                        Choose transport
                      </option>
                      <option value={transportEnum.BUS}>Bus</option>
                      <option value={transportEnum.CAR}>Car</option>
                      <option value={transportEnum.PLANE}>Plane</option>
                      <option value={transportEnum.SHIP}>Ship</option>
                      <option value={transportEnum.TRAIN}>Train</option>
                    </select>
                  </div>

                  <div className="self-center mt-6">
                    <button
                      className="rounded-sm bg-[#A8C6FF] h-10 w-36 text-white font-medium cursor-pointer"
                      style={{ backgroundColor: buttonBackgroundColor }}
                      onClick={handleAddAnother}
                      disabled={!areAllFieldsFilled()}
                    >
                      Add another
                    </button>
                  </div>
                </div>
                {showTableList && <TableList data={tableData} />}
              </div>
            )}
            <div className="text-right flex justify-end gap-6 mt-4">
              <button className="rounded-lg border-2 border-[#85AEFF] h-11 w-32 text-[#85AEFF] font-medium cursor-pointer">
                Cancel
              </button>
              <button
                className="rounded-lg bg-[#A8C6FF] h-11 w-32 text-white font-medium cursor-pointer"
                style={{ backgroundColor: saveBackground }}
                // onClick={handleAddAnother}
                disabled={!areAllFieldsFilled()}
              >
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
