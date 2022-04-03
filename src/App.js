import "./styles.css";
import Search from "./Search";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";
import DateAndHour from "./DateAndHour";
import CurrentLocationButton from "./CurrentLocationButton";


export default function App() {
  let [city, setCity] = useState("");

  return (
    <div className="App">
      <h1>Weather app</h1>
      <Search onSubmit={setCity} />
      <CurrentLocationButton onClick={setCity} />
      <DateAndHour />
      <Weather city={city} />


    </div>
  );
}
