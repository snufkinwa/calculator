import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const BackButton = () => {
  const { handleBackButton } = useContext(NumberContext);
  return (
    <button type="button" className="btn" onClick={() => handleBackButton()}>
      bckspc
    </button>
  );
};

export default BackButton;