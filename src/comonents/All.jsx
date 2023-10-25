import { useState } from "react";
import Form from "./Form";
import Info from "./Info";
import '../App.css'
import WeatherInfo from "./WeatherInfo";
import { error } from "../constant/error";
import { getWeather } from '../services/config';

const All = () => {

  const [weater, setWeather] = useState({
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error:  undefined
  })

  const gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city){
        const weatherData = await getWeather(city); // Используем функцию
        setWeather(weatherData)
    }
    else{
      setWeather({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: error.error2
      })
    }
  }

  return(
    <div className="wrapper">
      <div className="main">
        <div className="constainer">
          <div className="row">
            <div className="col-sm-5 info">
              <Info/>
            </div>
            <div className="col-sm-7 form">
              <Form weatherMethod={gettingWeather} />
              <WeatherInfo weater={weater}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default All;
