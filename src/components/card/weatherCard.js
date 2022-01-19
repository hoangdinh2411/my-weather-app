import React, { useState, useEffect } from "react";
import { Clear, Clouds, Drizzle, Rain, Snow, Thunderstorm} from 'assets';

function WeatherCard({info}) {
  const [imgURL , setImgUrl] = useState()
  const [iconUrl , setIconUrl] = useState('')
  useEffect(() => {
      switch (info.status) {
        case 'Clear':
          setImgUrl(Clear)
          break;
        case 'Clouds':
          setImgUrl(Clouds)
          break;
        case 'Drizzle':
          setImgUrl(Drizzle)
          break;
        case 'Rain':
          setImgUrl(Rain)
          break;
        case 'Snow':
          setImgUrl(Snow)
          break;
        case 'Thunderstorm':
          setImgUrl(Thunderstorm)
          break;
      
        default:
          setImgUrl(Clear)
          break;
      }

      setIconUrl(process.env.REACT_APP_WEATHER_API_ICON +`/${info.icon}@2x.png`)
  },[info.status])

  const bgImage = {
    backgroundImage: `url(${imgURL})`,
  };
  return (
    <div className="weather-card" style={bgImage}>
      <div className="heading">
        <div className="heading__icon">
          <img src={iconUrl} title={info.title} />
        </div>
        <div className="heading__description">
          <p>{info.title}</p>
          <span>{info.description}</span>
        </div>
      </div>
      <div className="parameters">
        <p className="parameters__geoName">{info.name}</p>
        <p className="parameters__temp">{info.temp}&deg;C</p>
      </div>
      <div className="other">
        <div className="humidity">
          <p>Humidity</p>
          <span>{info.humidity} %</span>
        </div>
        <div className="feelLike">
          <p>Feel like</p>
          <span>{info.feelLike} &deg;C</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
