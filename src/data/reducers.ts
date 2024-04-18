import { combineReducers } from '@reduxjs/toolkit';
import signinReducer from './signin/reducers';

// FR: Combine plusieurs réducteurs pour créer un réducteur racine unique.
// EN: Combine multiple reducers to create a single root reducer
const rootReducer = combineReducers({
  signin: signinReducer,
});

export default rootReducer;