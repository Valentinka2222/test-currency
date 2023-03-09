import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getConvertCurrency } from '../app/state/actions/actionCreator';

const useCurrency = convertAmount => {
  const dispatch = useDispatch();
  const [isFromCurrency, setIsFromCurrency] = useState(true);
  const [convert, setConvert] = useState({
    basedCurrency: 'USD',
    convertCurrency: 'EUR',
  });
  const [amount, setAmount] = useState(1);
  const amounts = {
    toAmount: convertAmount,
    fromAmount: 1,
  };

  if (isFromCurrency) {
    amounts.fromAmount = amount;
    amounts.toAmount = convertAmount;
  } else {
    amounts.toAmount = amount;
    amounts.fromAmount = convertAmount;
  }

  useEffect(() => {
    if (convert.basedCurrency != null && convert.convertCurrency != null) {
      dispatch(
        getConvertCurrency({
          to: convert.convertCurrency,
          from: convert.basedCurrency,
          amount: amount,
        }),
      );
    }
  }, [dispatch, convert, amount]);

  const onChangeBasedCurrency = e => {
    setConvert(prevState => ({
      ...prevState,
      basedCurrency: e.target.value,
    }));
  };

  const onChangeConvertCurrency = e => {
    setConvert(prevState => ({
      ...prevState,
      convertCurrency: e.target.value,
    }));
  };

  const getFromAmount = e => {
    e.preventDefault();
    setIsFromCurrency(true);
    setAmount(Math.ceil(Number(e.target.value)));
  };

  const getToAmount = e => {
    e.preventDefault();
    setIsFromCurrency(false);
    setAmount(Math.ceil(Number(e.target.value)));
  };
  return {
    isFromCurrency,
    onChangeBasedCurrency,
    onChangeConvertCurrency,
    convert,
    amounts,
    getFromAmount,
    getToAmount,
  };
};

export default useCurrency;
