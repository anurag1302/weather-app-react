import React from "react";
import "./styles.css";

const WeatherData = ({ weatherData }) => {
  const getWeatherIcon = (weatherType) => {
    let icon = "";
    switch (weatherType) {
      case "Clouds":
        icon = <i className="fas fa-cloud"></i>;
        break;
      case "Rain":
        icon = <i className="fas fa-cloud-rain"></i>;
        break;
      case "Mist":
        icon = <i className="fas fa-smog"></i>;
        break;
      case "Sunny":
        icon = <i className="far fa-sun"></i>;
        break;
      default:
        icon = <i className="far fa-sun"></i>;
        break;
    }
    return icon;
  };

  return (
    <>
      {Object.keys(weatherData).length !== 0 ? (
        <section>
          <div className="section-1">
            <p>
              {weatherData.cityName}, {weatherData.country}
            </p>
            <p>{weatherData.weatherType}</p>
            <p>{getWeatherIcon(weatherData.weatherType)}</p>
          </div>
          <div className="section-2">
            <p>Temperature : {weatherData.temp} &deg;C</p>
            <p>Pressure : {weatherData.pressure}</p>
            <p>Humidity : {weatherData.humidity}</p>
          </div>
        </section>
      ) : (
        <br />
      )}
    </>
  );
};

export default WeatherData;
