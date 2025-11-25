const kelvinToCelsius = (K) => K - 273.15;

const KelvinToFahrenheit = (K) =>{
	const C = K - 273.15;
	const Fahr = C * 9/5 + 32;
	return Fahr;

}

function WeatherDisplay ({weatherData, unit, unitToggle}){

	const Ktemp = weatherData.main.temp;

	const iconCode = weatherData.weather[0].icon;

	const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

	const DisplayTemp = unit === 'C'? kelvinToCelsius(Ktemp) : KelvinToFahrenheit(Ktemp);

	const RoundTemp = Math.round(DisplayTemp);

	return(
		<div className="weather-Display">
			<h2>{weatherData.name}</h2>

			<img src={iconUrl} className="weather-icon" alt="weather icon"/>

			<h4>Temperature: {RoundTemp}˚{unit}</h4>
			<button onClick={unitToggle}>
				Switch to {unit === 'C'? 'F' : 'C'}
			</button>
			
		</div>
		)
}

export default WeatherDisplay;