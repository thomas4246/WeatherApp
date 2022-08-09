import React from 'react';
import { UilMoon, UilSun } from '@iconscout/react-unicons';
import Footer from './Footer';

export default function LeftControl({ units, setUnits }) {
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  function nightMode() {
    document.body.classList.add('dark-theme');
  }

  function lightMode() {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
    }
  }

  return (
    <>
      <div className='left-control'>
        <div className='container-fluid'>
          <div className='fixed-left'>
            <div className='logo'>
              <img src={require('../images/icons-weather.png')} alt='logo' />
              <h5>Weather Forecast</h5>
            </div>
          </div>
          {/* units */}

          <div className='unit text-center'>
            <h5> - Units - </h5>

            <div>
              <button
                name='metric'
                className='units'
                onClick={handleUnitsChange}
              >
                °C
              </button>

              <button
                name='imperial'
                className='units'
                onClick={handleUnitsChange}
              >
                °F
              </button>
            </div>
          </div>

          <div className='theme text-center'>
            <h5> - Theme - </h5>
            <UilMoon onClick={nightMode} className='moon' />
            <UilSun onClick={lightMode} className='sun' />
          </div>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}
