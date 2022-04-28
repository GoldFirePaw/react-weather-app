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
      <div className="app-container">
        <h1>Weather app</h1>
        <i className="fa-solid fa-sun weather-icon"></i>
        <Search onSubmit={setCity} />
        <div className="container">
          <div className="row">
            <div className="col">
              <CurrentLocationButton onClick={setCity} />
            </div>
            <div className="col">
              <DateAndHour /></div>
          </div>
        </div>
        <Weather city={city} />
      </div>
    </div >
  );
}
