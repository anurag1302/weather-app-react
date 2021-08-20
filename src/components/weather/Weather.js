import React from "react";
import weather from "./weather.jpg";
import "./styles.css";

const Weather = () => {
  return (
    <div className="weather">
      <img alt="weather-img" src={weather} />
    </div>
  );
};

export default Weather;
