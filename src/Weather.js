import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);
  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let cityName = event.target.elements.city.value;
    let apiKey = "c5f0e59acac64258bb92ed027d20c68f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemperature);
  }
  function changeCity(event) {
    event.preventDefault();
  }
  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" name="city" placeholder="Enter City" />
        <input type="Submit" value="Search" onChange={changeCity} />
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <h4>
          <ul>
            <li>Temperature:{Math.round(weather.temperature)} ℃ </li>
            <br />
            <li>Humidity: {weather.humidity} %</li>
            <br />
            <li>Wind speed:{weather.windSpeed} Km/hr</li>
            <br />
            <li>Desription: {weather.description}</li>
            <br />
            <li>
              <img
                src={`https://openweathermap.org/img/w/${weather.icon}.png`}
                alt="weather-icon"
              />
            </li>
          </ul>
        </h4>
      </div>
    );
  } else {
    return form;
  }
}
