import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export default function Card() {
  return (
    <>
      <div className='row align-items-center'>
        <div className='col-6 mx-auto '>
          <div className='card shadow border top-card'>
            {/* Location & temperture */}
            <div className='card-body d-flex flex-column '>
              <div className='row'>
                <p>New York, US</p>
                <div className='col-10'>
                  <p className='card-text temp'>26°C</p>
                </div>
                <div className='col-2 weather-icon'>
                  <i className='wi wi-day-sunny'></i>
                </div>
              </div>
            </div>
          </div>

          {/* other info */}

          <div className='col mx-auto '>
            <div className='card shadow border mid-card'>
              <div className='card-body d-flex flex-column '>
                <div className='row'>
                  <div className='col-10'>
                    <h2 className='card-text'>Clear</h2>
                    <p>Clear Sky</p>
                  </div>
                  <div className='col'>
                    <p>Feels Like</p>
                    <h2>26°C</h2>
                  </div>
                </div>
                <br />
                <div className='row'>
                  <div className='col humidity'>
                    <i class='wi wi-raindrop'></i>
                    <p>Humidity</p>
                  </div>
                  <div className='col wind'>
                    <i class='wi wi-strong-wind'></i>
                    <p>Wind</p>
                  </div>
                </div>
                <div className='row text-center'>
                  <div className='col'>
                    <h2>36%</h2>
                    <ProgressBar
                      now={50}
                      style={{
                        height: '5px',
                        width: '250px',
                        margin: 'auto',
                      }}
                    />
                  </div>
                  <div className='col'>
                    <h2>3.6 m/s</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
