import Vue from 'vue';

/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  dataLoaded(state, payload) {
    Object.keys(payload).forEach((symbol) => {
      Vue.set(state.stocks, symbol, payload[symbol]);
    });
  },
  addStock(state, payload) {
    const { symbol } = payload;
    if (!state.stocks[symbol]) {
      Vue.set(state.stocks, symbol, { symbol });
    }
  },
  removeStock(state, payload) {
    const { symbol } = payload;
    if (state.stocks[symbol]) {
      Vue.delete(state.stocks, symbol);
    }
  },
};
