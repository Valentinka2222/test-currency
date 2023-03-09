import { ActionTypes } from '../../../data/actionTypes';

const initialState = {
  convertAmount: 0,
  error: null,
};

const convertCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CONVERT_CURRENCY:
      return {
        ...state,
        isLoading: false,
        convertAmount: action.payload,
      };
    case ActionTypes.FETCH_CONVERT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default convertCurrencyReducer;
