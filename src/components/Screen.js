import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const Screen = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <div className="screen">
    <div className="resultScreen">
      <h2 className={storedNumber && storedNumber.length > 12 ? 'long-main-display' : undefined}>
        {!number.length && !storedNumber ? '0' : number || storedNumber}
      </h2></div>
      <div className ="computationScreen">
      <p className={storedNumber && storedNumber.length > 12 ? 'long-stored-display' : undefined}>
        {!storedNumber ? 'LETS CALCULATE' : `${storedNumber} ${functionType} ${number}`}
      </p>
    </div>
    </div>
  );
};

export default Screen;