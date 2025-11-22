function WeatherDisplay ({weatherData}){
	return(
		<div className="weather-Display">
			<h2>{weatherData.name}</h2>

			<h4>Temperature: {weatherData.main.temp}</h4>
			
		</div>
		)
}

export default WeatherDisplay;