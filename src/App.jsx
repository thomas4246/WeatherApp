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
      });
    };

    fetchWeatherData();
  }, [query, units]);

  return (
    <>
      <Location setQuery={setQuery} />
      {weather && (
        <div>
          <CityInput setQuery={setQuery} />
          <LeftControl units={units} setUnits={setUnits} />
          <Card weather={weather} units={units} />
          <RightControl weather={weather} setQuery={setQuery} />
        </div>
      )}
    </>
  );
}

export default App;
