import React, { useEffect, useState } from "react";

import "../App.css";

import { API_KEY } from "../settings";

export const Card = ({ city }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((resData) => resData.json())
      .then((dataJson) => setData(dataJson)) //.then((json)=>setData(json)) or .then(setData)
      .catch((error) => console.log("fetch error >>>>", error));
    console.log("mount useEffect");
  }, []);
  console.log("json >>>>", data);
  if (!data) return null;
  const { name, weather, main } = data; // Destructuring object
  const { description, icon } = weather[0]; // Destructuring array
  const { temp, humidity, feels_like } = main;

  console.log("render card");

  return (
    <div className="Card">
      <div className="MainInfo">
        <img
          className="Icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <div className="Title">{name}</div>
        <div className="Description">{description}</div>
        <div className="Temperature">{temp.toFixed()}</div>
      </div>
      <div className="Information">
        <div>Humidity: {humidity}</div>
        <div>Feels like: {feels_like}</div>
      </div>
    </div>
  );
};
