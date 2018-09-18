import Vue from 'vue';

const STORAGE_KEY = 'saved_stocks';

const getInitialState = () => ({
  TSLA: {
    symbol: 'TSLA',
  },
  MSFT: {
    symbol: 'MSFT',
  },
  AAPL: {
    symbol: 'AAPL',
  },
});

const getSavedStocks = () => JSON.parse(localStorage.getItem(STORAGE_KEY));
const addToLocalStorage = (symbol) => {
  const savedData = getSavedStocks();
  savedData[symbol] = { symbol };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
};
const removeFromLocalStorage = (symbol) => {
  const savedData = getSavedStocks();
  delete savedData[symbol];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  resetState(state, userSession) {
    localStorage.removeItem(STORAGE_KEY);
    const savedData = getSavedStocks();
    if (!savedData) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(getInitialState()));
      Vue.set(state, 'stocks', getInitialState());
    } else {
      Vue.set(state, 'stocks', savedData);
    }
    Vue.set(state, 'userSession', userSession);
  },
  dataLoaded(state, payload) {
    Object.keys(payload).forEach((symbol) => {
      Vue.set(state.stocks, symbol, payload[symbol]);
    });
  },
  addStock(state, payload) {
    const { symbol } = payload;
    if (!state.stocks[symbol]) {
      addToLocalStorage(symbol);
      Vue.set(state.stocks, symbol, payload);
    }
  },
  removeStock(state, payload) {
    const { symbol } = payload;
    if (state.stocks[symbol]) {
      removeFromLocalStorage(symbol);
      Vue.delete(state.stocks, symbol);
    }
  },
  setUserSession(state, payload) {
    Vue.set(state, 'userSession', payload);
  },
};
