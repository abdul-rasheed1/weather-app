import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherDisplay from './weatherDisplay.jsx';



test('renders 0˚C when given the freezing point data in K and unit C', ()=>{
	const mockWeatherData = {
	name:"London",
	main:{
		temp:273.15,
		humidity: 50
	},
	weather:[{icon:"01d"}],
	wind:{
		speed:6
	}
	
}

const props = {
	weatherData:mockWeatherData,
	unit:'C',
	unitToggle:()=>{}
};

render(<WeatherDisplay {...props} />);

expect(screen.getByText("0˚C")).toBeInTheDocument();
expect(screen.getByText('50 %')).toBeInTheDocument();
expect(screen.getByText('6m/s')).toBeInTheDocument();


})
