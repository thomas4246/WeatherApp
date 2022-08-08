import React from 'react';
import { toast } from 'react-toastify';
import { UilLocationPoint } from '@iconscout/react-unicons';

export default function Location(setQuery, units, setUnits) {
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
    <>
      <img src={require('../images/place.png')} alt='' height={20} />
      <h5>Location</h5>
      <UilLocationPoint
        size={25}
        className='text-black cursor-pointer transition ease-out hover:scale-125'
        onClick={handleLocationClick}
      />
    </>
  );
}
