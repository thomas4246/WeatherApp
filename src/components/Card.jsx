import React from 'react';
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
}) {
  return (
    <div className='main'>
      <div className='row align-items-center'>
        <div className='col-6 mx-auto '>
          <div className='card shadow border top-card' style={{}}>
            {/* Location & temperture */}
            <div className='card-body d-flex flex-column '>
              <div className='row'>
                <p>{`${name}, ${country}`}</p>
                <div className='col-10'>
                  <p className='card-text temp'>{temp.toFixed()}°</p>
                </div>
                <div className='col-2 weather-icon'>
                  <img src={iconsUrlfromCode(icon)} alt='' />
                </div>
              </div>
            </div>
          </div>

          {/* other info */}

          <div className='col mx-auto '>
            <div className='card shadow border bot-card'>
              <div className='card-body d-flex flex-column '>
                <div className='row info-title'>
                  <div className='col-10'>
                    <h2 className='card-text'>{details}</h2>
                    <p style={{ textTransform: 'uppercase' }}>{description}</p>
                  </div>
                  <div className='col'>
                    <p>Feels Like</p>
                    <h2>{feels_like.toFixed()}°</h2>
                  </div>
                </div>

                <div className='bar'></div>

                <div className='row'>
                  <div className='col humidity'>
                    <i className='wi wi-raindrop'></i>
                    <p>Humidity</p>
                  </div>
                  <div className='col wind'>
                    <i class='wi wi-strong-wind'></i>
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
                    <h2>{speed.toFixed(1)} m/s</h2>
                  </div>
                </div>
                <div className='bar'></div>

                <div className='row sun-data'>
                  <div className='col sunrise'>
                    <i className='wi wi-sunrise'></i>
                    <p>
                      Sunrise: {formatLocalTime(sunrise, timezone, 'hh:mm a')}
                    </p>
                  </div>
                  <div className='col sunset'>
                    <i className='wi wi-sunset'></i>
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
