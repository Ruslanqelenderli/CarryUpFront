import React from "react";

const TableList = ({ data }) => {
  // console.log("datas", data);
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
          {data.map((item) => (
            <tr key={item.id} className="text-center border-b">
              <td>{item.fromPlace}</td>
              <td>{item.fromTripDate}</td>
              <td>{item.toPlace}</td>
              <td>{item.toTripDate}</td>
              <td>{item.travelType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
