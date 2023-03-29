import React, { useState } from "react";

import "../App.css";

const InputTag = () => {
  const [inputValue, setInputValue] = useState("empty");
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input className="Input" onChange={handleOnChange} value={inputValue} />
  );
};

const BattonTag = () => <button className="Button">Add</button>;

export const Input = () => (
  <div className="InputWrap">
    <InputTag />
    <BattonTag />
  </div>
);
