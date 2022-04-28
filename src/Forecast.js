import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";
//import { mockForecast } from "./utils/mock";
import "./styles.css";

export default function Forecast(props) {
    const apiKey = "25f52e06da5b2fdd1326f6f6848418de";
    const { latitude, longitude, unit } = props
    let [forecast, setForecast] = useState();

    useEffect(() => {
        if (latitude && longitude && unit) {
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`
            axios.get(url).then(function (response) {
                let forecast = response.data.daily
                setForecast(forecast)
            });
            /*mockForecast().then(function (response) {
                let forecast = response.data.daily
                setForecast(forecast)
            });*/

        }
    }, [latitude, longitude, unit]);

    console.log(forecast?.[0])

    if (!forecast) {
        return "Loading"
    }

    return (
        <div>
            <div className="row forecast-col">
                {forecast.slice(1, 5).map(function (dailyForecast, index) {
                    return (
                        <div className="col-3" key={index}>
                            <ForecastDay data={dailyForecast} />
                        </div>
                    );
                })}
            </div>

        </div >
    );
}
