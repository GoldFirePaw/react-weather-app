export default function WeatherIcon(props) {
    let { iconId } = props

    if (!iconId) return null
    const iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

    return (
        <img className="forecastIcon" src={iconUrl} alt="" />
    )
}