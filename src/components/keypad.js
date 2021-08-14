import React from 'react';
import KeypadRow from './keypadrow';
import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';
import ClearButton from './ClearButton';
import EqualButton from './EqualButton';
import BackButton from './BackButton';
import NegativeButton from './NegativeButton';


const Keypad = () => (
    <section className="keypad">
      <KeypadRow>
        <ClearButton />
        <BackButton />
        <NegativeButton />
        <FunctionButton buttonValue="/" />
      </KeypadRow>
      
      <KeypadRow>
      <NumberButton buttonValue={7} />
      <NumberButton buttonValue={8} />
      <NumberButton buttonValue={9} />
      <FunctionButton buttonValue="*" />
      </KeypadRow>
      
      <KeypadRow>
      <NumberButton buttonValue={4} />
      <NumberButton buttonValue={5} />
      <NumberButton buttonValue={6} />
      <FunctionButton buttonValue="-" />
      </KeypadRow>
      
      <KeypadRow>
      <NumberButton buttonValue={1} />
      <NumberButton buttonValue={2} />
      <NumberButton buttonValue={3} />
      <FunctionButton buttonValue="+" />
      </KeypadRow>
      
      <KeypadRow>
        <NumberButton buttonValue={0} />
        <NumberButton buttonValue="." />
        <EqualButton />
      </KeypadRow>
    </section>
  );

  export default Keypad;