"use client"
import React, { useState } from 'react';
// import './App.css';

const MyForm = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return Object.values(inputValues).every((value) => value.trim() !== '');
  };

  return (
    <form>
      <label htmlFor="input1">Input 1:</label>
      <input
        type="text"
        id="input1"
        name="input1"
        value={inputValues.input1}
        onChange={handleInputChange}
      />

      <label htmlFor="input2">Input 2:</label>
      <input
        type="text"
        id="input2"
        name="input2"
        value={inputValues.input2}
        onChange={handleInputChange}
      />

      <label htmlFor="input3">Input 3:</label>
      <input
        type="text"
        id="input3"
        name="input3"
        value={inputValues.input3}
        onChange={handleInputChange}
      />

      <input
        type="submit"
        value="Submit"
        style={{
          backgroundColor: isFormValid() ? '#4caf50' : '#ccc',
          color: '#fff',
          cursor: isFormValid() ? 'pointer' : 'not-allowed',
        }}
        disabled={!isFormValid()}
      />
    </form>
  );
};

export default MyForm;