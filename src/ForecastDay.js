import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
    function maxTemperature() {
        let maxTemp = Math.round(props.data.temp.max)
        return `${maxTemp} °`
    }

    function minTemperature() {
        let minTemp = Math.round(props.data.temp.min)
        return `${minTemp} °`
    }

    function day() {
        let date = new Date(props.data.dt * 1000)
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fry", "Sat"]
        return days[day];
    }

    return (
        <div className="container">
            <div className="col">
                <div className="row">{day()}</div>
                <div className="row"><WeatherIcon iconId={props.data.weather[0].icon} /></div>
                <div className="row">{maxTemperature()} {minTemperature()}
                </div>
            </div>
        </div>)
}