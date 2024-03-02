"use client"
import React, { useState } from "react";

const FormExample = () => {
  const [formData, setFormData] = useState({
    fromPlace: "",
    fromTripDate: "",
    toPlace: "",
    toTripDate: "",
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleButtonClick = () => {
    // Validate form data before adding to tableData
    if (
      formData.fromPlace &&
      formData.fromTripDate &&
      formData.toPlace &&
      formData.toTripDate
    ) {
      setTableData((prevTableData) => [...prevTableData, formData]);
      // Clear the form after adding to tableData
      setFormData({
        fromPlace: "",
        fromTripDate: "",
        toPlace: "",
        toTripDate: "",
      });
    } else {
      alert("Please fill out all form fields before adding to the table.");
    }
  };

  return (
    <div>
      <form>
        <label>
          From Place:
          <input
            type="text"
            name="fromPlace"
            value={formData.fromPlace}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          From Trip Date:
          <input
            type="date"
            name="fromTripDate"
            value={formData.fromTripDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          To Place:
          <input
            type="text"
            name="toPlace"
            value={formData.toPlace}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          To Trip Date:
          <input
            type="date"
            name="toTripDate"
            value={formData.toTripDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleButtonClick}>
          Add to Table
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>From Place</th>
            <th>From Trip Date</th>
            <th>To Place</th>
            <th>To Trip Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.fromPlace}</td>
              <td>{data.fromTripDate}</td>
              <td>{data.toPlace}</td>
              <td>{data.toTripDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormExample;