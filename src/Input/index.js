import React, { useState, useRef } from "react";

import "../App.css";

export const Input = ({ setCitiesList }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleOnClick = () => {
    setCitiesList((currentArrey) => [...currentArrey, inputValue]);
    setInputValue("");
    inputRef.current.focus();
  };

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  // console.log("render input");
  return (
    <div className="InputWrap">
      <input
        className="Input"
        onChange={handleOnChange}
        value={inputValue}
        ref={inputRef}
      />
      <button className="Button" onClick={handleOnClick}>
        Add
      </button>
    </div>
  );
};
