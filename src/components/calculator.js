import React from 'react';
import Screen from './Screen';
import Keypad from './keypad';


const Calculator = () => (
  <div className="calculator">
    <Screen />
    <Keypad />
  </div>
);

export default Calculator;