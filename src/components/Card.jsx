import React from 'react';
import {
  UilTear,
  UilWind,
  UilSunset,
  UilMountainsSun,
} from '@iconscout/react-unicons';
import { ProgressBar } from 'react-bootstrap';
import { iconsUrlfromCode, formatLocalTime } from '../service/weatherService';

export default function Card({
  weather: {
    name,
    country,
    temp,
    details,
    description,
    humidity,
    speed,
    feels_like,
    sunrise,
    sunset,
    icon,
    timezone,
  },
  units,
}) {
  return (
    <div className='main'>
      <div className='row align-items-center'>
        <div className='col-6 mx-auto '>
          <div className='card shadow top-card'>
            {/* Location & temperture */}
            <div className='card-body d-flex flex-column '>
              <div className='row'>
                <p>{`${name}, ${country}`}</p>
                <div className='col-10'>
                  <div className='card-text temp'>
                    {units === 'metric' ? (
                      <p>{temp.toFixed()}°C</p>
                    ) : (
                      <p>{temp.toFixed()}°F</p>
                    )}
                  </div>
                </div>
                <div className='col-2 weather-icon'>
                  <img src={iconsUrlfromCode(icon)} alt='' />
                </div>
              </div>
            </div>
          </div>

          {/* other info */}

          <div className='col mx-auto '>
            <div className='card shadow bot-card'>
              <div className='card-body d-flex flex-column '>
                <div className='row info-title'>
                  <div className='col-9'>
                    <h2 className='card-text'>{details}</h2>
                    <p style={{ textTransform: 'uppercase' }}>{description}</p>
                  </div>
                  <div className='col text-center'>
                    <p>Feels Like</p>
                    {units === 'metric' ? (
                      <h2>{feels_like.toFixed()}°C</h2>
                    ) : (
                      <h2>{feels_like.toFixed()}°F</h2>
                    )}
                  </div>
                </div>

                <div className='bar'></div>

                <div className='row'>
                  <div className='col humidity'>
                    <UilTear className='humidity-icon' />
                    <p>Humidity</p>
                  </div>
                  <div className='col wind'>
                    <UilWind className='wind-icon' />
                    <p>Wind</p>
                  </div>
                </div>
                <div className='row text-center'>
                  <div className='col'>
                    <h2>{humidity.toFixed()}%</h2>
                    <ProgressBar
                      now={humidity.toFixed()}
                      style={{
                        height: '5px',
                        width: '250px',
                        margin: 'auto',
                      }}
                    />
                  </div>
                  <div className='col'>
                    {units === 'metric' ? (
                      <h2>{speed.toFixed(1)} m/s</h2>
                    ) : (
                      <h2>{speed.toFixed(1)} Mph</h2>
                    )}
                  </div>
                </div>
                <div className='bar'></div>

                <div className='row sun-data'>
                  <div className='col sunrise'>
                    <UilMountainsSun className='sunrise-icon' />
                    <p>
                      Sunrise: {formatLocalTime(sunrise, timezone, 'hh:mm a')}
                    </p>
                  </div>
                  <div className='col sunset'>
                    <UilSunset className='sunset-icon' />
                    <p>
                      Sunset: {formatLocalTime(sunset, timezone, 'hh:mm a')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
