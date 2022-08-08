import React from 'react';
import Units from './Units';

export default function LeftControl() {
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
            <fieldset>
              <h5>Units</h5>

              <div>
                <Units />
              </div>
            </fieldset>
            <div className='theme'>
              <h5>Theme</h5>
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
