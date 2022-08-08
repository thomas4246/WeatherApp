import React, { useState } from 'react';

export default function CityInput({ setQuery, units, setUnits }) {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== '') setQuery({ q: city });
  };

  return (
    <>
      <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        type='text'
        placeholder='Add location'
        id='location-input'
      />
      <button onClick={handleSearchClick}>+</button>
    </>
  );
}
