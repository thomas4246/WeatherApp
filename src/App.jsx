import React, { useState, useEffect } from 'react';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import CityInput from './components/CityInput';
import Location from './components/Location';
import Card from './components/Card';
import getFormattedWeatherData from './service/weatherService';

function App() {
  const [query, setQuery] = useState({ q: 'Seattle' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        console.log(data);
      });
    };

    fetchWeatherData();
  }, [query, units]);

  return (
    <>
      {weather && (
        <div>
          <Location setQuery={setQuery} />
          <CityInput setQuery={setQuery} units={units} setUnits={setUnits} />
          <LeftControl />
          <Card weather={weather} />
          <RightControl weather={weather} setQuery={setQuery} />
        </div>
      )}
    </>
  );
}

export default App;
