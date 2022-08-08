import React from 'react';
import CityInput from './CityInput';
import Location from './Location';

import { formatDate, formatYear, formatDay } from '../service/weatherService';

export default function RightControl({ weather: { dt, timezone } }) {
  return (
    <>
      <div className='right-control '>
        {/* Update */}
        <div className='date'>
          <p style={{ fontSize: '13px', marginBottom: '5px' }}>Local Time</p>

          <h4> {formatDay(dt, timezone)}</h4>
          <h1>{formatDate(dt, timezone)}</h1>
          <h4>{formatYear(dt, timezone)}</h4>
        </div>
        {/* Location */}
        <div className='container'>
          <div className='title'>
            <Location />

            {/* Location form */}
            <div className='location'></div>
          </div>
        </div>
      </div>
    </>
  );
}
