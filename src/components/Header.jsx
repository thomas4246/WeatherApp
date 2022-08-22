import React from 'react';
import Units from './Units';
import Theme from './Theme';

export default function Header() {
  return (
    <>
      <div className='header'>
        <h5> - Units - </h5>
        <Units />
        <h5> - Theme - </h5>
        <Theme />
      </div>
    </>
  );
}
