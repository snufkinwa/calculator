import React, { useState } from 'react';

//Uses API to make context object
export const NumberContext = React.createContext();

/*Declaring state variables*/
const NumberProvider = props => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');

  /*Sets the value according to the input, limits to 8 characters*/
  const handleSetDisplayValue = num => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) {
      setNumber(`${(number + num).replace(/^-+/, '')}`);
    }
  };

  /*Displays string and stores it to enter another number*/
  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  /*Resets to zero*/
  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
  };

  /*Delete previously entered button*/
  const handleBackButton = () => {
    if (number !== '') {
      const deletedNumber = number.slice(0, number.length - 1);
      setNumber(deletedNumber);
    }
  };

  /*Where you get the math function, conjunction with FunctionButton */
  const handleSetCalcFunction = type => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  /*Toggles between positive and negative numbers, in conjunction with NegativeButton*/
  const handleToggleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };

  /*Switch statement to complete four functions +,-,*,/ */
  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
          break;
        case '-':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '/':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '*':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`);
          break;
        default:
          break;
      }
      setNumber('');
    }
  };

  return (
    <NumberContext.Provider
      value={{
        doMath,
        functionType,
        handleBackButton,
        handleClearValue,
        handleSetCalcFunction,
        handleSetDisplayValue,
        handleSetStoredValue,
        handleToggleNegative,
        number,
        storedNumber,
        setNumber,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;