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
      title: ' π¬π§ London',
      name: 'London',
    },
    {
      id: 2,
      title: ' πΊπΈ New York',
      name: 'New York',
    },
    {
      id: 3,
      title: ' π―π΅ Tokyo',
      name: 'Tokyo',
    },
    {
      id: 4,
      title: ' π¨π¦ Toronto',
      name: 'Toronto',
    },
    {
      id: 5,
      title: ' π«π· Paris',
      name: 'Paris',
    },
  ];
  return (
    <>
      <div className='right-control '>
        {/* Update */}
        <div className='date'>
          <p>Last Update</p>
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
