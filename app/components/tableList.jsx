import React from "react";

const TableList = ({ data }) => {
  console.log("datas", data);
  return (
    <div className="p-6">
      <table>
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr className="text-[#6096FF] text-center">
            <th className="p-4">From (City)</th>
            <th className="p-4">From (Date)</th>
            <th className="p-4">To (City)</th>
            <th className="p-4">To (Date)</th>
            <th className="p-4">Transport</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td>{item.tripPlaceDetailAddModels[0].fromPlace}</td>
              <td>{item.tripPlaceDetailAddModels[0].fromTripDate}</td>
              <td>{item.tripPlaceDetailAddModels[0].toPlace}</td>
              <td>{item.tripPlaceDetailAddModels[0].toTripDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
