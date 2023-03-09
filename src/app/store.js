import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import convertCurrencyReducer from '../app/state/reducers/convertCurrencyReducer';
import latestCurrencyReducer from './state/reducers/latestCurrencyReducer';

const rootReducer = combineReducers({
  convertCurrencyAmount: convertCurrencyReducer,
  latestCurrency: latestCurrencyReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
