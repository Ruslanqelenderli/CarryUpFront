"use client";

import React, { useState } from "react";
import Navbar1 from "../components/navbar1";
import { currency, travelType } from "../components/constant";
import TableList from "../components/tableList";
import style from "../app.module.css";
import toast from "react-hot-toast";

const Create = () => {
<<<<<<< HEAD
=======
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [textCarry, setTextCarry] = useState("");
  const [textCarry1, setTextCarry1] = useState("");

>>>>>>> 79a28278c56b092e681745e52ccfd6990d2d4e66
  const [forCarryClicked, setForCarryClicked] = useState(false);
  const [forSendClicked, setForSendClicked] = useState(false);
  const [activeButton, setActiveButton] = useState("forSend");
  const [loading, setLoading] = useState(false);
  const [sendLoading, setSendLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [showTableList, setShowTableList] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [selectedCurrencyCarry, setSelectedCurrencyCarry] = useState("");
  const [selectedTravelType, setSelectedTravelType] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    currency: null,
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
    travelType: null,
  });
  const [sendFormData, setSendFormData] = useState({
    title: "",
    description: "",
    userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",

    currency: null,

    price: 0,
    count: 0,
    deadline: "2024-01-18T07:46:39.258Z",
    packageCategoryId: 0,
    packageSubCategoryId: 0,
    fromPlace: "",
    catchDate: "",
    toPlace: "",
  });

  // console.log('curr',currency);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleCurrencyChangeCarry = (event) => {
    setSelectedCurrencyCarry(event.target.value);
  };

  const handleTravelType = (event) => {
    setSelectedTravelType(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

<<<<<<< HEAD
=======
    setTextCarry1(value);
    setTextCarry(value);

>>>>>>> 79a28278c56b092e681745e52ccfd6990d2d4e66
    setFormData({ ...formData, [name]: value });
  };
  const handleSendChange = (e) => {
    const { name, value } = e.target;
<<<<<<< HEAD
=======
    setText(value);
    setText1(value);
>>>>>>> 79a28278c56b092e681745e52ccfd6990d2d4e66

    setSendFormData({ ...sendFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const sendCreate = async () => {
    try {
      setSendLoading(true);
      const selectedCurrencyValue = currency[selectedCurrency];
      const response = await fetch(
        "http://carryforus123-001-site1.jtempurl.com/api/Send/Create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            {
              title: sendFormData.title,
              description: sendFormData.description,
              case: {
                userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              },
              package: {
                currency: selectedCurrencyValue,
                price: Number(sendFormData.price),
                count: Number(sendFormData.count),
                deadline: "2024-01-30T22:51:52.792Z",
                packageCategoryId: 0,
                packageSubCategoryId: 0,
              },
              sendPlaceDetailAddModels: [
                {
                  fromPlace: sendFormData.fromPlace,
                  toPlace: sendFormData.toPlace,
                  catchDate: sendFormData.catchDate,
                },
              ],
            }
            //   current: current,
          ),
          //   cache: "force-cache",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Send Data sents", data);
      } else {
        const errorData = await response.json();
        console.error("Error sending data:", errorData);
        if (errorData.errors) {
          console.log("Validation errors:", errorData.errors);
        }
      }
      setSendLoading(false);
      setShowTableList(true);
    } catch (error) {
      console.log("error", error);
    }
  };

  const carryCreate = async () => {
    try {
      setLoading(true);
<<<<<<< HEAD
      // setTableData((prevTableData) => [...prevTableData, formData]);
=======
>>>>>>> 79a28278c56b092e681745e52ccfd6990d2d4e66
      const selectedCurrencyValue = currency[selectedCurrencyCarry];
      const selectedtravelTypeValue = travelType[selectedTravelType];

      const response = await fetch(
        "http://carryforus123-001-site1.jtempurl.com/api/Trip/Create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.title,
            description: formData.description,
            package: {
              currency: selectedCurrencyValue,
              price: Number(formData?.price),
              count: Number(formData?.count),
              packageCategoryId: Number(formData?.packageCategoryId),
              packageSubCategoryId: Number(formData?.packageSubCategoryId),
            },
            case: {
              userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            },
            tripPlaceDetailAddModels: tableData.length > 0 ? tableData : [
              {
                fromPlace: formData.fromPlace,
                fromTripDate: formData?.fromTripDate,
                toPlace: formData.toPlace,
                toTripDate: formData?.toTripDate,
                travelType: selectedtravelTypeValue,
<<<<<<< HEAD
              }
            ]
=======
              },
            ],
>>>>>>> 79a28278c56b092e681745e52ccfd6990d2d4e66
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
      setLoading(false);
    } catch (error) {
      console.error("Fetch errors:", error);
    }
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
<<<<<<< HEAD
=======

    // setLoading(true);

    // try {
    //   if (button === "forSend") sendCreate();
    //   if (button === "forCarry") carryCreate();
    // } finally {
    //   setLoading(false);
    // }
>>>>>>> 79a28278c56b092e681745e52ccfd6990d2d4e66
  };

  // const handleAddAnother2 = () => {
  //   if (
  //     !formData.toPlace ||
  //     !formData.fromPlace ||
  //     !formData.fromTripDate ||
  //     !formData.toTripDate ||
  //     !selectedTravelType
  //   ) {
  //     toast.error("Xanaları doldurun");
  //     return;
  //   }
  //   // setTableData((prevTableData) => [...prevTableData, formData]);
  //   console.log("table,", tableData);

  //   setSelectedTravelType((prevtravelType) => [
  //     ...prevtravelType,
  //     selectedTravelType,
  //   ]);

  //   // const selectTravelType = []
  //   // selectTravelType.push(selectedTravelType)
  //   console.log("first,", selectedTravelType);

  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     tripPlaceDetailAddModels: [
  //       {
  //         fromPlace: "",
  //         fromTripDate: "",
  //         toPlace: "",
  //         toTripDate: "",
  //         travelType: selectedTravelType,
  //       },
  //     ],
  //   }));

  //   setShowTableList(true);
  // };

  const handleAddAnother = () => {
    if (
      !formData.toPlace ||
      !formData.fromPlace ||
      !formData.fromTripDate ||
      !formData.toTripDate ||
      !selectedTravelType
    ) {
      toast.error("Xanaları doldurun");
      return;
    }
    const anotherData = {
      fromPlace: formData.fromPlace,
      fromTripDate: formData.fromTripDate,
      toPlace: formData.toPlace,
      toTripDate: formData.toTripDate,
      travelType: selectedTravelType,
    };

    setTableData((prevTableData) => [...prevTableData, anotherData]);

    setShowTableList(true);
  };

<<<<<<< HEAD
  const clearCarryData = () => {
    setFormData({
      title: "",
      description: "",
      currency: null,
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
      travelType: null,
    });
    setTableData([])
    setSelectedTravelType("")
    setSelectedCurrencyCarry("")

  };

  const clearSendData = () => {
    setSendFormData({
      title: "",
      description: "",
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",

      currency: null,

      price: 0,
      count: 0,
      deadline: "2024-01-18T07:46:39.258Z",
      packageCategoryId: 0,
      packageSubCategoryId: 0,
      fromPlace: "",
      catchDate: "",
      toPlace: "",
    });
    setSelectedCurrency("")

  };
=======
  const limit = 200;
  const limit1 = 200;
  const limitCarry = 200;
  const limitCarry1 = 200;
>>>>>>> 79a28278c56b092e681745e52ccfd6990d2d4e66

  return (
    <div className={style.create}>
      <Navbar1 />
      <div className="flex justify-center mt-6">
        <div
          className="bg-white rounded-2xl shadow-lg max-w-[49rem] p-8 w-full border border-[#B632FF] border-solid"
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
              <p className="font-semibold text-lg leading-normal mb-2 p-2 text-[#4A4A4A] mt-3">
                Reason for publication
                <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                  *
                </span>
              </p>
            </div>
            <div className="flex justify-evenly">
              <div className="text-center">
                <button
                  className={`border border-[#C5D9FF] rounded-lg w-32 h-12 font-medium ${
                    activeButton === "forSend"
                      ? "bg-[#85AEFF] text-[#fff]"
                      : "bg-transparent text-[#C5D9FF]"
                  }`}
                  onClick={() => handleButtonClick("forSend")}
                  type="button"
                >
                  For Send
                </button>
                <p
                  className={`w-60 font-medium text-sm ${
                    activeButton === "forSend"
                      ? "text-[#85AEFF]"
                      : "text-[#C5D9FF]"
                  }`}
                >
                  If you want to send something with someone, click on it
                </p>
              </div>
              <div className="text-center">
                <button
                  className={`border border-[#C5D9FF] rounded-lg w-32 h-12 font-medium ${
                    activeButton === "forCarry"
                      ? "bg-[#85AEFF] text-[#fff]"
                      : "bg-transparent text-[#C5D9FF]"
                  }`}
                  onClick={() => handleButtonClick("forCarry")}
                  type="button"
                >
                  For Carry
                </button>
                <p
                  className={`w-60 font-medium text-sm ${
                    activeButton === "forCarry"
                      ? "text-[#85AEFF]"
                      : "text-[#C5D9FF]"
                  }`}
                >
                  If you want to carry something, click on it
                </p>
              </div>
            </div>
            {activeButton === "forSend" && (
              <>
                <div
                  className="section"
                  style={{
                    height: "calc(100vh - 388px)",
                    overflowY: "auto",
                  }}
                >
                  <div className="flex md:flex-row flex-col mt-4 p-4 gap-10 justify-between">
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
                        className="border border-[#C5D9FF] rounded-lg p-2 resize-none w-80 placeholder:text-[#ACC9FF] focus:outline-none focus:border-[#78A7FF]"
                        name="title"
                        id="title_textarea"
                        cols="25"
                        rows="2"
                        placeholder="Type here..."
                        style={{ letterSpacing: "0.4px" }}
                        value={sendFormData.title}
                        onChange={handleSendChange}
                        maxLength={200}
                      ></textarea>
                      <p
                        id="result"
                        className="text-[#85AEFF] text-xs leading-normal font-medium md:text-right"
                      >
                        {sendFormData.title?.length} / 200
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
                            className="border border-[#C5D9FF] rounded-lg p-2 resize-none placeholder:text-[#ACC9FF] w-80 focus:outline-none focus:border-[#78A7FF]"
                            name="description"
                            id="title_textarea"
                            cols="30"
                            rows="3"
                            placeholder="Type here..."
                            style={{ letterSpacing: "0.4px" }}
                            value={sendFormData?.description}
                            onChange={handleSendChange}
                            maxLength={200}
                          ></textarea>
                        </div>
                        <div className="">
                          <p
                            id="result"
                            className="text-[#85AEFF] text-xs leading-normal font-medium md:text-right"
                          >
                            {sendFormData?.description?.length} / 200
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:flex-row flex-col gap-2 p-4  justify-between">
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
                          className="border border-[#C5D9FF] placeholder:text-[#717171] rounded-md bg-[#F2F6FF] p-2 w-[214px] focus:outline-none focus:border-[#C5D9FF] cursor-not-allowed"
                          placeholder="Document"
                        />
                      </div>
                      <div className="flex flex-col ml-2">
                        <label htmlFor="" className="mb-1">
                          Count
                          <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                            *
                          </span>
                        </label>
                        <input
                          type="number"
                          className="border border-[#C5D9FF] rounded-md bg-[#F2F6FF] p-2 w-24 focus:outline-none focus:border-[#C5D9FF]"
                          placeholder="1"
                          value={sendFormData.count}
                          onChange={handleSendChange}
                          name="count"
                        />
                      </div>
                    </div>

                    <div className="flex gap-10">
                      <div className="flex flex-col">
                        <label htmlFor="" className="mb-1">
                          Price
                          <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                            *
                          </span>
                        </label>
                        <input
                          value={sendFormData.price}
                          onChange={handleSendChange}
                          // onInput={(e) => maxLengthCheck(e.target)}
                          max="999"
                          min="0"
                          maxLength={3}
                          type="number"
                          className="border border-[#C5D9FF] rounded-lg p-2 w-[169px]
                         focus:outline-none focus:border-[#78A7FF] placeholder:text-[#ACC9FF]"
                          placeholder="Amount"
                          name="price"
                          pattern="[0-9]*"
                        />
                      </div>

                      <div className="mt-[6px]">
                        <label htmlFor="" className="flex ">
                          Currency
                          <span
                            className="text-[#FF5C00] font-semibold text-2xl transform
                     translate-x-0 -translate-y-1"
                          >
                            *
                          </span>
                        </label>
                        <label className="text-[#5C5C5C]">
                          <input
                            type="radio"
                            name="radio"
                            className="mr-1"
                            value="AZN"
                            checked={selectedCurrency === "AZN"}
                            onChange={handleCurrencyChange}
                          />
                          Azn
                        </label>
                        <label className="ml-3 text-[#5C5C5C]">
                          <input
                            type="radio"
                            name="radio"
                            className="mr-1"
                            value="USD"
                            checked={selectedCurrency === "USD"}
                            onChange={handleCurrencyChange}
                          />
                          Usd
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-4 gap-10 md:flex-row justify-between">
                    <div className="flex flex-col">
                      <label htmlFor="">
                        From
                        <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        className="border border-[#C5D9FF] rounded-md p-2 w-80 focus:outline-none focus:border-[#C5D9FF]"
                        placeholder="City"
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
                        className="border border-[#C5D9FF] rounded-md p-2 w-80 focus:outline-none focus:border-[#C5D9FF]"
                        placeholder="City"
                        value={sendFormData?.toPlace}
                        onChange={handleSendChange}
                        name="toPlace"
                      />
                    </div>
                  </div>

                  <div className="p-4 flex flex-col">
                    <label htmlFor="">
                      Date of appointment
                      <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                        *
                      </span>
                    </label>
                    <input
                      type="date"
                      className="border border-[#C5D9FF] rounded-md p-2 w-80 focus:outline-none focus:border-[#C5D9FF]"
                      placeholder="DD/MM/YYYY"
                      // onocus="(this.type='date')"
                      // onblur="(this.type='text') "
                      value={sendFormData?.catchDate}
                      onChange={handleSendChange}
                      name="catchDate"
                    />
                  </div>
                  <div className="text-right flex justify-end gap-6 mt-4">
                    <button
                      className="rounded-lg border-2 border-[#85AEFF] h-11 w-32 text-[#85AEFF] font-medium cursor-pointer"
                      onClick={() => {
                        setSendLoading(false), clearSendData();
                      }}
                    >
                      {" "}
                      Cancel
                    </button>
                    <button
                      className="rounded-lg bg-[#A8C6FF] h-11 w-32 text-white font-medium cursor-pointer"
                      type="submit"
                      disabled={sendLoading}
                      onClick={() => sendCreate()}
                    >
                      {sendLoading ? "Saving..." : "Save"}
                    </button>
                  </div>
                </div>
              </>
            )}
            {activeButton === "forCarry" && (
              <>
                <div
                  className="section"
                  style={{
                    height: "calc(100vh - 388px)",
                    overflowY: "auto",
                  }}
                >
                  <div className="flex md:flex-row flex-col mt-4 p-4 gap-10">
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
                        className="border border-[#C5D9FF] rounded-lg p-2 resize-none w-80 placeholder:text-[#ACC9FF] focus:outline-none focus:border-[#78A7FF]"
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
<<<<<<< HEAD
                        {formData.title?.length} / 200
=======
                        {textCarry.length} / {limitCarry}
>>>>>>> 79a28278c56b092e681745e52ccfd6990d2d4e66
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
<<<<<<< HEAD
                            {formData.description?.length} / 200
=======
                            {textCarry1.length} / {limitCarry1}
>>>>>>> 79a28278c56b092e681745e52ccfd6990d2d4e66
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-row flex-col p-4 gap-2 justify-between">
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
                          className="border border-[#C5D9FF] placeholder:text-[#717171] rounded-md bg-[#F2F6FF] p-2 w-[214px] focus:outline-none focus:border-[#C5D9FF] cursor-not-allowed"
                          placeholder="Document"
                        />
                      </div>
                      <div className="flex flex-col ml-2">
                        <label htmlFor="" className="mb-1">
                          Count
                          <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                            *
                          </span>
                        </label>
                        <input
                          type="number"
                          className="border border-[#C5D9FF] rounded-md bg-[#F2F6FF] p-2 w-24 focus:outline-none focus:border-[#C5D9FF]"
                          placeholder="1"
                          value={formData.count}
                          onChange={handleChange}
                          name="count"
                        />
                      </div>
                    </div>

                    <div className="flex gap-10">
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
                          // onInput={(e) => maxLengthCheck(e.target)}
                          max="999"
                          min="0"
                          maxLength={3}
                          type="number"
                          className="border border-[#C5D9FF] rounded-lg p-2 w-[169px]
                    focus:outline-none focus:border-[#78A7FF] placeholder:text-[#ACC9FF]"
                          placeholder="Amount"
                          name="price"
                          pattern="[0-9]*"
                        />
                      </div>

                      <div className="mt-[6px]">
                        <label htmlFor="" className="flex ">
                          Currency
                          <span
                            className="text-[#FF5C00] font-semibold text-2xl transform
                          translate-x-0 -translate-y-1"
                          >
                            *
                          </span>
                        </label>
                        <label className="text-[#5C5C5C]">
                          <input
                            type="radio"
                            name="radio"
                            className="mr-1"
                            value="AZN"
                            checked={selectedCurrencyCarry === "AZN"}
                            onChange={handleCurrencyChangeCarry}
                          />
                          Azn
                        </label>
                        <label className="ml-3 text-[#5C5C5C]">
                          <input
                            type="radio"
                            name="radio"
                            className="mr-1"
                            value="USD"
                            checked={selectedCurrencyCarry === "USD"}
                            onChange={handleCurrencyChangeCarry}
                          />
                          Usd
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col p-4 gap-10 md:flex-row justify-between">
                      <div className="flex flex-col">
                        <label htmlFor="">
                          From
                          <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          className="border border-[#C5D9FF] rounded-md p-2 w-80 focus:outline-none focus:border-[#C5D9FF]"
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
                          className="border border-[#C5D9FF] rounded-md p-2 w-80 focus:outline-none focus:border-[#C5D9FF]"
                          placeholder="City"
                          name={"fromTripDate"}
                          value={formData.fromTripDate}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col p-4 gap-10 md:flex-row justify-between">
                      <div className="flex flex-col">
                        <label htmlFor="">
                          To
                          <span className="text-[#FF5C00] font-semibold text-2xl transform translate-x-0 -translate-y-1">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          className="border border-[#C5D9FF] rounded-md p-2 w-80 focus:outline-none focus:border-[#C5D9FF]"
                          placeholder="City"
                          value={formData.toPlace}
                          name="toPlace"
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
                          className="border border-[#C5D9FF] rounded-md p-2 w-80 focus:outline-none focus:border-[#C5D9FF]"
                          placeholder="City"
                          name="toTripDate"
                          value={formData.toTripDate}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 ">
                      <div className="col-span-2">
                        <label
                          htmlFor="countries"
                          className="block mb-2 text-sm font-medium text-gray-900 col-span-2 "
                        >
                          Transport
                        </label>

<<<<<<< HEAD
                        <div className="mt-1.5">
                          <label className="text-[#5C5C5C] mr-3">
                            <input
                              type="radio"
                              name="radioTravel"
                              className="mr-1"
                              value="Bus"
                              checked={selectedTravelType === "Bus"}
                              onChange={handleTravelType}
                            />
                            Bus
                          </label>
                          <label className="text-[#5C5C5C] mr-3">
                            <input
                              type="radio"
                              name="radioTravel"
                              className="mr-1"
                              value="Car"
                              checked={selectedTravelType === "Car"}
                              onChange={handleTravelType}
                            />
                            Car
                          </label>
                          <label className="text-[#5C5C5C] mr-3">
                            <input
                              type="radio"
                              name="radioTravel"
                              className="mr-1"
                              value="Plane"
                              checked={selectedTravelType === "Plane"}
                              onChange={handleTravelType}
                            />
                            Plane
                          </label>
                          <label className="text-[#5C5C5C] mr-3">
                            <input
                              type="radio"
                              name="radioTravel"
                              className="mr-1"
                              value="Ship"
                              checked={selectedTravelType === "Ship"}
                              onChange={handleTravelType}
                            />
                            Ship
                          </label>
                          <label className="text-[#5C5C5C]">
                            <input
                              type="radio"
                              name="radioTravel"
                              className="mr-1"
                              value="Train"
                              checked={selectedTravelType === "Train"}
                              onChange={handleTravelType}
                            />
                            Train
                          </label>
                        </div>
=======
                        <label className="text-[#5C5C5C] mr-3">
                          <input
                            type="radio"
                            name="radioTravel"
                            className="mr-1"
                            value="Bus"
                            checked={selectedTravelType === "Bus"}
                            onChange={handleTravelType}
                          />
                          Bus
                        </label>
                        <label className="text-[#5C5C5C] mr-3">
                          <input
                            type="radio"
                            name="radioTravel"
                            className="mr-1"
                            value="Car"
                            checked={selectedTravelType === "Car"}
                            onChange={handleTravelType}
                          />
                          Car
                        </label>
                        <label className="text-[#5C5C5C] mr-3">
                          <input
                            type="radio"
                            name="radioTravel"
                            className="mr-1"
                            value="Plane"
                            checked={selectedTravelType === "Plane"}
                            onChange={handleTravelType}
                          />
                          Plane
                        </label>
                        <label className="text-[#5C5C5C] mr-3">
                          <input
                            type="radio"
                            name="radioTravel"
                            className="mr-1"
                            value="Ship"
                            checked={selectedTravelType === "Ship"}
                            onChange={handleTravelType}
                          />
                          Ship
                        </label>
                        <label className="text-[#5C5C5C]">
                          <input
                            type="radio"
                            name="radioTravel"
                            className="mr-1"
                            value="Train"
                            checked={selectedTravelType === "Train"}
                            onChange={handleTravelType}
                          />
                          Train
                        </label>
>>>>>>> 79a28278c56b092e681745e52ccfd6990d2d4e66
                      </div>

                      <div className="self-center mt-6 flex justify-end ">
                        <button
                          className="rounded-md bg-[#A8C6FF] h-10 w-36 text-white font-medium cursor-pointer"
                          //   style={{ backgroundColor: buttonBackgroundColor }}
                          onClick={handleAddAnother}
                          // disabled={!areAllFieldsFilled()}
                        >
                          Add another
                        </button>
                      </div>
                    </div>
                    {showTableList && <TableList data={tableData} />}
                    {/* {showTableList && <TableList data={tableData} />} */}
                  </div>
                  <div className="text-right flex justify-end gap-6 mt-4">
                    <button
                      className="rounded-lg border-2 border-[#85AEFF] h-11 w-32 text-[#85AEFF] font-medium cursor-pointer"
                      onClick={() => {
                        setLoading(false), clearCarryData();
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="rounded-lg bg-[#A8C6FF] h-11 w-32 text-white font-medium cursor-pointer"
                      type="submit"
                      disabled={loading}
                      onClick={() => carryCreate()}
                    >
                      {loading ? "Saving..." : "Save"}
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
