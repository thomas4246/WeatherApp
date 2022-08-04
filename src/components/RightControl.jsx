import React from 'react';

export default function RightControl() {
  return (
    <>
      <div className='right-control position-fixed'>
        {/* Update */}
        <div className='date'>
          <p style={{ fontSize: '10px' }}>Last updated</p>
          <p>16:00</p>
          <h4>Friday</h4>
          <h1>5</h1>
          <h4>
            <b>Aug</b> 2022
          </h4>
        </div>
        {/* Location */}
        <div className='container'>
          <div className='title'>
            <img src={require('../images/place.png')} alt='' height={20} />
            <h5>Location</h5>
            <button>*</button>

            {/* Location form */}
            <div className='location'>
              <form action=''>
                <label>Seattle</label> {/* Location  */}
                <input
                  type='text'
                  name='lacation'
                  placeholder='Add location'
                  id='location-input'
                />
                <button type='submit'>+</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
