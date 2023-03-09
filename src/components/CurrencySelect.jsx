import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const CurrencySelect = ({ onChangefunct, currencies, value }) => {
  return (
    <Box sx={{ minWidth: '50%' }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Currency
        </InputLabel>
        <NativeSelect id={value} onChange={e => onChangefunct(e)} value={value}>
          {Object.values(currencies).map((cur, index) => {
            return (
              <option key={index} value={cur}>
                {cur}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default CurrencySelect;
