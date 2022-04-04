import React from "react";
import "./DateAndHour.css";


export default function DateAndHour() {
    let now = new Date();
    let min = ('0' + now.getMinutes()).slice(-2);
    let hours = now.getHours();
    let date = now.getDate();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];
    let month = months[now.getMonth()];



    return (
        <div className="date-container">
            <p>Today is : {day} {date} of {month}<br />
                It is now : {hours}h{min}min</p>
        </div>);
}