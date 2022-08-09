import React, { useState, useEffect } from 'react';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import CityInput from './components/CityInput';
import Location from './components/Location';
import Card from './components/Card';
import getFormattedWeatherData from './service/weatherService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState({ q: 'Seattle' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const message = query.q ? query.q : 'current location.';

      toast.info('Fetching weather for ' + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeatherData();
  }, [query, units]);

  return (
    <>
      {weather && (
        <div>
          <Location setQuery={setQuery} />
          <CityInput setQuery={setQuery} />
          <LeftControl units={units} setUnits={setUnits} />
          <Card weather={weather} units={units} />
          <RightControl weather={weather} setQuery={setQuery} />

          {document.body.classList.contains('dark-theme') ? (
            <ToastContainer autoClose={3000} newestOnTop theme='dark' />
          ) : (
            <ToastContainer autoClose={3000} newestOnTop theme='light' />
          )}
        </div>
      )}
    </>
  );
}

export default App;
