import React from 'react';
import { Route } from 'react-router';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    </>
  );
}

export default App;
