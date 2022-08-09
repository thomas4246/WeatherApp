import React from 'react';
import { toast } from 'react-toastify';
import { UilCompass } from '@iconscout/react-unicons';

export default function Location(setQuery) {
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info('Fetching users location.');
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success('Location fetched!');
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  return (
    <div className='location'>
      <button onClick={handleLocationClick}>
        <img src={require('../images/place.png')} alt='location' height={20} />
        Get Current Location
      </button>
      <UilCompass style={{ marginLeft: '2px', marginTop: '-10px' }} />
    </div>
  );
}
