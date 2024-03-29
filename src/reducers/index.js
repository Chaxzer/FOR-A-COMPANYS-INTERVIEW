import { combineReducers } from 'redux';
import authReducer from './authReducer';
import transactionsReducer from './transactionsReducer';

export default combineReducers({
  auth: authReducer,
  transactions: transactionsReducer
});