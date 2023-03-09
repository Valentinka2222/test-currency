import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Alert, Box } from '@mui/material';

import CurrencySelect from './CurrencySelect';
import CurrencyInput from './Currencyinput';
import useCurrency from '../hooks/useCurrency';
import { currencies } from '../data/currencies';
import { getLatestCurrency } from '../app/state/actions/actionCreator';
import { convertCurrencySelector, latestCurrencySelector } from '../app/state/selectors/index';

const App = () => {
  const dispatch = useDispatch();
  const { convertAmount, error } = useSelector(convertCurrencySelector);
  const { rates, isLoad, err } = useSelector(latestCurrencySelector);
  const {
    onChangeBasedCurrency,
    onChangeConvertCurrency,
    convert,
    amounts,
    getFromAmount,
    getToAmount,
  } = useCurrency(convertAmount);

  useEffect(() => {
    dispatch(getLatestCurrency());
  }, [dispatch]);

  if ((error, err)) {
    return (
      <Alert variant="filled" severity="error">
        {error}
      </Alert>
    );
  }

  return (
    <div className="App">
      <h1>Сurrency Converter </h1>
      <header>
        <h4>Convert Ukrainian Hryvnia(UAH)</h4>
        {!isLoad ? (
          <div className="board">
            <span>{`1 USD = ${rates.baseUsd} UAH`}</span>
            <span>{`1 EURO = ${rates.baseEur} UAH`}</span>
          </div>
        ) : (
          <div className="board">
            <LinearProgress color="secondary" />
          </div>
        )}
      </header>
      <div className="container">
        <div className="currency">
          <Box>
            <CurrencyInput
              amount={amounts.fromAmount}
              getAmount={getFromAmount}
              convertAmount={convertAmount}
            />
            <CurrencySelect
              value={convert.basedCurrency}
              onChangefunct={onChangeBasedCurrency}
              currencies={currencies}
            />
          </Box>
          <Box>
            <CurrencyInput
              amount={amounts.toAmount}
              getAmount={getToAmount}
              convertAmount={convertAmount}
            />
            <CurrencySelect
              onChangefunct={onChangeConvertCurrency}
              value={convert.convertCurrency}
              currencies={currencies}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default App;
