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

function MainPage() {
  const [formData, setFormData] = useState({
    tripCreateDate: '',
    tripTitle: '',

    tripPlaceDetailTravelType: '',
    packagePrice: '',
    tripPlaceDetailFromPlace: '',
    tripPlaceDetailToPlace: '',
    tripPlaceDetailFromTripDate: '',
    tripPlaceDetailToTripDate: '',
    packageCategoryId: '',
  });
  const [tripCurrentPage, setTripCurrentPage] = useState(1);
  const [tripPerPage, setTripPerPage] = useState(6);
  const [tripTotalPages, settripTotalPages] = useState(0);
  const [tripTotalCount, settripTotalCount] = useState(0);
  const [tripData, setTripData] = useState([]);
  const [sendData, setSendData] = useState([]);
const [loading,setLoading] = useState(false)
  const [activeButton, setActiveButton] = useState("forCarry");

  const handleButtonClick = (button) => {
    setActiveButton(button);
    if (button === "forSend") getSends();
    if (button === "forCarry") getTrips();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    getTrips(tripCurrentPage);
  }, [tripCurrentPage]);

  const getTrips = async (currentPage) => {
    try {
      setLoading(true)
      let tripsData = await fetch(
        "http://carryuptest.somee.com/api/trip/gettrips ",
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
              packagePrice: formData.packagePrice,
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
        settripTotalPages(Math.ceil(responseData.totalCount / tripPerPage));
        settripTotalCount(responseData.totalCount);
      } else {
        setTripData(responseData.list);
        settripTotalPages(0);
        settripTotalCount(0);

        toast.error("Trip not found!");
      }setLoading(false)

    } catch (error) {
      setLoading(false)
      console.log("searchAds error: ", error);
    }
  };

  const getSends = async () => {
    try {
      let sendsData = await fetch(
        "http://carryuptest.somee.com/api/send/getsends ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            value: {
              tripCreateDate: formData.tripCreateDate,
              tripTitle: formData.tripTitle,
              packagePrice: formData.packagePrice,
              tripPlaceDetailFromPlace: formData.tripPlaceDetailFromPlace,
              tripPlaceDetailToPlace: formData.tripPlaceDetailToPlace,
              tripPlaceDetailFromTripDate: formData.catchDate,
              packageCategoryId: formData.packageCategoryId,
            },
            pageSize: 0,
            currentPage: 0,
          }),
          cache: "force-cache",
        }
      );
      const responseData = await sendsData.json();

      if (responseData?.list.length > 0) {
        setSendData(responseData.list);
      } else {
        setSendData(responseData.list);
        toast.error("Send not found!");
      }
    } catch (error) {
      console.log("searchAds error: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const clearTripsData = () => {
    setFormData({
      tripCreateDate: '',
      tripTitle: '',

      tripPlaceDetailTravelType: '',
      packagePrice: '',
      tripPlaceDetailFromPlace: '',
      tripPlaceDetailToPlace: '',
      tripPlaceDetailFromTripDate: '',
      tripPlaceDetailToTripDate: '',
      packageCategoryId: '',
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

  return (
    <div className={style.profile}>
      <Navbar />

      <div className="flex justify-between mx-16">
      <aside
          id="logo-sidebar"
          class=" aside  shadow-md section  mb-2  mt-4 mx-4 z-40 w-[17rem]  pt-5 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div class=" bg-white dark:bg-gray-800 leftSection">
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
                    <div className=" mt-4">
                      <div className="w-full  md:mb-0">
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
                    <label className="text-[15px]">Package Price</label>
                    <div className="mt-4">
                      <input
                        className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="number"
                        placeholder=""
                        name="packagePrice"
                        value={formData.packagePrice}
                        onChange={handleChange}
                      />
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
                          name="tripCreateDate"
                          value={formData.tripCreateDate}
                          onChange={handleChange}
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
                        name="tripTitle"
                        value={formData.tripTitle}
                        onChange={handleChange}
                      />
                    </div>
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">Package Price</label>
                    <div className="mt-4">
                      <input
                        className="appearance-none block w-full  text-gray-400 border rounded-lg py-2 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="number"
                        placeholder=""
                        name="packagePrice"
                        value={formData.packagePrice}
                        onChange={handleChange}
                      />
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
                        name="tripPlaceDetailToPlace"
                        value={formData.tripPlaceDetailToPlace}
                        onChange={handleChange}
                      />
                    </div>
                    <hr className="mb-5" />
                  </div>
                  <div className=" px-3">
                    <label className="text-[15px]">Catch Date</label>
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
                </>
              )}
            </form>
            <div className=" sticky bottom-0 flex ml-3 justify-between  bg-white px-3 py-4">
              <button
                className="bg-transparent  font-semibold  px-4 py-1.5 border    rounded-md cancelButton "
                onClick={clearTripsData}
              >
                Clear all
              </button>
              <button
                className="bg-transparent  font-semibold  px-6 py-1.5 border    rounded-md saveButton "
                onClick={()=>getTrips(tripCurrentPage)}

              >
                Search
              </button>
            </div>
          </div>
        </aside>

        <div className="bg-white aside shadow-md     md:w-[77%] lg:w-[80%] xl:w-[80%%] col-span-2  mt-4 mr-4 relative">
        {loading && (
            <div role="status " className="absolute left-[50%] top-[50%]">
              <svg
                aria-hidden="true"
                class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
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
              <span class="sr-only">Loading...</span>
            </div>
          )}
          {activeButton === "forCarry" && (
            <>
               <div className="grid grid-cols-3 gap-4 py-6 px-6 ">
                {tripData.map((v) => (
                  <>
                    <div className="bg-white border box  relative pt-4 pb-8 border-[#A0CCFF] border-solid rounded-[1rem]  h-[12rem] max-h-[16rem] hover:bg-[#449aff29] hover:border-[#0E6FE1] hover:shadow-xl transition duration-700 ease-in-out">
                      <div className="flex px-4 ">
                        <div className="capitalize text-[#2F8EFF] font-semibold ">
                          {v?.tripPlaceDetails[0]?.fromPlace}
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
                          {
                            v?.tripPlaceDetails[0]?.travelType == travelType.Plane ? (
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
                            ) : v?.tripPlaceDetails[0]?.travelType == travelType.Bus ? (
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
                            ) : v?.tripPlaceDetails[0]?.travelType == travelType.Car ? (
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
                            ) : v?.tripPlaceDetails[0]?.travelType == travelType.Ship ? (
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
                            ) : v?.tripPlaceDetails[0]?.travelType == travelType.Train ? (
                              <>
                                <Image
                                  src="/icons/train1.png"
                                  className="absolute top-[8px] car"
                                  width={35}
                                  height={30}
                                  alt="Carry UP"
                                  priority={true}
                                />
                              </> ) : null
                          }
                        </div>
                        <div className="capitalize text-[#2F8EFF] font-semibold">
                          {v?.tripPlaceDetails[0]?.toPlace}
                        </div>
                        <div>
                          {v?.tripPlaceDetails.length > 1 && 
                          <Image
                          src="/icons/distance.png"
                         className="bg-[#3C87E0] p-1 rounded ml-3"
                          width={30}
                          height={10}
                          alt="distance"
                          priority={true}
                        />
                        
                          }
                          {/* <div>
                            {v.tripPlaceDetails[0] && v.tripPlaceDetails?.map((v) => (
                                 <>
                                   <div className="flex">
                                   <div>{v.fromPlace}</div>
                                   <div>
                                   {
                             v?.tripPlaceDetails?.travelType.map((v) => v) == travelType.Plane ? (
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
                            ) : v?.tripPlaceDetails?.travelType.map((v) => v) == travelType.Bus ? (
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
                            ) : v?.tripPlaceDetails?.travelType.map((v) => v) == travelType.Car ? (
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
                            ) : v?.tripPlaceDetails?.travelType.map((v) => v) == travelType.Ship ? (
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
                            ) :  v?.tripPlaceDetails?.travelType.map((v) => v) == travelType.Train ? (
                              <>
                                <Image
                                  src="/icons/train1.png"
                                  className="absolute top-[8px] car"
                                  width={35}
                                  height={30}
                                  alt="Carry UP"
                                  priority={true}
                                />
                              </> ) : null
                          }
                                   </div>
                                   <div> {v.toPlace}</div>
     
     
                                 </div>
                                 </>
                            ))}
                           

                          </div> */}
                        </div>
                      </div>
                      <div >
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
                                    )
                                  .format("DD.MM.YYYY")
                                : null}
                            </span>
                          </p>

                          <p className="text-[#717171] font-medium">
                            Arrival:{" "}
                            <span className="text-[#2F8EFF] font-medium">
                              {v?.tripPlaceDetails
                                ? moment(
                                  v?.tripPlaceDetails[0]?.toTripDate)
                                  .format("DD.MM.YYYY")
                                : null}
                            </span>
                          </p>
                        </div>

                      
                        <span className="mt-0 relative" >
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
                          {v?.package?.createDate
                            ? moment(v.package.createDate).format("DD.MM.YYYY")
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
        </div>
      </div>
    </div>
  );
}

export default MainPage;
