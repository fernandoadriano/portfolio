import { createContext } from 'react';

export default createContext({
  values: [],
  status: [],
  isInvalid: true,
  onChange: () => {},
  setFormaPagto: () => {},
  handleCick: () => {},
});
