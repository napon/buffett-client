import Vue from 'vue';

const STORAGE_KEY = 'saved_stocks';
const INITIAL_STATE = {
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

const getSavedStocks = () => JSON.parse(localStorage.getItem(STORAGE_KEY));
const addToLocalStorage = (symbol, payload) => {
  const savedData = getSavedStocks();
  savedData[symbol] = payload;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
};
const removeFromLocalStorage = (symbol) => {
  const savedData = getSavedStocks();
  delete savedData[symbol];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  resetState(state) {
    const savedData = getSavedStocks();
    if (!savedData) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_STATE));
      Vue.set(state, 'stocks', INITIAL_STATE);
    } else {
      Vue.set(state, 'stocks', savedData);
    }
  },
  dataLoaded(state, payload) {
    Object.keys(payload).forEach((symbol) => {
      Vue.set(state.stocks, symbol, payload[symbol]);
    });
  },
  addStock(state, payload) {
    const { symbol } = payload;
    if (!state.stocks[symbol]) {
      addToLocalStorage(symbol, payload);
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
};
