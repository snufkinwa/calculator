import React from 'react';
import Calculator from './components/calculator';
import NumberProvider from './components/NumberProvider';
import './components/styles/styles.css';
import flowerfairy from './flower fairy.gif';

const App = () => (
  <div className ="app">
  <img src={flowerfairy} alt="Moomin and Snorkmaiden Love" />
  <NumberProvider>
    <Calculator />
  </NumberProvider>
  </div>
);

export default App;