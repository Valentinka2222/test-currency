import Input from '@mui/material/Input';
import Box from '@mui/material/Box';

const CurrencyInput = ({ getAmount, amount }) => (
  <Box sx={{ minWidth: '100%' }}>
    <Input sx={{ minWidth: '100%' }} value={amount} onChange={e => getAmount(e)} />
  </Box>
);
export default CurrencyInput;
