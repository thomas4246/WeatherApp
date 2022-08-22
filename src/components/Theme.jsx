import React from 'react';
import { UilMoon, UilSun } from '@iconscout/react-unicons';

export default function Theme() {
  const bodyClass = document.body.classList;

  function darkMode() {
    bodyClass.add('dark-theme');
    localStorage.setItem('dark-mode', 'enabled');
  }

  function lightMode() {
    if (bodyClass.contains('dark-theme')) {
      bodyClass.remove('dark-theme');
      localStorage.setItem('dark-mode', 'disabled');
    }
  }

  if (localStorage.getItem('dark-mode') !== 'enabled') {
    lightMode();
  } else {
    darkMode();
  }

  return (
    <>
      <UilMoon onClick={darkMode} className='moon' />
      <UilSun onClick={lightMode} className='sun' />
    </>
  );
}
