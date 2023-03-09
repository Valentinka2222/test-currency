export const params = paramsObj => {
  return new URLSearchParams({
    apikey: `${process.env.REACT_APP_API_KEY}`,
    ...paramsObj,
  });
};
