import React from 'react';

export default function Units({ units, setUnits }) {
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  return (
    <>
      <div>
        <button name='metric' className='units' onClick={handleUnitsChange}>
          °C
        </button>

        <button name='imperial' className='units' onClick={handleUnitsChange}>
          °F
        </button>
      </div>
    </>
  );
}
