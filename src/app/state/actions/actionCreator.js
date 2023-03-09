import axios from 'axios';
import { ActionTypes } from '../../../data/actionTypes';
import { params } from '../../../utils/params';

export const getConvertCurrency = options => {
  return async dispatch => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}convert?${params(options)}`);
      const convertAmount = response.data.result;
      dispatch({ type: ActionTypes.FETCH_CONVERT_CURRENCY, payload: convertAmount });
    } catch (error) {
      dispatch({ type: ActionTypes.FETCH_ERROR, payload: error.message });
    }
  };
};

export const getLatestCurrency = () => {
  return async dispatch => {
    dispatch({ type: ActionTypes.FETCH_LATEST_CURRENCY });
    try {
      const responseForUsd = await axios.get(
        `${process.env.REACT_APP_URL}latest?${params({
          base: 'USD',
        })}`,
      );
      const responseforEur = await axios.get(
        `${process.env.REACT_APP_URL}latest?${params({
          base: 'EUR',
        })}`,
      );
      dispatch({
        type: ActionTypes.FETCH_LATEST_CURRENCY_SUCCESS,
        payload: {
          baseUsd: responseForUsd.data.rates['UAH'],
          baseEur: responseforEur.data.rates['UAH'],
        },
      });
    } catch (error) {
      dispatch({ type: ActionTypes.FETCH_LATEST_CURRENCY_ERROR, payload: error.message });
    }
  };
};
