import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { store, persistor } from '@data/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );

    // Utilisez screen.getByTestId pour interroger votre composant
    expect(screen.getByTestId('navigations')).toBeInTheDocument();
  });
});
