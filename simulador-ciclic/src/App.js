import React, { Fragment } from 'react';
import HeaderContainer from './components/header/Header'
import SimulatorForm from './components/simulator/Simulator';

import './App.css';


function App() {
  return (
    <Fragment>
      <HeaderContainer />
      <SimulatorForm />
    </Fragment>
  );
}

export default App;
