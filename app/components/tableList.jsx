import React from "react";

const TableList = ({ data }) => {
  console.log("datas", data);
  return (
    <div className="p-6">
      <table>
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr className="text-[#6096FF]">
            <th>From (City)</th>
            <th>From (Date)</th>
            <th>To (City)</th>
            <th>From (Date)</th>
            <th>Transport</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
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
