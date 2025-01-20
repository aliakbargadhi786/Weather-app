import React from 'react';
import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';
import OpacityTwoToneIcon from '@mui/icons-material/OpacityTwoTone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompareArrowsTwoToneIcon from '@mui/icons-material/CompareArrowsTwoTone';

const WeatherDetails = ({
  temperature,
  weatherCondition,
  weatherIcon,
  cityName,
  countryName,
  humidity,
  wind,
  pressure,
  visibility,
  
}) => {

  // This is an Ui  component with styles using css and icon for materialUI
  return (
    <div>
      <div className="current-details">
        <h3>Current weather</h3> ||
        <h3>{new Date().toLocaleTimeString()}</h3>
      </div>

      <div className="weather-details">
        <h1>{temperature}</h1>||
        <h2>{weatherCondition}</h2>
        <img
          src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
          alt="Weather Icon"
          className="weather-imag"
        />
      </div>

      <div className="city-name">
        <h1>{`${cityName}, ${countryName}`}</h1>
      </div>

      <div className="box">
        <div className="box-items">
          <div className="box-item-2">
            <OpacityTwoToneIcon className="weather-details-img" />
            <div className="box-item-3">
              <h3>{humidity}</h3>
              <h3>Humidity</h3>
            </div>
          </div>
        </div>

        <div className="box-items">
          <div className="box-item-2">
            <AirTwoToneIcon className="weather-details-img" />
            <div className="box-item-3">
              <h3>{wind}</h3>
              <h3>wind</h3>
            </div>
          </div>
        </div>

        <div className="box-items">
          <div className="box-item-2">
            <CompareArrowsTwoToneIcon className="weather-details-img" />
            <div className="box-item-3">
              <h3>{pressure}</h3>
              <h3>pressure</h3>
            </div>
          </div>
        </div>

        <div className="box-items">
          <div className="box-item-2">
            <VisibilityIcon className="weather-details-img" />
            <div className="box-item-3">
              <h3>{visibility}</h3>
              <h3>visibility</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
