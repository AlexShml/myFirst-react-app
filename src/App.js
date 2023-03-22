import "./App.css";

import { Input } from "./Input";

import { Card } from "./Card/card";

function App() {
  const cityList = ["city1", "city2", "city3", "city4"];
  return (
    <div className="Main">
      <Input />
      <div className="CardList">
        {cityList.map((city) => (
          <Card key={city} city={city} />
        ))}
      </div>
    </div>
  );
}

export default App;
