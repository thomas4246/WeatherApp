import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import CityInput from './components/CityInput';
import Location from './components/Location';
import Card from './components/Card';
import getFormattedWeatherData from './service/weatherService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState(
    JSON.parse(localStorage.getItem('location')) === null
      ? { q: 'seattle' }
      : JSON.parse(localStorage.getItem('location'))
  );

  const [units, setUnits] = useState(
    JSON.parse(localStorage.getItem('unit')) === null
      ? 'metric'
      : JSON.parse(localStorage.getItem('unit'))
  );

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    //// Local Storage ////
    localStorage.setItem('location', JSON.stringify(query));
    localStorage.setItem('unit', JSON.stringify(units));

    //// Fetch data ////
    const fetchWeatherData = async () => {
      const message = query.q ? query.q : 'current location.';

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
          <Header units={units} setUnits={setUnits} />
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
