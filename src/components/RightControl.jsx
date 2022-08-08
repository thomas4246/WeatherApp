import React from 'react';
import {
  formatDate,
  formatYear,
  formatDay,
  formatLocalTime,
} from '../service/weatherService';

export default function RightControl({ setQuery, weather: { dt, timezone } }) {
  const cities = [
    {
      id: 1,
      title: ' 🇬🇧 London',
      name: 'London',
    },
    {
      id: 2,
      title: ' 🇺🇸 New York',
      name: 'New York',
    },
    {
      id: 3,
      title: ' 🇯🇵 Tokyo',
      name: 'Tokyo',
    },
    {
      id: 4,
      title: ' 🇨🇦 Toronto',
      name: 'Toronto',
    },
    {
      id: 5,
      title: ' 🇫🇷 Paris',
      name: 'Paris',
    },
  ];
  return (
    <>
      <div className='right-control '>
        {/* Update */}
        <div className='date'>
          <p style={{ fontSize: '13px', marginBottom: '5px' }}>Last Update</p>
          <h6>{formatLocalTime(dt, timezone)}</h6>
          <h4> {formatDay(dt, timezone)}</h4>
          <h1>{formatDate(dt, timezone)}</h1>
          <h4>{formatYear(dt, timezone)}</h4>
        </div>
        <div className='container major-city'>
          <h6 className='text-center'>
            <em>- Major Cities -</em>
          </h6>
          {cities.map((city) => (
            <button
              key={city.id}
              className='city-btn'
              onClick={() => setQuery({ q: city.name })}
            >
              {city.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
