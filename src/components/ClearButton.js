import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button className="btn" onClick={() => handleClearValue()}>
      C
    </button>
  );
};

export default ClearButton;