import {kelvinToCelsius, kelvinToFahrenheit} from './conversion.js';

test('converts the freezing point of water from Kelvin to Celsius', ()=>{
	const kelvin = 273.15;

	const expected = 0;

	const result = kelvinToCelsius(kelvin);

	expect(result).toBe(expected);
});


test('converts the boiling point of water in Kelvin (373.15) to Fahrenheit', ()=>{

	const K = 373.15;

	const expected = 212;

	const res = kelvinToFahrenheit(K);

	expect(res).toBe(expected);
})