import styles from './weatherDisplay.module.css'


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
		<div className={styles["weather-card"]}>
			<h2 className={styles['city-name']}>{weatherData.name}</h2>

			<img src={iconUrl} className={styles["weather-icon"]} alt="weather icon"/>

			<div className={styles['temp-unit-toggle']}>
			<h4 className={styles["temp-main"]}>{RoundTemp}˚{unit}</h4>
			<button className={styles['unit-toggle']} onClick={unitToggle}>
				Switch to {unit === 'C'? 'F' : 'C'}
			</button>
			</div>

			<div className={styles['data-section']}>

				<div className={styles['data-item']}>
					<p>{weatherData.main.humidity} %</p>
					<p>Humidity</p>

				</div>

				<div className={styles['data-item']}>
					<p>{weatherData.wind.speed}m/s</p>
					<p>wind speed</p>

				</div>
			
			</div>
			
		</div>
		)
}

export default WeatherDisplay;