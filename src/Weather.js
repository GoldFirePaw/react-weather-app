import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
    const apiKey = "0f687b8ce7b2a635f662f6784501a1b1";
    let { city } = props;
    let [currentCity, setCurrentCity] = useState(null)
    const [temperature, setTemperature] = useState(null);
    const [wind, setWind] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [iconId, setIconId] = useState(null);
    const iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    useEffect(() => {

        function getWeather(response) {
            setTemperature(Math.round(response.data.main.temp));
            setWind(Math.round(response.data.wind.speed * 3.6));
            setHumidity(response.data.main.humidity);
            setIconId(response.data.weather[0].icon);
            if (!city) {
                setCurrentCity(response.data.name)
            }
        }

        function handlePosition(position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        }

        if (city) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

            axios.get(url).then(getWeather);
        }

        else {
            navigator.geolocation.getCurrentPosition(handlePosition)

            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
            axios.get(url).then(getWeather);

        }

    }, [city, latitude, longitude]);

    return (
        <div className="weather-container">
            <h2>{!city ? `Weather in ${currentCity}` : `Weather in ${city}`}</h2>
            <div className="row">
                <div className="col">
                    <img src={iconUrl} alt="weather icon" />
                </div>
                <div className="col">
                    <p>
                        Temperature is {temperature}°C <br /> Wind is {wind}km/h <br />
                        Humidity is {humidity}%
                    </p>
                </div>
            </div>
        </div>
    );
}

