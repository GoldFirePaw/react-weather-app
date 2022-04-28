import axios from "axios";
import "./currentLocationButton.css";


export default function CurrentLocationButton(props) {
    let { onClick } = props

    function handleClick(event) {

        navigator.geolocation.getCurrentPosition(function handlePosition(position) {
            const apiKey = "25f52e06da5b2fdd1326f6f6848418de";
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
            axios.get(url).then(function getCityName(response) {
                onClick(response.data.name);
            });
        })

    }

    return <button type="button" onClick={handleClick} className="btn btn-primary geolocation-button">Current Location</button>
}