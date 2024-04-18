// FR: Importe la fonction `all` de `redux-saga` pour exécuter simultanément plusieurs sagas.
// EN: Import the `all` function from `redux-saga` to run multiple sagas simultaneously.
import { all } from 'redux-saga/effects';
import { signinSaga } from './signin/sagas';

// FR: Déclare la saga racine qui regroupe toutes les sagas de l'application.
// EN: Declare the root saga that combines all sagas of the application.
export default function* rootSaga() {
  // FR: Utilise `yield all` pour démarrer toutes les sagas listées en parallèle.
  // EN: Use `yield all` to start all listed sagas in parallel.
  yield all([
    signinSaga(),
  ]);
}

