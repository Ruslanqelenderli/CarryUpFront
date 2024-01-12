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
    const [tripCurrentPage, setTripCurrentPage] = useState(1);
    const [tripPerPage, setTripPerPage] = useState(6);
    const [tripTotalPages, settripTotalPages] = useState(0);
    const [tripTotalCount, settripTotalCount] = useState(0);
    const [tripData, setTripData] = useState([]);
    const [sendData, setSendData] = useState([]);

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
                settripTotalPages(Math.ceil(responseData.totalCount/tripPerPage));
                settripTotalCount(responseData.totalCount);
            } else {
                setTripData(responseData.list);
                settripTotalPages(0);
                settripTotalCount(0);


                toast.error("Trip not found!");
            }
        } catch (error) {
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

            <div className="flex justify-between">
                <aside id="logo-sidebar" class=" aside  shadow-md  overflow-auto mt-4 mx-4 z-40 w-64  pt-5 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                    <div class="overflow-y-auto bg-white dark:bg-gray-800 leftSection">
                        <form onSubmit={handleSubmit}>
                            <div className="px-3">
                                <div className="flex mb-5 justify-between">
                                    <button
                                        className={`ml-3 bg-white ${activeButton === "forCarry"
                                            ? "border-[#b532ff75] border-solid border shadow-md px-4 py-1.5 rounded-md bg-[#AEA6FD] text-white"
                                            : "bg-transparent  font-semibold  py-1.5 px-4 border    rounded-md cancelButton"
                                            }`}
                                        onClick={() => handleButtonClick("forCarry")}

                                    >
                                        For Carry
                                    </button>
                                    <button
                                        className={`bg-white ${activeButton === "forSend"
                                            ? "border-[#b532ff75] border-solid border shadow-md px-4 py-1.5 rounded-md bg-[#AEA6FD] text-white"
                                            : "bg-transparent  font-semibold  py-1.5 px-4 border    rounded-md cancelButton"
                                            }`}
                                        onClick={() => handleButtonClick("forSend")}
                                    >
                                        For Send
                                    </button>

                                </div>
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
                                                value={formData.tripTitle || null}
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
                                                <option value={0} selected>Select category</option>
                                                <option value={1} >Document</option>
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
                                        <label className="text-[15px]" >To Trip Date</label>
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
                                                value={formData.tripTitle || null}
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
                                                <option value={0} selected>Select category</option>
                                                <option value={1} >Document</option>
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
                        <div className=" sticky bottom-0 flex  justify-between  bg-white px-3 py-4">
                            <button
                                className="bg-transparent  font-semibold  py-1.5 px-4 border    rounded-md cancelButton "
                                onClick={clearTripsData}
                            >
                                Clear All
                            </button>
                            <button
                                className="bg-transparent  font-semibold  py-1.5 px-6 border    rounded-md saveButton "
                                onClick={getTrips}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </aside>

               
                <div className="bg-white aside shadow-md  md:w-[77%] lg:w-[80%] xl:w-[80%%] col-span-2  mt-4 mr-4 relative ">
                    {activeButton === "forCarry" && (
                        <>
                            <div className="grid grid-cols-3 gap-4 py-6 px-6 ">
                                {tripData.map((v) => (
                                    <>
                                        <div className="bg-white border relative border-[#A0CCFF] border-solid rounded-xl p-4 h-52 min-h-56 ">
                                            <div className="flex  ">
                                                <span className="capitalize text-[#2F8EFF] font-semibold ">
                                                    {v?.tripPlaceDetails.map((v) => v.fromPlace)}
                                                </span>
                                                <span
                                                    className="w-44 "
                                                    style={{
                                                        borderBottom: "3px solid #A0CCFF",
                                                        height: "22px",
                                                        width: "126px",
                                                        margin: "0 10px",
                                                        display: "flex"
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
                                            <div className="my-3">
                                                <span className="text-[#717171] font-medium my-3">
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
                                            </div>


                                            <div className="flex justify-between mt-7">
                                                <p className="text-[#717171] mt-1 flex">
                                                    <Image
                                                        src="/icons/info.png"
                                                        className="infoImg"
                                                        width={20}
                                                        height={10}
                                                        alt="Info"
                                                        priority={true}
                                                    />{" "}
                                                    Last date to apply{" "}
                                                    {v?.package?.createDate
                                                        ? moment(v.package.createDate).format("DD.MM.YYYY")
                                                        : null}
                                                </p>
                                                <span className="text-[#2F8EFF] font-medium text-3xl">
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
