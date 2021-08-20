import React, { useState } from "react";
import WeatherData from "../weatherData/WeatherData";
import "./styles.css";

const InputBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const apiKey = "API_KEY";

  let apiUrl = `${baseUrl}${inputValue}&appid=${apiKey}&units=Metric`;

  const handleOnChange = (value) => {
    setInputValue(value);
  };

  const handleOnClick = async () => {
    if (!inputValue) {
      alert("Enter a city name");
      return;
    }
    let response = await fetch(apiUrl);
    let apiData = await response.json();

    const { temp, pressure, humidity } = apiData.main;
    const { name } = apiData;
    const { country } = apiData.sys;
    const { main: weatherType } = apiData.weather[0];

    let data = {
      temp: temp,
      cityName: name,
      pressure: pressure,
      humidity: humidity,
      country: country,
      weatherType: weatherType,
    };
    setWeatherData(data);
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => {
          handleOnChange(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          handleOnClick();
        }}
      >
        Search
      </button>
      <WeatherData weatherData={weatherData} />
    </div>
  );
};

export default InputBox;
