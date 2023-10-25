import { error } from "../constant/error";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeather = async (city) => {
  try {
    const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const DATA = await API_URL.json();

    if (DATA.cod === 200) {
      let sunset = DATA.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_data = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

      return {
        temp: DATA.main.temp,
        city: DATA.name,
        country: DATA.sys.country,
        pressure: DATA.main.pressure,
        sunset: sunset_data,
        error: undefined
      };
    } else {
      return {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: error.error1
      };
    }
  } catch (error) {
    return {
      temp: undefined,
      city: undefined,
      country: undefined,
      pressure: undefined,
      sunset: undefined,
      error: 'Error fetching weather data'
    };
  }
};
