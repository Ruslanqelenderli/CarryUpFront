"use client";

import React, { useEffect, useState } from "react";
import style from "../app.module.css";
import Navbar from "./navbar";
import CustomPagination from "./customPagination";
import moment from "moment";
import { toast } from "react-hot-toast";
import Image from "next/image";

import { currency, travelType } from "./constant";
import { Tooltip } from "./tooltip";
import SendPagination from "./sendPagination";
import { SecondTooltip } from "./secondTooltip";

function MainPage() {
  const [formData, setFormData] = useState({
    tripCreateDate: "",
    tripTitle: "",

    tripPlaceDetailTravelType: "",
    minPackagePrice: "",
    maxPackagePrice: "",
    currency: "",

    tripPlaceDetailFromPlace: "",
    tripPlaceDetailToPlace: "",
    tripPlaceDetailFromTripDate: "",
    tripPlaceDetailToTripDate: "",
    packageCategoryId: "",
  });
  const [tripCurrentPage, setTripCurrentPage] = useState(1);
  const [sendCurrentPage, setSendCurrentPage] = useState(1);

  const [tripPerPage, setTripPerPage] = useState(6);
  const [sendPerPage, setSendPerPage] = useState(6);

  const [tripTotalPages, setTripTotalPages] = useState(0);
  const [sendTotalPages, setSendTotalPages] = useState(0);

  const [tripTotalCount, setTripTotalCount] = useState(0);
  const [sendTotalCount, setSendTotalCount] = useState(0);

  const [tripData, setTripData] = useState([]);
  const [sendData, setSendData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sendLoading, setSendLoading] = useState(false);

  const [activeButton, setActiveButton] = useState("forCarry");
  const [sendFormData, setSendFormData] = useState({
    sendCreateDate: "",
    sendTitle: "",

    packageCategoryId: "",
    minPackagePrice: "",
    maxPackagePrice: "",
    currency: "",

    sendPlaceDetailFromPlace: "",
    sendPlaceDetailToPlace: "",
    catchDate: "",
    packageSubCategoryId: "",
  });

  useEffect(() => {
    getTrips(tripCurrentPage);
  }, [tripCurrentPage]);

  useEffect(() => {
    getSends(sendCurrentPage);
  }, [sendCurrentPage]);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    if (button === "forSend") getSends();
    if (button === "forCarry") getTrips();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendChange = (e) => {
    const { name, value } = e.target;
    setSendFormData({ ...sendFormData, [name]: value });
  };

  const getTrips = async (currentPage) => {
    try {
      setLoading(true);
      let tripsData = await fetch(
        "http://carryforus-001-site1.htempurl.com/api/trip/gettrips ",
        //"http://carryforus-001-site1.htempurl.com/api/Trip/GetTrips",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            value: {
              tripCreateDate: formData.tripCreateDate,
              tripTitle: formData.tripTitle,

              tripPlaceDetailTravelType: formData.tripPlaceDetailTravelType,
              minPackagePrice: formData.minPackagePrice,
              maxPackagePrice: formData.maxPackagePrice,
              currency: formData.currency,

              tripPlaceDetailFromPlace: formData.tripPlaceDetailFromPlace,
              tripPlaceDetailToPlace: formData.tripPlaceDetailToPlace,
              tripPlaceDetailFromTripDate: formData.tripPlaceDetailFromTripDate,
              tripPlaceDetailToTripDate: formData.tripPlaceDetailToTripDate,
              packageCategoryId: formData.packageCategoryId,
            },
            pageSize: tripPerPage,
            currentPage: currentPage,
          }),
          cache: "force-cache",
        }
      );
      const responseData = await tripsData.json();

      if (responseData?.list.length > 0) {
        setTripData(responseData.list);
        setTripTotalPages(Math.ceil(responseData.totalCount / tripPerPage));
        setTripTotalCount(responseData.totalCount);
      } else {
        setTripData(responseData.list);
        setTripTotalPages(0);
        setTripTotalCount(0);

        toast.error("Trip not found!");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("searchAds error: ", error);
    }
  };

  const getSends = async (currentPage) => {
    try {
      setSendLoading(true)
      let sendsData = await fetch(
        "http://carryforus-001-site1.htempurl.com/api/send/getsends ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            value: {
              sendCreateDate: sendFormData.sendCreateDate,
              sendTitle: sendFormData.sendTitle,
              packageCategoryId: sendFormData.packageCategoryId,
              minPackagePrice: sendFormData.minPackagePrice,
              maxPackagePrice: sendFormData.maxPackagePrice,
              currency: sendFormData.currency,
              sendPlaceDetailFromPlace: sendFormData.sendPlaceDetailFromPlace,
              sendPlaceDetailToPlace: sendFormData.sendPlaceDetailToPlace,
              catchDate: sendFormData.catchDate,
              packageSubCategoryId: sendFormData.packageSubCategoryId,
            },
            pageSize: sendPerPage,
            currentPage: currentPage,
          }),
          cache: "force-cache",
        }
      );
      const responseData = await sendsData.json();

      if (responseData?.list.length > 0) {
        setSendData(responseData.list);
        setSendTotalPages(Math.ceil(responseData.totalCount / sendPerPage));
        setSendTotalCount(responseData.totalCount);
      } else {
        setSendData(responseData.list);
        setSendTotalPages(0);
        setSendTotalCount(0);

        toast.error("Trip not found!");
      }
      setSendLoading(false)

    } catch (error) {
      setSendLoading(false)
      console.log("searchAds error: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const clearTripsData = () => {
    setFormData({
      tripCreateDate: "",
      tripTitle: "",

      tripPlaceDetailTravelType: "",
      minPackagePrice: "",
      maxPackagePrice: "",
      currency: "",

      tripPlaceDetailFromPlace: "",
      tripPlaceDetailToPlace: "",
      tripPlaceDetailFromTripDate: "",
      tripPlaceDetailToTripDate: "",
      packageCategoryId: "",
    });
  };
  const clearSendsData = () => {
    setSendFormData({
      sendCreateDate: "",
      sendTitle: "",

      minPackagePrice: "",
      maxPackagePrice: "",
      currency: "",

      sendPlaceDetailFromPlace: "",
      sendPlaceDetailToPlace: "",

      packageCategoryId: "",
    });
  };

  const nextPageTrip = () => {
    if (tripCurrentPage !== tripTotalPages) {
      setTripCurrentPage(tripCurrentPage + 1);
    }
  };

  const prePageTrip = () => {
    if (tripCurrentPage !== 1) {
      setTripCurrentPage(tripCurrentPage - 1);
    }
  };

  function changeCPage(id) {
    setTripCurrentPage(id);
  }

  const nextPageSend = () => {
    if (sendCurrentPage !== sendTotalPages) {
      setSendCurrentPage(sendCurrentPage + 1);
    }
  };

  const prePageSend = () => {
    if (sendCurrentPage !== 1) {
      setSendCurrentPage(sendCurrentPage - 1);
    }
  };

  return (
    <div className={style.profile}>
      <Navbar />

      <div className="flex justify-between mx-16">
        <aside
          id="logo-sidebar"
          className=" aside  shadow-md section  mb-2  mt-4 mx-4 z-40 w-[17rem]  pt-5 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 "
          aria-label="Sidebar"
        >
          <div className=" bg-white  leftSection">
            <form onSubmit={handleSubmit}>
              <div className="flex mb-5 justify-between px-3">
                <button
                  className={`ml-3 bg-white ${
                    activeButton === "forCarry"
                      ? "border-[#b532ff75] border-solid border shadow-md px-4 py-1.5 rounded-md text-[#AEA6FD] "
                      : "bg-transparent  font-semibold  py-1.5 px-4 border text-[#aea6fd7d]   rounded-md "
                  }`}
                  onClick={() => handleButtonClick("forCarry")}
                >
                  For Carry
                </button>
                <button
                  className={`bg-white ${
                    activeButton === "forSend"
                      ? "border-[#b532ff75] text-[#AEA6FD] border-solid border shadow-md px-4 py-1.5 rounded-md "
                      : "bg-transparent  font-semibold  py-1.5 px-4 border text-[#aea6fd7d]   rounded-md "
                  }`}
                  onClick={() => handleButtonClick("forSend")}
                >
                  For Send
                </button>
              </div>
              {activeButton === "forCarry" && (
                <>
                  <div className=" px-3 ">
                    <label className="text-[15px]">Create Date</label>
                    <div className="w-full  md:mb-0  mt-4">
                      <input
                        className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="date"
                        placeholder="DD/MM/YYYY"
                        name="tripCreateDate"
                        value={formData.tripCreateDate}
                        onChange={handleChange}
                      />
                    </div>
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">Title</label>
                    <div className="mt-4">
                      <input
                        className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder=""
                        name="tripTitle"
                        maxLength="50"
                        value={formData.tripTitle}
                        onChange={handleChange}
                      />
                    </div>
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">Travel Type</label>
                    <div className="mt-4">
                      <select
                        className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        name="tripPlaceDetailTravelType"
                        value={formData.tripPlaceDetailTravelType}
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
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">Price</label>
                    <div className="mt-2 flex justify-between">
                      <div>
                        <label className="text-[13px] text-[#CFCAFF]">
                          Min Price
                        </label>
                        <div className="flex  border border-solid border-[#b532ff75] rounded-lg py-2  mb-4 leading-tight text-[#CFCAFF]">
                          <input
                            type="number"
                            style={{ width: "50px", border: "none" }}
                            className="focus:outline-none pl-2 "
                            name="minPackagePrice"
                            value={formData.minPackagePrice}
                            onChange={handleChange}
                          />
                          <select
                            style={{ border: "none" }}
                            className="focus:outline-none"
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                          >
                            {Object.entries(currency).map((v) => (
                              <>
                                <option  value={v[1]} >
                                  {v[0]}
                                </option>
                              </>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-[13px] text-[#CFCAFF] ml-2">
                          Max Price
                        </label>

                        <div className="flex  border border-solid border-[#b532ff75] rounded-lg py-2 ml-2 mb-4 leading-tight text-[#CFCAFF]">
                          <input
                            type="number"
                            style={{ width: "50px", border: "none" }}
                            className="focus:outline-none pl-2 "
                            name="maxPackagePrice"
                            value={formData.maxPackagePrice}
                            onChange={handleChange}
                          />
                          <select
                            style={{ border: "none" }}
                            className="focus:outline-none"
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                          >
                            {Object.entries(currency).map((v) => (
                              <>
                                <option  value={v[1]}>
                                  {v[0]}
                                </option>
                              </>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">Category</label>
                    <div className="mt-4">
                      <select
                        className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        name="packageCategoryId"
                        value={formData.packageCategoryId}
                        onChange={handleChange}
                      >
                        <option value={0} selected>
                          Select category
                        </option>
                        <option value={1}>Document</option>
                      </select>
                    </div>
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">From Place</label>
                    <div className="mt-4">
                      <input
                        className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder=""
                        maxLength="15"
                        name="tripPlaceDetailFromPlace"
                        value={formData.tripPlaceDetailFromPlace}
                        onChange={handleChange}
                      />
                    </div>
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">To Place</label>
                    <div className="mt-4">
                      <input
                        className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder=""
                        maxLength="15"
                        name="tripPlaceDetailToPlace"
                        value={formData.tripPlaceDetailToPlace}
                        onChange={handleChange}
                      />
                    </div>
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">From Trip Date</label>
                    <div className="mt-4">
                      <input
                        className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="date"
                        placeholder=""
                        name="tripPlaceDetailFromTripDate"
                        value={formData.tripPlaceDetailFromTripDate}
                        onChange={handleChange}
                      />
                    </div>
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">To Trip Date</label>
                    <div className="mt-4">
                      <input
                        className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="date"
                        placeholder=""
                        name="tripPlaceDetailToTripDate"
                        value={formData.tripPlaceDetailToTripDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}

              {activeButton === "forSend" && (
                <>
                  <div className=" px-3 ">
                    <label className="text-[15px]">Create Date</label>
                    <div className=" mt-4">
                      <div className="w-full  md:mb-0">
                        <input
                          className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="date"
                          placeholder="DD/MM/YYYY"
                          name="sendCreateDate"
                          value={sendFormData.sendCreateDate}
                          onChange={handleSendChange}
                        />
                      </div>
                    </div>
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">Title</label>
                    <div className="mt-4">
                      <input
                        className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder=""
                        name="sendTitle"
                        value={sendFormData.sendTitle}
                        onChange={handleSendChange}
                      />
                    </div>
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">Price</label>
                    <div className="mt-2 flex justify-between">
                      <div>
                        <label className="text-[13px] text-[#CFCAFF]">
                          Min Price
                        </label>
                        <div className="flex  border border-solid border-[#b532ff75] rounded-lg py-2  mb-4 leading-tight text-[#CFCAFF]">
                          <input
                            type="number"
                            style={{ width: "50px", border: "none" }}
                            className="focus:outline-none pl-2 "
                            name="minPackagePrice"
                            value={formData.minPackagePrice}
                            onChange={handleChange}
                          />
                          <select
                            style={{ border: "none" }}
                            className="focus:outline-none"
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                          >
                            {Object.entries(currency).map((v) => (
                              <>
                                <option  value={v[1]}>
                                  {v[0]}
                                </option>
                              </>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-[13px] text-[#CFCAFF] ml-2">
                          Max Price
                        </label>

                        <div className="flex  border border-solid border-[#b532ff75] rounded-lg py-2 ml-2 mb-4 leading-tight text-[#CFCAFF]">
                          <input
                            type="number"
                            style={{ width: "50px", border: "none" }}
                            className="focus:outline-none pl-2 "
                            name="maxPackagePrice"
                            value={formData.maxPackagePrice}
                            onChange={handleChange}
                          />
                          <select
                            style={{ border: "none" }}
                            className="focus:outline-none"
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                          >
                            {Object.entries(currency).map((v) => (
                              <>
                                <option  value={v[1]}>
                                  {v[0]}
                                </option>
                              </>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">Category</label>
                    <div className="mt-4">
                      <select
                        className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        name="packageCategoryId"
                        value={sendFormData.packageCategoryId}
                        onChange={handleSendChange}
                      >
                        <option value={0} selected>
                          Select category
                        </option>
                        <option value={1}>Document</option>
                      </select>
                    </div>
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">From Place</label>
                    <div className="mt-4">
                      <input
                        className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder=""
                        name="sendPlaceDetailFromPlace"
                        value={sendFormData.sendPlaceDetailFromPlace}
                        onChange={handleSendChange}
                      />
                    </div>
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">To Place</label>
                    <div className="mt-4">
                      <input
                        className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder=""
                        name="sendPlaceDetailToPlace"
                        value={sendFormData.sendPlaceDetailToPlace}
                        onChange={handleSendChange}
                      />
                    </div>
                    <hr className="mb-5" />
                  </div>
                </>
              )}
            </form>
            <div className=" sticky bottom-0 flex ml-3 justify-between  bg-white px-3 py-4">
              <button
                className="bg-transparent  font-semibold  px-4 py-1.5 border    rounded-md cancelButton "
                onClick={
                  activeButton === "forCarry" ? clearTripsData : clearSendsData
                }
              >
                Clear all
              </button>
              <button
              disabled={activeButton === "forCarry" ? !formData.minPackagePrice && !formData.maxPackagePrice : !sendFormData.minPackagePrice && !sendFormData.maxPackagePrice}
                className={` ${
                  activeButton == "forCarry" ? "bg-[#75B4FF]" : "bg-[#BFABDF]"
                }  text-white  font-semibold  px-6 py-1.5 border    rounded-md `}
                onClick={() =>
                  activeButton === "forCarry"
                    ? getTrips(tripCurrentPage)
                    : getSends(sendCurrentPage)
                }
              >
                Search
              </button>
            </div>
          </div>
        </aside>

        <div className="bg-white aside shadow-md  mb-2   md:w-[77%] lg:w-[80%] xl:w-[80%%] col-span-2  mt-4 mr-4 relative">
          {loading && (
            <div role="status " className="absolute left-[50%] top-[50%]">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin  fill-purple-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {activeButton === "forCarry" && (
            <>
              <div className="grid grid-cols-3 gap-4 pt-6 px-6 mt-5">
                {tripData.map((v, index) => (
                  <>
                    <div className="bg-white border box 2xl:mb-6  xl:mb-0 lg:mb-0 relative pt-4 pb-8 border-[#A0CCFF] border-solid rounded-[1rem]  h-[12rem] max-h-[16rem] hover:bg-[#449aff29] hover:border-[#0E6FE1] hover:shadow-xl transition duration-700 ease-in-out">
                      <div className="flex px-4 justify-between ">
                      <div className="capitalize text-[#2F8EFF] font-semibold">
                        {v?.tripPlaceDetails[0]?.fromPlace.length > 4 ?   
                        <SecondTooltip text={v?.tripPlaceDetails[0]?.fromPlace}>
                          { v?.tripPlaceDetails[0]?.fromPlace.slice(0,4) + "..." }
                        </SecondTooltip> : v?.tripPlaceDetails[0]?.fromPlace }
                        </div>
                        <div
                          className="w-44 "
                          style={{
                            borderBottom: "2.5px solid #5CA2F5",
                            height: "22px",
                            width: "135px",
                            margin: "0 10px",
                          }}
                        >
                          {v?.tripPlaceDetails[0]?.travelType ==
                          travelType.Plane ? (
                            <>
                              <Image
                                src="/icons/airplane1.png"
                                className="absolute top-[10px] car"
                                width={35}
                                height={30}
                                alt="Carry UP"
                                priority={true}
                              />{" "}
                            </>
                          ) : v?.tripPlaceDetails[0]?.travelType ==
                            travelType.Bus ? (
                            <>
                              <Image
                                src="/icons/bus1.png"
                                className="absolute top-[10px] car"
                                width={35}
                                height={30}
                                alt="Carry UP"
                                priority={true}
                              />{" "}
                            </>
                          ) : v?.tripPlaceDetails[0]?.travelType ==
                            travelType.Car ? (
                            <>
                              <Image
                                src="/icons/car.png"
                                className="absolute top-[9px] car "
                                width={40}
                                height={30}
                                alt="Carry UP"
                                priority={true}
                              />{" "}
                            </>
                          ) : v?.tripPlaceDetails[0]?.travelType ==
                            travelType.Ship ? (
                            <>
                              <Image
                                src="/icons/ship (1).png"
                                className="absolute top-[10px] car"
                                width={35}
                                height={30}
                                alt="Carry UP"
                                priority={true}
                              />{" "}
                            </>
                          ) : v?.tripPlaceDetails[0]?.travelType ==
                            travelType.Train ? (
                            <>
                              <Image
                                src="/icons/train1.png"
                                className="absolute top-[9px] car"
                                width={30}
                                height={30}
                                alt="Carry UP"
                                priority={true}
                              />
                            </>
                          ) : null}
                        </div>
                        <div className="capitalize text-[#2F8EFF] font-semibold">
                        {v?.tripPlaceDetails[0]?.toPlace.length > 4 ?   
                        <SecondTooltip text={v?.tripPlaceDetails[0]?.toPlace}>
                          { v?.tripPlaceDetails[0]?.toPlace.slice(0,4) + "..." }
                        </SecondTooltip> : v?.tripPlaceDetails[0]?.toPlace }
                        </div>
                        
                      

                        <div className="distanceBox ">
                          <div>
                            {v?.tripPlaceDetails.length > 1 && (
                              <Image
                                src="/icons/distance.png"
                                className="bg-[#3C87E0] p-1 rounded ml-3 "
                                width={30}
                                height={10}
                                alt="distance"
                                priority={true}
                              />
                            )}
                          </div>

                          <div >
                            {v?.tripPlaceDetails.length > 1 && (
                              <div className=" distanceScroll py-2 px-6 max-w-[325px] border border-solid border-[#b532ff75] absolute left-[33%] w-[315px] top-[45px] z-10 rounded-xl bg-white distance">
                                {v.tripPlaceDetails.length > 1 &&
                                  v.tripPlaceDetails.slice(1).map((v) => (
                                    <>
                                      <div className="flex justify-between">
                                        <div className="text-[#6B6890] font-semibold">
                                          {v.fromPlace} <br />
                                          <span className="text-[#A8A7FF] italic">
                                            {moment(v.toTripDate).format(
                                              "DD.MM.YYYY"
                                            )}
                                          </span>
                                        </div>
                                        <div className="flex justify-between m-1">
                                          <div className="flex ">
                                            <Image
                                              src="/icons/lines.png"
                                              width={5}
                                              height={5}
                                              alt="Carry UP"
                                              priority={true}
                                              style={{ height: "23px" }}
                                            />
                                            <Image
                                              src="/icons/lines.png"
                                              width={5}
                                              height={5}
                                              alt="Carry UP"
                                              priority={true}
                                              style={{ height: "23px" }}
                                            />
                                            <Image
                                              src="/icons/lines.png"
                                              width={5}
                                              height={5}
                                              alt="Carry UP"
                                              priority={true}
                                              style={{ height: "23px" }}
                                            />
                                          </div>
                                          <div className="mx-2">
                                            {v?.travelType ==
                                            travelType.Plane ? (
                                              <>
                                                <Image
                                                  src="/icons/airplane2.png"
                                                  className="  "
                                                  width={30}
                                                  height={20}
                                                  alt="Carry UP"
                                                  priority={true}
                                                />{" "}
                                              </>
                                            ) : v?.travelType ==
                                              travelType.Bus ? (
                                              <>
                                                <Image
                                                  src="/icons/bus.png"
                                                  className=" "
                                                  width={30}
                                                  height={20}
                                                  alt="Carry UP"
                                                  priority={true}
                                                />{" "}
                                              </>
                                            ) : v?.travelType ==
                                              travelType.Car ? (
                                              <>
                                                <Image
                                                  src="/icons/car1.png"
                                                  className="  "
                                                  width={30}
                                                  height={20}
                                                  alt="Carry UP"
                                                  priority={true}
                                                />{" "}
                                              </>
                                            ) : v?.travelType ==
                                              travelType.Ship ? (
                                              <>
                                                <Image
                                                  src="/icons/ship.png"
                                                  width={30}
                                                  height={20}
                                                  alt="Carry UP"
                                                  priority={true}
                                                />{" "}
                                              </>
                                            ) : v?.travelType ==
                                              travelType.Train ? (
                                              <>
                                                <Image
                                                  src="/icons/train.png"
                                                  width={25}
                                                  height={20}
                                                  alt="Carry UP"
                                                  priority={true}
                                                />
                                              </>
                                            ) : null}
                                          </div>
                                          <div className="flex">
                                            <Image
                                              src="/icons/lines.png"
                                              width={5}
                                              height={5}
                                              alt="Carry UP"
                                              priority={true}
                                              style={{ height: "23px" }}
                                            />

                                            <Image
                                              src="/icons/downarrow.png"
                                              width={20}
                                              height={5}
                                              alt="Carry UP"
                                              priority={true}
                                              style={{
                                                width: "30px",
                                                height: "23px",
                                              }}
                                            />
                                          </div>
                                        </div>
                                        <div className="text-[#6B6890] font-semibold">
                                          {" "}
                                          {v.toPlace} <br />
                                          <span className="text-[#A8A7FF] italic">
                                            {" "}
                                            {moment(v.fromTripDate).format(
                                              "DD.MM.YYYY"
                                            )}
                                          </span>
                                        </div>
                                      </div>
                                    </>
                                  ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        <Tooltip text={v.title}>
                          <p className="px-4 mt-2 material-symbols-outlined ">
                            {v.title.slice(0, 10) + "..."}
                          </p>
                        </Tooltip>
                      </div>

                      <div className="mt-1 mb-2 pl-4 flex justify-between ">
                        <div>
                          <p className="text-[#717171] font-medium mt-0">
                            Departure:{" "}
                            <span className="text-[#2F8EFF] font-medium">
                              {v?.tripPlaceDetails
                                ? moment(
                                    v?.tripPlaceDetails[0]?.fromTripDate
                                  ).format("DD.MM.YYYY")
                                : null}
                            </span>
                          </p>

                          <p className="text-[#717171] font-medium">
                            Arrival:{" "}
                            <span className="text-[#2F8EFF] font-medium">
                              {v?.tripPlaceDetails
                                ? moment(
                                    v?.tripPlaceDetails[0]?.toTripDate
                                  ).format("DD.MM.YYYY")
                                : null}
                            </span>
                          </p>
                        </div>

                        <span className="mt-0 relative">
                          <div>
                            <Image
                              src="/icons/tape2.png"
                              className="hoverImg2"
                              width={50}
                              height={10}
                              alt="tape"
                              priority={true}
                            />
                          </div>
                          <div>
                            <Image
                              src="/icons/tape.png"
                              className="hoverImg"
                              width={70}
                              height={10}
                              alt="tape"
                              priority={true}
                            />
                          </div>

                          <span className="flex absolute top-[10px] left-3  text-white font-semibold">
                            <span className="text-lg ml-[2px]">
                              {v?.package?.currency == currency.AZN ? (
                                <Image
                                  src="/icons/manat.png"
                                  width={10}
                                  height={10}
                                  alt="manat"
                                  priority={true}
                                />
                              ) : v?.package?.currency == currency.USD ? (
                                <Image
                                  src="/icons/dollar.png"
                                  width={10}
                                  height={10}
                                  alt="dollar"
                                  priority={true}
                                />
                              ) : v?.package?.currency == currency.TL ? (
                                "TL"
                              ) : null}
                            </span>
                            {v?.package?.price}
                          </span>
                        </span>
                      </div>

                      <div className="w-full flex justify-between mt-7 bg-[#5FA0EE] absolute bottom-0 px-4 rounded-b-[1rem] py-2.5">
                        <p className="text-white  flex italic text-[14px] font-semibold">
                          <Image
                            src="/icons/info (3).png"
                            className="infoImg"
                            width={20}
                            height={10}
                            alt="Info"
                            priority={true}
                          />
                          Last date to apply{" "}
                          {v?.package?.deadline
                            ? moment(v.package.deadline).format("DD.MM.YYYY")
                            : null}
                        </p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <CustomPagination
                changeCPage={changeCPage}
                nextPage={nextPageTrip}
                prePage={prePageTrip}
                totalTrips={tripTotalCount}
                tripPerPage={tripPerPage}
                setCurrentPage={setTripCurrentPage}
                currentPage={tripCurrentPage}
              />
            </>
          )}
{sendLoading && (
            <div role="status " className="absolute left-[50%] top-[50%]">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin  fill-purple-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
          {activeButton === "forSend" && (
            <>
              <div className="grid grid-cols-3 gap-4 pt-6 px-6 mt-5 ">
                {sendData.map((v) => (
                  <>
                    <div className="bg-white border box 2xl:mb-6  xl:mb-0 lg:mb-0 relative pt-4 pb-8  hover:bg-[#a784f22e] border-[#8E65E7] border-solid rounded-[1rem]  h-[12rem] max-h-[16rem]  hover:border-[#7F4BED] hover:shadow-xl transition duration-700 ease-in-out">
                      <div className="flex px-4 ">
                      <div className="capitalize text-[#8E65E7] font-semibold">
                        {v?.sendPlaceDetails[0]?.fromPlace.length > 4 ?   
                        <SecondTooltip text={v?.sendPlaceDetails[0]?.fromPlace}>
                          { v?.sendPlaceDetails[0]?.fromPlace.slice(0,4) + "..." }
                        </SecondTooltip> : v?.sendPlaceDetails[0]?.fromPlace }
                        </div>
                      
                        <div
                          className="w-44 "
                          style={{
                            borderBottom: "2.5px solid #A883F9",
                            height: "22px",
                            width: "135px",
                            margin: "0 10px",
                          }}
                        >
                          <Image
                            src="/icons/shipping.png"
                            className="car absolute top-[11px]"
                            width={25}
                            height={10}
                            alt="distance"
                            priority={true}
                          />
                        </div>
                        <div className="capitalize text-[#8E65E7] font-semibold">
                        {v?.sendPlaceDetails[0]?.toPlace.length > 4 ?   
                        <SecondTooltip text={v?.sendPlaceDetails[0]?.toPlace}>
                          { v?.sendPlaceDetails[0]?.toPlace.slice(0,4) + "..." }
                        </SecondTooltip> : v?.sendPlaceDetails[0]?.toPlace }
                        </div>

                        <div>
                          {v?.sendPlaceDetails.length > 1 && (
                            <Image
                              src="/icons/distance.png"
                              className="bg-[#3C87E0] p-1 rounded ml-3"
                              width={30}
                              height={10}
                              alt="distance"
                              priority={true}
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <Tooltip text={v.title}>
                          <p className="px-4 mt-2 material-symbols-outlined ">
                            {v.title.slice(0, 10) + "..."}
                          </p>
                        </Tooltip>
                      </div>

                      <div className="mt-1 mb-2 pl-4 flex justify-between ">
                        <div>
                          <p className="text-[#5C5C5C] font-medium mt-0">
                            Count:{" "}
                            <span className="text-[#8E65E7] font-medium">
                              {v?.package?.count}
                            </span>
                          </p>

                          <p className="text-[#5C5C5C] font-medium">
                            Date of appointment:{" "}
                            <span className="text-[#8E65E7] font-medium">
                             {moment(v?.sendPlaceDetails[0]?.catchDate).format("DD.MM.YYYY")}
                            </span>
                          </p>
                        </div>

                        <span className="mt-0 relative">
                          <div>
                            <Image
                              src="/icons/tape2.png"
                              className="hoverImg2"
                              width={50}
                              height={10}
                              alt="tape"
                              priority={true}
                            />
                          </div>
                          <div>
                            <Image
                              src="/icons/tape.png"
                              className="hoverImg"
                              width={70}
                              height={10}
                              alt="tape"
                              priority={true}
                            />
                          </div>

                          <span className="flex absolute top-[10px] left-3  text-white font-semibold">
                            <span className="text-lg ml-[2px]">
                              {v?.package?.currency == currency.AZN ? (
                                <Image
                                  src="/icons/manat.png"
                                  width={10}
                                  height={10}
                                  alt="manat"
                                  priority={true}
                                />
                              ) : v?.package?.currency == currency.USD ? (
                                <Image
                                  src="/icons/dollar.png"
                                  width={10}
                                  height={10}
                                  alt="dollar"
                                  priority={true}
                                />
                              ) : v?.package?.currency == currency.TL ? (
                                "TL"
                              ) : null}
                            </span>
                            {v?.package?.price}
                          </span>
                        </span>
                      </div>

                      <div className="w-full flex justify-between mt-7 bg-[#A883F9] hover:bg-[#895AEE] absolute bottom-0 px-4 rounded-b-[1rem] py-2.5">
                        <p className="text-white  flex italic text-[14px] font-semibold">
                          <Image
                            src="/icons/info (3).png"
                            className="infoImg"
                            width={20}
                            height={10}
                            alt="Info"
                            priority={true}
                          />
                          Last date to apply{" "}
                          {v?.package?.deadline
                            ? moment(v.package.deadline).format("DD.MM.YYYY")
                            : null}
                        </p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <SendPagination
                changeCPage={changeCPage}
                nextPage={nextPageSend}
                prePage={prePageSend}
                totalSends={sendTotalCount}
                sendPerPage={sendPerPage}
                setCurrentPage={setSendCurrentPage}
                currentPage={sendCurrentPage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
