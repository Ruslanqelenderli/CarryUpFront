"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar1 from "../components/navbar1";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import TableList from "../components/tableList";
import { currency, travelType } from "../components/constant";

const Create1 = () => {
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
    currency: 0,
    price: 0,
    count: 0,
    deadline: "2024-01-18T07:46:39.258Z",
    packageCategoryId: 0,
    packageSubCategoryId: 0,
    userId: "123e4567-e89b-12d3-a456-426614174001",
    fromPlace: "",
    fromTripDate: "",
    toPlace: "",
    toTripDate: "",
    travelType: 0,
    // sendPlaceDetailAddModels: [
    //   {
    //     fromPlace: "",
    //     catchDate: "2024-01-28T22:34:08.460Z",
    //     toPlace: "",
    //   },
    // ],
  });

  const [sendFormData, setSendFormData] = useState({
    title: "",
    description: "",
    userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    currency: 0,
    price: 0,
    count: 0,
    deadline: "2024-01-18T07:46:39.258Z",
    packageCategoryId: 0,
    packageSubCategoryId: 0,
    fromPlace: "",
    catchDate: "",
    toPlace: "",
  });

  // const transportEnum = {
  //   BUS: "Bus",
  //   PLANE: "Plane",
  //   CAR: "Car",
  //   SHIP: "Ship",
  //   TRAIN: "Train",
  // };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const values = value === "azn" ? 1 : 0;
    const travelType = transportEnum[value];
    setFormData({ ...formData, [name]: value });
  };

  const handleSendChange = (e) => {
    const { name, value } = e.target;
    setSendFormData({ ...sendFormData, [name]: value });
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
    console.log("form", formData);
    try {
      const response = await fetch(
        "http://carryforus-001-site1.htempurl.com/api/Trip/Create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.title,
            description: formData.description,
            package: {
              currency: Number(formData?.currency),
              price: Number(formData?.price),
              count: Number(formData?.count),
              packageCategoryId: Number(formData?.packageCategoryId),
              packageSubCategoryId: Number(formData?.packageSubCategoryId),
            },
            case: {
              userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            },
            tripPlaceDetailAddModels: [
              {
                fromPlace: formData.fromPlace,
                fromTripDate: formData?.fromTripDate,
                toPlace: formData.toPlace,
                toTripDate: formData?.toTripDate,
                travelType: Number(formData.travelType),
              },
            ],
          }),
        }
      );
      console.log("res", response);

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

  const sendCreate = async (current) => {
    try {
      let sendsData = await fetch(
        "http://carryforus-001-site1.htempurl.com/api/Send/Create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            value: {
              title: sendFormData.title,
              description: sendFormData.description,
              currency: Number(sendFormData.currency),
              price: Number(sendFormData.price),
              count: Number(sendFormData.count),
              fromPlace: sendFormData.fromPlace,
              toPlace: sendFormData.toPlace,
            },
            current: current,
          }),
          cache: "force-cache",
        }
      );
    } catch (error) {
      console.log("error", error);
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
    setShowTableList(true);
  };

  return (
    <>
      <Navbar1 />
      <div className="flex justify-center mt-6">
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
                    forCarryClicked ? "bg-[#85AEFF] text-[#fff]"  : "bg-transparent text-[#C5D9FF]"
                  }`}
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
                <div className="flex flex-col">
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
                    value={formData.count}
                    onChange={handleChange}
                    name="count"
                  />
                </div>
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
                    value={formData.price}
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
                    style={{ border: "none" }}
                    className="focus:outline-none"
                    name="currency"
                    value={Number(formData.currency)}
                    onChange={handleChange}
                  >
                    {Object.entries(currency).map((v) => (
                      <>
                        <option value={v[1]}>{v[0]}</option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {openSend && (
              <>
                <div className="flex md:flex-row flex-col mt-4 p-6 gap-20">
                  <div className="font-semibold text-lg">
                    <h2
                      htmlFor="#"
                      className="text-[#4A4A4A] font-semibold mb-1"
                    >
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
                      value={sendFormData.title}
                      // onChange={handleChange}
                      maxLength={200}
                      onChange={handleSendChange}
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
                          value={sendFormData?.description}
                          // onChange={handleChange}
                          onChange={handleSendChange}
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
                    <div className="flex flex-col">
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
                        value={sendFormData.count}
                        // onChange={handleChange}
                        name="count"
                        onChange={handleSendChange}
                      />
                    </div>
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
                        value={sendFormData.price}
                        // onChange={handleChange}
                        onChange={handleSendChange}
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
                        style={{ border: "none" }}
                        className="focus:outline-none"
                        name="currency"
                        value={Number(sendFormData.currency)}
                        // onChange={handleChange}
                        onChange={handleSendChange}
                      >
                        {Object.entries(currency).map((v) => (
                          <>
                            <option value={v[1]}>{v[0]}</option>
                          </>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
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
                      // value={formData.tripPlaceDetailAddModels[0].fromPlace}
                      // onChange={handleChange}
                      value={sendFormData.fromPlace}
                      onChange={handleSendChange}
                      name="fromPlace"
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
                      // value={formData.tripPlaceDetailAddModels[0].toPlace}
                      // onChange={handleChange}
                      value={sendFormData?.toPlace}
                      onChange={handleSendChange}
                      name="toPlace"
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
                    // name={`sendPlaceDetailAddModels[0].catchDate`}
                    // value={formData.tripPlaceDetailAddModels[0].toPlace}
                    // onChange={handleChange}
                    // onChange={}
                    value={sendFormData?.catchDate}
                    onChange={handleSendChange}
                    name="catchDate"
                  />
                </div>
                <div className="text-right flex justify-end gap-6 mt-4">
              <button className="rounded-lg border-2 border-[#85AEFF] h-11 w-32 text-[#85AEFF] font-medium cursor-pointer">
                Cancel
              </button>
              <button
                className="rounded-lg bg-[#A8C6FF] h-11 w-32 text-white font-medium cursor-pointer"
                style={{ backgroundColor: saveBackground }}
                type="submit"
                // onClick={handleAddAnother}
                // disabled={!areAllFieldsFilled()}
              >
                Save
              </button>
            </div>
              </>
            )}

            {open && (
              <>
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
                      value={formData.fromPlace}
                      name={"fromPlace"}
                      onChange={handleChange}
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
                      name={"fromTripDate"}
                      value={formData.fromTripDate}
                      onChange={handleChange}
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
                      value={formData.toPlace}
                      name={`toPlace`}
                      onChange={handleChange}
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
                      name={`toTripDate`}
                      value={formData.toTripDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-row p-6 gap-48">
                  <div>
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Transport
                    </label>
                    <select
                      className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                      name="travelType"
                      value={formData.travelType}
                      onChange={handleChange}
                    >
                      <option value="">Select Travel Type</option>
                      {travelType &&
                        Object.entries(travelType).map(([key, value]) => (
                          <option key={key} value={value}>
                            {key}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="self-center mt-6">
                    <button
                      className="rounded-sm bg-[#A8C6FF] h-10 w-36 text-white font-medium cursor-pointer"
                      style={{ backgroundColor: buttonBackgroundColor }}
                      onClick={handleAddAnother}
                      // disabled={!areAllFieldsFilled()}
                    >
                      Add another
                    </button>
                  </div>
                </div>
                {showTableList && <TableList data={tableData} />}
              </div>
              
              </>
             
              
            )}
            <div className="text-right flex justify-end gap-6 mt-4">
              <button className="rounded-lg border-2 border-[#85AEFF] h-11 w-32 text-[#85AEFF] font-medium cursor-pointer">
                Cancel
              </button>
              <button
                className="rounded-lg bg-[#A8C6FF] h-11 w-32 text-white font-medium cursor-pointer"
                style={{ backgroundColor: saveBackground }}
                type="submit"
                // onClick={handleAddAnother}
                // disabled={!areAllFieldsFilled()}
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

export default Create1;
