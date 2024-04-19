import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
  ErrorType,
  SignInActionPayloadRequest,
  SignInActionPayloadSuccess, 
  SignInInitialStateType,
} from '@utilities/types';
import { SLICES_NAMES } from '../slicesNames';

// FR: Définit l'état initial pour le slice d'authentification de l'utilisateur.
// EN: Define the initial state for the user authentication slice.
const initialState: SignInInitialStateType = {
  userData: null, 
  signinError: null, 
};

// FR: Crée un slice pour la gestion de l'authentification utilisateur.
// EN: Create a slice for user authentication management.
const userSlice = createSlice({
  // FR: Nom du slice. 
  // EN: Name of the slice.
  name: SLICES_NAMES.sign_in, 
  // FR: État initial du slice. 
  // EN: Initial state of the slice.
  initialState, 
  reducers: {
    // FR: Gère l'action de demande de connexion.
    // EN: Handles the sign-in request action.
    signinRequest: (state, action: PayloadAction<SignInActionPayloadRequest>) => {
      state.signinError = null; 
    },
    // FR: Gère l'action de succès de connexion.
    // EN: Handles the sign-in success action.
    signinSuccess: (state, action: PayloadAction<SignInActionPayloadSuccess>) => {
      state.userData = action.payload;
      state.signinError = null; 
    },
    // FR: Gère l'action d'échec de connexion.
    // EN: Handles the sign-in failure action.
    signinFailure: (state, action: PayloadAction<ErrorType>) => {
      state.userData = null; 
      state.signinError = action.payload;
    },
    logOut: (state)=> {
      state.userData = null; 
    }
  },
});

export const { 
  signinRequest, 
  signinSuccess, 
  signinFailure,
  logOut,
} = userSlice.actions;

export default userSlice.reducer;
