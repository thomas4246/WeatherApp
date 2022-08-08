import React from 'react';
import sstore from '../script';

export default function LeftControl({ setQuery, units, setUnits }) {
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  return (
    <>
      <div className='left-control'>
        <div className='container-fluid'>
          <div className='fixed-left'>
            <div className='logo'>
              <img src={require('../images/icons-weather.png')} alt='logo' />
              <h5>The Weather App</h5>
            </div>
          </div>
          <div className='unit'>
            {/* units */}

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

            <div className='theme'>
              <h5> - Theme - </h5>
              <div className='form-check form-switch'>
                <label
                  className='form-check-label'
                  htmlFor='flexSwitchCheckDefault'
                >
                  Dark Theme
                </label>
                <input
                  className='form-check-input'
                  type='checkbox'
                  role='switch'
                  id='flexSwitchCheckDefault'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
