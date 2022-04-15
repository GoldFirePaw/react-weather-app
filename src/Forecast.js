import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props) {
    const apiKey = "0f687b8ce7b2a635f662f6784501a1b1";
    const { latitude, longitude, unit } = props
    let [forecast, setForecast] = useState();
    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`
        axios.get(url).then(getForecastWeather);

        function getForecastWeather(response) {
            setForecast(response.data.daily);
        }
    }, [latitude, longitude, unit]);

    return (
        <div className="container">
            <div className="row">
                <p>COucou</p>
            </div>
        </div>

    );
}
