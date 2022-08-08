import React, { useState } from 'react';

export default function Units() {
  return (
    <>
      <div>
        <input
          type='radio'
          id='metric'
          name='unit'
          value='metric'
          defaultChecked
        />
        <label htmlFor='metric'>Metric</label>
      </div>

      <div>
        <input type='radio' id='imperial' name='unit' value='imperial' />

        <label htmlFor='imperial'>Imperial</label>
      </div>
    </>
  );
}
