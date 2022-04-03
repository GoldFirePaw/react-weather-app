import "./styles.css";
import Search from "./Search";
import React, { useState } from "react";
import Weather from "./Weather";

export default function App() {
  let [city, setCity] = useState("");
  return (
    <div className="App">
      <h1>Weather app</h1>
      <Search onSubmit={setCity} />
      <Weather city={city} />
    </div>
  );
}
