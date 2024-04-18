import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@data/store';
import { Navigations } from '@navigation';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';

// FR: Composant fonctionnel App qui sert de composant racine de l'application.
// EN: App functional component that serves as the root component of the application.

// FR: Fournit le store Redux à l'ensemble de l'application.
// EN: Provides the Redux store to the whole application.

// FR: PersistGate retarde le rendu de l'application jusqu'à ce que l'état persisté soit récupéré et réhydraté.
// EN: PersistGate delays the rendering of the app until the persisted state is retrieved and rehydrated.

// FR: Intègre le système de navigation de l'application.
// EN: Integrates the application's navigation system.

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigations />
      </PersistGate>
    </Provider>
  );
}

// FR: Exporte le composant App pour être utilisé dans l'index.js principal.
// EN: Exports the App component to be used in the main index.js.
export default App;
