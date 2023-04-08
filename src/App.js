import React, { useState } from "react";

import "./App.css";

import { Input } from "./Input";

import { CardList } from "./CardList/CardList";

function App() {
  const [cityList, setCitiesList] = useState([]);
  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList} />
      <CardList cityList={cityList} />
    </div>
  );
}

export default App;
