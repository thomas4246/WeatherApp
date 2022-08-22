import React from 'react';
import Footer from './Footer';
import Units from './Units';
import Theme from './Theme';

export default function LeftControl({ units, setUnits }) {
  return (
    <>
      <div className='left-control'>
        <div className='container-fluid'>
          <div className='fixed-left'>
            <div className='logo'>
              <img
                src={require('../images/icons-weather.png')}
                alt='logo'
                id='logo-icon'
              />
              <h5>Weather Forecast</h5>
            </div>
          </div>
          {/* units */}

          <div className='unit text-center'>
            <h5> - Units - </h5>
            <Units units={units} setUnits={setUnits} />
          </div>

          <div className='theme text-center'>
            <h5> - Theme - </h5>
            <Theme />
          </div>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </>
  );
}
