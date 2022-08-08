import React, { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons';

export default function CityInput({ setQuery }) {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== '') setQuery({ q: city });
  };

  return (
    <>
      <div className='city-input'>
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type='text'
          placeholder='Add location'
        />
        <UilSearch
          size={25}
          className='text-black search-icon'
          onClick={handleSearchClick}
        />
      </div>
    </>
  );
}
