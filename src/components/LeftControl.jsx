import React from 'react';

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
            <fieldset>
              <h5>Units</h5>

              <div>
                <div>
                  <input
                    type='radio'
                    id='metric'
                    name='unit'
                    value='metric'
                    defaultChecked
                    onClick={handleUnitsChange}
                  />
                  <label htmlFor='metric'>Metric</label>
                </div>

                <div>
                  <input
                    type='radio'
                    id='imperial'
                    name='unit'
                    value='imperial'
                    onClick={handleUnitsChange}
                  />

                  <label htmlFor='imperial'>Imperial</label>
                </div>
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
