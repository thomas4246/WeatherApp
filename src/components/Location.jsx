import React from 'react';
import { toast } from 'react-toastify';

export default function Location({ setQuery }) {
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
        <img src={require('../images/place.png')} alt='location' />
        Get Current Location
      </button>
    </div>
  );
}
