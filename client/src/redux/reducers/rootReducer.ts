import { combineReducers } from 'redux';
import { transactionReducer } from './transactionReducer';
import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  todo: transactionReducer,
  ui: uiReducer,
  auth: authReducer
});
