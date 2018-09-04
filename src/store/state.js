const initialState = {
  TSLA: {
    symbol: 'TSLA',
  },
  MSFT: {
    symbol: 'MSFT',
  },
  AAPL: {
    symbol: 'AAPL',
  },
};

export default {
  stocks: JSON.parse(localStorage.getItem('buffet.stocks')) || initialState,
  settings: {},
};
