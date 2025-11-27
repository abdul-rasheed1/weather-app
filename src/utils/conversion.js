export const kelvinToCelsius = (K) => K - 273.15;

export const kelvinToFahrenheit = (K) => {
	const C = K - 273.15;

	return C * 9/5 + 32;
}