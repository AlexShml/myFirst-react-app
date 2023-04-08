import React from "react";

import { Card } from "../Card/card";

import "../App.css";

export const CardList = ({ cityList }) => {
  return (
    <div className="CardList">
      {cityList.map((city) => (
        <Card key={city} city={city} />
      ))}
    </div>
  );
};
