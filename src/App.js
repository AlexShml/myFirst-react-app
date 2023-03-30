import React, { useState } from "react";

import "./App.css";

import { Input } from "./Input";

import { Card } from "./Card/card.js";

function App() {
  const [cityList, setCitiesList] = useState([]);
  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList} />
      <div className="CardList">
        {cityList.map((city) => (
          <Card key={city} city={city} />
        ))}
      </div>
    </div>
  );
}

export default App;
