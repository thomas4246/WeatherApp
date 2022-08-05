import React from 'react';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import MainView from './components/MainView';

// import configData from './config.json';
// const mykey = configData.key;

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
