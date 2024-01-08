"use client";

import React, { useEffect, useState } from "react";
import style from "../app.module.css";
import Navbar from "./navbar";
import CustomPagination from "./customPagination";
import moment from "moment";
import { toast } from "react-hot-toast";
import Image from "next/image";

import { currency, travelType } from "./constant";

function MainPage() {
  const [formData, setFormData] = useState({
    tripCreateDate: null,
    tripTitle: null,

    tripPlaceDetailTravelType: null,
    packagePrice: null,
    tripPlaceDetailFromPlace: null,
    tripPlaceDetailToPlace: null,
    tripPlaceDetailFromTripDate: null,
    tripPlaceDetailToTripDate: null,
    packageCategoryId: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [tripPerPage, setTripPerPage] = useState(4);

  const [tripData, setTripData] = useState([]);

  const lastIndex = currentPage * tripPerPage;
  const firstIndex = lastIndex - tripPerPage;
  const records = tripData.slice(firstIndex, lastIndex);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = async () => {
    try {
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
            pageSize: 0,
            currentPage: 0,
          }),
          cache: "force-cache",
        }
      );
      const responseData = await tripsData.json();

      if (responseData?.list.length > 0) {
        setTripData(responseData.list);
      } else {
        toast.error("Trip not found!");
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
      tripCreateDate: null,
      tripTitle: null,

      tripPlaceDetailTravelType: null,
      packagePrice: null,
      tripPlaceDetailFromPlace: null,
      tripPlaceDetailToPlace: null,
      tripPlaceDetailFromTripDate: null,
      tripPlaceDetailToTripDate: null,
      packageCategoryId: null,
    });
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  function changeCPage(id) {
    setCurrentPage(id);
  }

  return (
    <div className={style.profile}>
      <Navbar />

      <div className="flex  my-7 mx-7">
        <div className="leftSectionMain">
          <div className="bg-white aside shadow-md  overflow-auto leftSection">
            <form onSubmit={handleSubmit}>
              <div className="pt-9 px-9 ">
                <div className="flex mb-5">
                  <div className="bg-white border-[#b532ff75]  border-solid border shadow-md  px-5 py-1.5 rounded-md text-[#AEA6FD]">
                    For Send
                  </div>
                  <div className="ml-3 bg-white border-[#b532ff75]  border-solid border shadow-md  px-5 py-1.5 rounded-md text-[#AEA6FD]">
                    For Carry
                  </div>
                </div>

                <label>Trip Create Date</label>
                <div className=" mt-4">
                  <div className="w-full  md:mb-0">
                    <input
                      className="appearance-none block w-full  text-gray-400 border rounded-lg py-2.5 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
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
              <div className=" px-9">
                <label>Trip Title</label>
                <div className="mt-4">
                  <input
                    className="appearance-none block w-full  text-gray-400 border rounded-lg py-2.5 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                    name="tripTitle"
                    value={formData.tripTitle || null}
                    onChange={handleChange}
                  />
                </div>
                <hr className="mb-5" />
              </div>
              <div className=" px-9">
                <label>Trip Place Detail Travel Type</label>
                <div className="mt-4">
                  <select
                    className="appearance-none block w-full  text-gray-400 border rounded-lg py-2.5 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
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
              <div className=" px-9">
                <label>Package Price</label>
                <div className="mt-4">
                  <input
                    className="appearance-none block w-full  text-gray-400 border rounded-lg py-2.5 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
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
              <div className=" px-9">
                <label>Package CategoryId</label>
                <div className="mt-4">
                  <select
                    className="appearance-none block w-full  text-gray-400 border rounded-lg py-2.5 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                    name="packageCategoryId"
                    value={formData.packageCategoryId}
                    onChange={handleChange}
                  >
                    <option>Select category</option>
                    <option selected>Document</option>
                  </select>
                </div>
                <hr className="mb-5" />
              </div>
              <div className=" px-9">
                <label>Trip Place Detail From Place</label>
                <div className="mt-4">
                  <input
                    className="appearance-none block w-full  text-gray-400 border rounded-lg py-2.5 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
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
              <div className=" px-9">
                <label>Trip Place Detail To Place</label>
                <div className="mt-4">
                  <input
                    className="appearance-none block w-full  text-gray-400 border rounded-lg py-2.5 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
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
              <div className=" px-9">
                <label>Trip Place Detail From Trip Date</label>
                <div className="mt-4">
                  <input
                    className="appearance-none block w-full  text-gray-400 border rounded-lg py-2.5 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
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
              <div className=" px-9">
                <label>Trip Place Detail To Trip Date</label>
                <div className="mt-4">
                  <input
                    className="appearance-none block w-full  text-gray-400 border rounded-lg py-2.5 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="date"
                    placeholder=""
                    name="tripPlaceDetailToTripDate"
                    value={formData.tripPlaceDetailToTripDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>

            {/* <div className=" px-9">
                        <label>Packagesub CategoryId</label>
                        <div className="mt-4">

                            <select

                                className="appearance-none block w-full  text-gray-400 border rounded-lg py-2.5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"

                            >
                                <option selected>select</option>

                            </select>
                        </div>
                        <hr className = "mb-5" />
                    </div> */}
          </div>
          <div className="mt-5 ml-8">
            <button
              className="bg-transparent  font-semibold  py-1.5 px-6 border mr-4   rounded-md cancelButton "
              onClick={clearTripsData}
            >
              Clear All
            </button>
            <button
              className="bg-transparent  font-semibold  py-1.5 px-8 border mr-4   rounded-md saveButton "
              onClick={getTrips}
            >
              Apply
            </button>
          </div>
        </div>

        <div className="bg-white aside shadow-md ml-6 w-[77%] h-[30rem] ">
          <div className="grid gap-x-8 gap-y-4 grid-cols-2 py-6 px-9">
            {records.map((v) => (
              <>
                <div className="bg-white border relative border-[#A0CCFF] border-solid rounded-xl p-2.5 h-44">
                  <div className="flex ">
                    <span className="capitalize text-[#2F8EFF] font-semibold text-xl">
                      {v?.tripPlaceDetails.map((v) => v.fromPlace)}
                    </span>
                    <span
                      className="w-44 "
                      style={{
                        borderBottom: "3px solid #A0CCFF",
                        height: "22px",
                        width: "140px",
                        margin: "0 10px",
                      }}
                    >
                      {v?.tripPlaceDetails.map((v) =>
                        v.travelType == travelType.Plane ? (
                          <>
                            <Image
                              src="/icons/plane.png"
                              className="absolute top-[-12px]"
                              width={60}
                              height={30}
                              alt="Carry UP"
                              priority={true}
                            />{" "}
                          </>
                        ) : v.travelType == travelType.Bus ? (
                          <>
                            <Image
                              src="/icons/bus.png"
                              className="absolute top-[-12px]"
                              width={60}
                              height={30}
                              alt="Carry UP"
                              priority={true}
                            />{" "}
                          </>
                        ) : v.travelType == travelType.Car ? (
                          <>
                            <Image
                              src="/icons/car.png"
                              className="absolute top-[5px]"
                              width={60}
                              height={30}
                              alt="Carry UP"
                              priority={true}
                            />{" "}
                          </>
                        ) : v.travelType == travelType.Ship ? (
                          <>
                            <Image
                              src="/icons/ship.png"
                              className="absolute top-[-12px]"
                              width={60}
                              height={30}
                              alt="Carry UP"
                              priority={true}
                            />{" "}
                          </>
                        ) : null
                      )}
                    </span>
                    <span className="capitalize text-[#2F8EFF] font-semibold text-xl">
                      {" "}
                      {v?.tripPlaceDetails.map((v) => v.toPlace)}
                    </span>
                  </div>
                  <p
                    data-tooltip-target="tooltip-default"
                    className="text-[#717171] italic capitalize mt-3"
                  >
                    <div
                      id="tooltip-default"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      Tooltip content
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    {v.description && v.description.substr(0, 20)} ...
                  </p>
                  <span className="text-[#717171] font-medium ">
                    Departure:{" "}
                    <span className="text-[#2F8EFF] font-medium">
                      {v?.tripPlaceDetails
                        ? moment(
                          v?.tripPlaceDetails.map((v) => v.fromTripDate)
                        ).format("DD.MM.YYYY")
                        : null}
                    </span>
                  </span>
                  <br />
                  <span className="text-[#717171] font-medium">
                    Arrival:{" "}
                    <span className="text-[#2F8EFF] font-medium">
                      {v?.tripPlaceDetails
                        ? moment(
                          v?.tripPlaceDetails.map((v) => v.toTripDate)
                        ).format("DD.MM.YYYY")
                        : null}
                    </span>
                  </span>

                  <div className="flex justify-between">
                    <p className="text-[#717171] mt-3">
                      Last date to apply{" "}
                      {v?.package?.createDate
                        ? moment(v.package.createDate).format("DD.MM.YYYY")
                        : null}
                    </p>
                    <span className="text-[#2F8EFF] font-medium text-4xl">
                      {v?.package?.price}
                      <span className="text-lg ml-[2px]">
                        {v?.package?.currency == currency.AZN
                          ? "AZN"
                          : v?.package?.currency == currency.USD
                            ? "USD"
                            : v?.package?.currency == currency.TL
                              ? "TL"
                              : null}
                      </span>
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>
          <CustomPagination
            changeCPage={changeCPage}
            nextPage={nextPage}
            prePage={prePage}
            totalTrips={tripData.length}
            tripPerPage={tripPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
