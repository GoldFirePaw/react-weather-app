import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";
//import { mockWeatherApi } from './utils/mock'

export default function Weather(props) {
    const apiKey = "25f52e06da5b2fdd1326f6f6848418de";
    let { city } = props;
    let [currentCity, setCurrentCity] = useState(null)
    const [temperature, setTemperature] = useState(null);
    const [wind, setWind] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [unit, setUnit] = useState("metric");
    const [iconId, setIconId] = useState(null);


    useEffect(() => {
        function getWeather(response) {
            setTemperature(Math.round(response.data.main.temp));
            if (unit === "metric") { setWind(Math.round(response.data.wind.speed) * 3.6) }
            else { setWind(Math.round(response.data.wind.speed)) };
            setHumidity(response.data.main.humidity);
            setIconId(response.data.weather[0].icon);
            setLatitude(response.data.coord.lat)
            setLongitude(response.data.coord.lon)
            if (!city) {
                setCurrentCity(response.data.name)
            }
        }

        if (city) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
            axios.get(url).then(getWeather);
        } else {
            navigator.geolocation.getCurrentPosition(function (position) {
                const { latitude, longitude } = position.coords;
                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
                axios.get(url).then(getWeather);
                //mockWeatherApi().then(getWeather)
            })
        }
    }, [city, unit]);

    function convertToFahr(event) {
        setUnit("imperial")
    }
    function convertToCel(event) {
        setUnit("metric")
    }

    return (
        <div>
            <button type="button" onClick={convertToCel} className="btn unit-button">°C</button>
            <button type="button" onClick={convertToFahr} className="btn unit-button">°F</button>
            <div className="weather-container">
                <h2>{!city ? `Weather in ${currentCity}` : `Weather in ${city}`}</h2>
                <div className="row">
                    <div className="col">
                        <WeatherIcon iconId={iconId} />
                    </div>
                    <div className="col">
                        <p>
                            Temperature is {temperature}{unit === "metric" ? `°C` : `°F`} <br /> Wind is {wind}{unit === "metric" ? `km` : `m`}/h
                            <br />
                            Humidity is {humidity}%
                        </p>
                    </div>
                </div>
            </div>
            <Forecast latitude={latitude} longitude={longitude} unit={unit} />
        </div>
    );
}

