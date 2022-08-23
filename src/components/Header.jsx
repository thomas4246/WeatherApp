import React from 'react';
import Units from './Units';
import Theme from './Theme';

export default function Header({ units, setUnits }) {
  return (
    <>
      <div className='header'>
        <h5> - Units - </h5>
        <Units units={units} setUnits={setUnits} />
        <h5> - Theme - </h5>
        <Theme />
      </div>
    </>
  );
}
