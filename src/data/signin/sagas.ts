import { takeEvery, call, put } from 'redux-saga/effects';
import { signinRequest, signinSuccess, signinFailure } from './reducers';
import { fetchSigninRequest } from './services';
import { SignInActionPayloadSuccess } from '@utilities/types';

// FR: Génèreur pour gérer l'action de demande de connexion.
// EN: Generator to handle the sign-in request action.
function* onSigninRequest(action: ReturnType<typeof signinRequest>): any {
  try {
    // FR: Appelle la fonction de service pour la connexion et attend la réponse.
    // EN: Call the sign-in service function and wait for the response.
    const response: SignInActionPayloadSuccess = yield call(fetchSigninRequest, action.payload);

    // FR: En cas de succès, dispatche l'action de succès de connexion avec la réponse.
    // EN: On success, dispatch the sign-in success action with the response.
    yield put(signinSuccess(response));
  } catch (error: any) {
    // FR: En cas d'erreur, dispatche l'action d'échec de connexion avec le message d'erreur.
    // EN: On error, dispatch the sign-in failure action with the error message.
    yield put(signinFailure(error.message ?? 'An unknown error occurred'));
  }
}

// FR: Saga pour écouter chaque action de demande de connexion et appeler le gestionnaire correspondant.
// EN: Saga to listen for each sign-in request action and call the corresponding handler.
export function* signinSaga() {
  yield takeEvery(signinRequest.type, onSigninRequest);
}
