import { useState, useEffect } from 'react'
import SearchForm from './components/searchForm/searchForm.jsx'
import WeatherDisplay from './components/weatherData/weatherDisplay.jsx'
import styles from './App.module.css'

function App() {

  const [cityInput, setCityInput] = useState('');
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [unit, setUnit] = useState('C');
  const API_KEY = '056573f96c2eb1ef207f92823ce5f6a1';


  const handleTextChange = (event)=>{
    setCityInput(event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    setCity(cityInput);
    setCityInput('');
  }

  const unitConvert = () =>{
    setUnit(prevUnit => prevUnit==='C'?'F':'C')
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
    <div className={styles['main-container']}>

      <div className={styles['search-section']}>
        <SearchForm 
          currentCitText={cityInput}
          handleTextChange={handleTextChange}
          handleSubmit={handleSubmit}
         />
      </div>

      <div className={styles['result-section']}>
        {
          isLoading?(
            <h2>Loading weather data...</h2>

            ):
          isError?(
            <h2 className="error">Error:{isError}</h2>
              ):
          weatherData?(
            <WeatherDisplay weatherData={weatherData} unit={unit} unitToggle={unitConvert} />
              ):
          <h2>search for a city to see the weather</h2>

        }
      </div>

      
    </div>
    )
   
}

export default App;
