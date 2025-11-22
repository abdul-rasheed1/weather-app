import { useState, useEffect } from 'react'
import SearchForm from './components/searchForm/searchForm.jsx'
import './App.css'

function App() {

  const [cityInput, setCityInput] = useState('');
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const API_KEY = '056573f96c2eb1ef207f92823ce5f6a1';


  const handleTextChange = (event)=>{
    setCityInput(event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    setCity(cityInput);
    setCityInput('');
  }

useEffect(()=>{
  if(city){
    setIsLoading(true);

  
  async function fetchWeather(){
    setIsError(null);

    try{
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      const response = await fetch(URL);

      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setWeatherData(data);


    }
    catch(error){
      setIsError(error.message);
      setWeatherData(null);
    }
    finally{
      setIsLoading(false);
    }
  }
  fetchWeather();

}},[city])



  return (
    <div className="weather-app">

      <div className="search-Section">
        <SearchForm 
          currentCitText={cityInput}
          handleTextChange={handleTextChange}
          handleSubmit={handleSubmit}
         />
      </div>

      <div className="result-Section">
        {
          isLoading?(
            <h2>Loading weather data...</h2>

            ):
          isError?(
            <h2 className="error">Error:{isError}</h2>
              ):
          weatherData?(
            <h2>Displaying weather data for {weatherData.name}</h2>
              ):
          <h2>search for a city to see the weather</h2>

        }
      </div>

      
    </div>
    )
   
}

export default App;
