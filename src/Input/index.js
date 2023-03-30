import React, { useState, useRef } from "react";

import "../App.css";

export const Input = ({ setCitiesList }) => {
  const [inputValue, setInputValue] = useState("empty");

  const handleOnClick = () => {
    setCitiesList((currentArrey) => [...currentArrey, inputValue]);
  };

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="InputWrap">
      <input className="Input" onChange={handleOnChange} value={inputValue} />
      <button className="Button" onClick={handleOnClick}>
        Add
      </button>
    </div>
  );
};
