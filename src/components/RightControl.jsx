import React, { useState, useEffect } from 'react';
import CityInput from './CityInput';
import Location from './Location';
import getFormattedWeatherData from '../service/weatherService';
import { formatDate, formatYear, formatDay } from '../service/weatherService';

export default function RightControl({ weather: { dt, timezone } }) {
  const [query, setQuery] = useState({ q: 'Aichi' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        console.log(data);
      });
    };

    fetchWeatherData();
  }, [query, units]);

  return (
    <>
      <div className='right-control '>
        {/* Update */}
        <div className='date'>
          <p style={{ fontSize: '10px' }}>Last updated</p>

          <p>16:00</p>
          <h4> {formatDay(dt, timezone)}</h4>
          <h1>{formatDate(dt, timezone)}</h1>
          <h4>{formatYear(dt, timezone)}</h4>
        </div>
        {/* Location */}
        <div className='container'>
          <div className='title'>
            <Location />

            {/* Location form */}
            <div className='location'>
              <CityInput
                setQuery={setQuery}
                units={units}
                setUnits={setUnits}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
