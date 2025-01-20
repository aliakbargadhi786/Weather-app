import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import WeatherDetails from "./WeatherDetails";
import "./weather.css";

const Weather = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  //upadated the time rendering the every sec
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setCurrentTime(new Date());
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    handleSearch("Sukkur");
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
    setSearchQuery("");
  };

  // fetch the current Weather Using openweathermap Api
  const handleSearch = (cityName) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f9ad0d563e1d98c23693e24c1ac143bf`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "404") {
          setError("City not found");
          setWeatherData(null);
        } else {
          setWeatherData(data);
          setError("");
        }
      })
      .catch((error) => {
        console.log(error);
        setError("An error occurred");
        setWeatherData(null);
      });
  };

  // displaying the data from an API
  return (
    <div>
      <div className="name-container">
        <div className="weathr-app">
          <h1>Weather App</h1>
          <a className="logo" href="https://github.com/mhg007" target="_blank">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>

          </a>
      
        </div>
      </div>
      <div className="weather-container">
        <div className="weather-subcontainer">
          <SearchForm
            searchQuery={searchQuery}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />

          {error ? (
            <p className="errors-styles">{error}</p>
          ) : (
            weatherData && (
              <WeatherDetails
                temperature={`${Math.round(weatherData.main.temp - 273.15)}°C`}
                weatherCondition={weatherData.weather[0].description}
                weatherIcon={weatherData.weather[0].icon}
                cityName={weatherData.name}
                countryName={weatherData.sys.country}
                humidity={weatherData.main.humidity}
                wind={weatherData.wind.speed}
                pressure={weatherData.main.pressure}
                visibility={weatherData.visibility}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
