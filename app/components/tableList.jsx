import React from "react";

const     TableList = ({ data }) => {
  // console.log("datas", data);
  return (
    <div className="p-6">
      <table className="w-full">
        <thead className=" font-medium ">
          <tr className="text-[#6096FF] text-center border-b border-solid border-[#D0E0FF]">
            <th >From (City)</th>
            <th >From (Date)</th>
            <th >To (City)</th>
            <th >To (Date)</th>
            <th >Transport</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center border-b border-solid border-[#d3e3ffd1]">
              <td><p>{item.fromPlace}</p></td>
              <td><p>{item.fromTripDate}</p></td>
              <td><p>{item.toPlace}</p></td>
              <td><p>{item.toTripDate}</p></td>
              <td><p>{item.travelType}</p></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
