<template>
  <div>
  <v-btn
    icon
    v-on:click="onSearchClick"
    v-if="!searchMode"
  >
    <v-icon>search</v-icon>
  </v-btn>
  <v-autocomplete
    v-if="searchMode"
    v-on:blur="onSearchFocusLeave"
    class="searchBox"
    label="Search"
    light
    solo
    hide-no-data
    hide-selected
    item-text="symbol"
    item-value="name"
    :loading="isLoading"
    :search-input.sync="onSearchValueEnter"
    :items="searchResults"
    :autofocus="true"
    :return-object="true"
    :menu-props={closeOnClick:true,closeOnContentClick:true}
  >
    <template
      slot="item"
      slot-scope="{ item }"
    >
      <v-list-tile-content class="searchResultsBox" @click="onSymbolAdd(item.symbol)">
        <v-list-tile-title v-text="item.symbol"></v-list-tile-title>
        <v-list-tile-sub-title v-text="item.name"></v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action @click="onSymbolAdd(item.symbol)">
        <v-icon>add</v-icon>
      </v-list-tile-action>
    </template>
    <template
      slot="selection"
      slot-scope="{ item }"
    >
    </template>
  </v-autocomplete>
  </div>
</template>

<script>
import axios from 'axios';

const SEARCH_API = 'http://localhost:3000/search/';

export default {
  data() {
    return {
      searchMode: false,
      isLoading: false,
      searchResults: [],
      onSearchValueEnter: null,
    };
  },
  methods: {
    onSearchClick() {
      this.searchMode = true;
    },
    onSearchFocusLeave() {
      this.searchMode = false;
    },
    onSymbolAdd(symbol) {
      this.searchMode = false;
      this.$store.commit('addStock', { symbol });
    },
  },
  watch: {
    onSearchValueEnter(val) {
      if (!val || val === '') {
        return;
      }
      this.isLoading = true;
      axios.get(SEARCH_API + val).then((res) => {
        this.searchResults = res.data;
      }).catch(() => {
        // TODO
      }).finally(() => {
        this.isLoading = false;
      });
    },
  },
};
</script>

<style scoped>
.searchBox {
  max-width: 300px;
  max-height: 50px;
}
.searchResultsBox {
  max-width: 400px;
}
</style>
