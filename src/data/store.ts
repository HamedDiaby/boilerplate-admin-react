import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { 
    persistStore, 
    persistReducer, 
    FLUSH, 
    REHYDRATE, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

// FR: Crée le middleware Saga pour intégrer les sagas à Redux.
// EN: Create the Saga middleware to integrate sagas with Redux.
const sagaMiddleware = createSagaMiddleware();

// FR: Configuration pour Redux Persist pour persister et réhydrater un store Redux.
// EN: Configuration for Redux Persist to persist and rehydrate a Redux store.
const persistConfig = {
  // FR: Clé pour stocker l'état persisté. 
  // EN: Key to store the persisted state.
  key: 'root', 
  // FR: Méthode de stockage pour l'état persisté. 
  // EN: Storage method for the persisted state.
  storage, 
};

// FR: Applique Redux Persist au réducteur racine.
// EN: Apply Redux Persist to the root reducer.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// FR: Configure le store Redux en utilisant le réducteur persisté et ajoute le middleware Saga.
// EN: Configure the Redux store using the persisted reducer and add the Saga middleware.
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

// FR: Démarre la saga racine.
// EN: Start the root saga.
sagaMiddleware.run(rootSaga);

// FR: Crée le persistor pour le store Redux, permettant la persistance de l'état.
// EN: Create the persistor for the Redux store, enabling state persistence.
const persistor = persistStore(store);

// FR: Exporte les types pour le dispatch et l'état du store.
// EN: Export types for the store's dispatch and state.
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export {
  store,
  persistor, 
};

