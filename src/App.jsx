import React from 'react';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import MainView from './components/MainView';

const key = '988299740f950d31d917c48e11e92c76';
const city = '';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

function App() {
  return (
    <>
      <LeftControl />
      <MainView />
      <RightControl />
    </>
  );
}

export default App;
