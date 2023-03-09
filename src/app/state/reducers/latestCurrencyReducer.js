import { ActionTypes } from '../../../data/actionTypes';

const initialState = {
  rates: {},
  isLoad: false,
  err: null,
};

const latestCurrencyReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.FETCH_LATEST_CURRENCY:
      return {
        ...state,
        isLoad: true,
        err: null,
      };
    case ActionTypes.FETCH_LATEST_CURRENCY_SUCCESS:
      return {
        ...state,
        isLoad: false,
        rates: action.payload,
      };
    case ActionTypes.FETCH_LATEST_CURRENCY_ERROR:
      return {
        ...state,
        isLoad: false,
        err: action.payload,
      };
    default:
      return state;
  }
};
export default latestCurrencyReducer;
