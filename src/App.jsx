import React, { useState, useEffect } from 'react';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import Card from './components/Card';
import getFormattedWeatherData from './service/weatherService';
import CityInput from './components/CityInput';

function App() {
  const [query, setQuery] = useState({ q: 'Aichi' });
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
          <LeftControl />
          <Card weather={weather} />
          <RightControl weather={weather} />
        </div>
      )}
    </>
  );
}

export default App;
