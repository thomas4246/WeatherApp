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
        <div className='form__group field'>
          <input
            className='form__field'
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type='text'
            placeholder='Search a Location...'
            name='search'
            id='search'
          />

          <UilSearch
            size={20}
            className='search-icon'
            onClick={handleSearchClick}
          />
        </div>
      </div>
    </>
  );
}
