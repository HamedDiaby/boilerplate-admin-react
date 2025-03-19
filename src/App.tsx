import React from 'react';
import './App.css';
import { Navigations } from '@navigations';
import { AppContextProvider } from '@data/contexts';

function App() {
  return (
    <AppContextProvider>
      <Navigations />
    </AppContextProvider>
  );
}

export default App;
