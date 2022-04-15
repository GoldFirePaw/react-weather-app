import React, { useState, useEffect } from "react";

export default function ForecastDay(props) {
    let { dailyfForecast } = props
    console.log(dailyfForecast[0].temp.max)

    return <div className="container">
        <div className="row"></div>
    </div>;
}