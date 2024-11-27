"use client";

import React, { useState, useEffect } from "react";

function MyAdsTrip() {
  const [activeButton, setActiveButton] = useState(1);
  const [list, setList] = useState([]);
  const [sendLoading, setSendLoading] = useState(false);
  const [sendTotalPages, setSendTotalPages] = useState(0);
  const [sendTotalCount, setSendTotalCount] = useState(0);

  const sendPerPage = 10; // Assuming a default value
  const apiurl = process.env.NEXT_PUBLIC_API_URL;

  const toggleActiveButton = (index) => {
    setActiveButton(index);
  };

  const getTrips = async (currentPage) => {
    try {
      setSendLoading(true);

      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      
      const accessToken = localStorage.getItem("accessToken");

   
      

      if (!user?.id || !accessToken) {
        console.error("User ID or Access Token not found in localStorage");
        return;
      }

      const response = await fetch(`${apiurl}/Send/GetTripsByUserId`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, 
        },
        body: JSON.stringify({
          value: { userId:user.id }, 
          pageSize: sendPerPage,
          currentPage: currentPage,
        }),
        cache: "force-cache",
      });


      const responseData = await response.json();


      if (response.ok && responseData?.list?.length > 0) {
        setList(responseData.list);
        setSendTotalPages(Math.ceil(responseData.totalCount / sendPerPage));
        setSendTotalCount(responseData.totalCount);
      } else {
        setList([]);
        setSendTotalPages(0);
        setSendTotalCount(0);
        console.error("No data found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setSendLoading(false);
    }
  };

  useEffect(() => {
    getTrips(1); 
  }, []);

  return (
    <div className="w-3/4 ml-14">
      <div className="flex justify-evenly mb-3">
        {["New", "Active", "Delivered", "Timed out"].map((label, index) => (
          <button
            key={index}
            className={`bg-[white] py-[10px] px-[50px] ${
              activeButton === index + 1 ? "activeButton" : "deactiveButton"
            }`}
            onClick={() => toggleActiveButton(index + 1)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="active-content secondBox2 bg-white aside shadow-md w-full px-7 py-5">
        {activeButton === 1 && (
          <div
            className="section relative"
            style={{
              height: "calc(100vh - 220px)",
              overflowY: "auto",
            }}
          >
            <table className="adsTable w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="sticky top-0 bg-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Published
                  </th>
                  <th scope="col" className="px-6 py-3">
                    From
                  </th>
                  <th scope="col" className="px-6 py-3">
                    To
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Transport
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Deadline
                  </th>
                </tr>
              </thead>
              <tbody>
                {list.length > 0 ? (
                  list.map((v, idx) => (
                    <tr
                      key={idx}
                      className="bg-white border-b hover:bg-[#BCB6FF] hover:text-[white] text-[#717171]"
                    >
                      <td className="px-6 py-4">{v.published}</td>
                      <td className="px-6 py-4">{v.from}</td>
                      <td className="px-6 py-4">{v.to}</td>
                      <td className="px-6 py-4">{v.transport}</td>
                      <td className="px-6 py-4">{v.deadline}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-4">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyAdsTrip;