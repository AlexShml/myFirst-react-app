import React from "react";

import "../App.css";

export const Input = () => {
  const currentDate = new Date().toDateString();
  const handleOnChange = (event) => {
    console.log("event", event);
    console.log("handleOnChange");
    console.log("value is >>>>", event.target.value);
  };
  const handleOnClick = (value) => () => {
    console.log("handleOnClick");
    console.log("button was clicked in", value);
  };
  return (
    <div className="InputWrap">
      <input className="Input" onChange={handleOnChange} />
      <button className="Button" onClick={handleOnClick(currentDate)}>
        text
      </button>
    </div>
  );
};
