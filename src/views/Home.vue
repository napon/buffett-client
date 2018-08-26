<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex lg3 md4 sm6 xs12 v-for="stock in stocks" :key="stock.symbol">
        <DashboardCard :stock="stock" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import DashboardCard from '../components/DashboardCard.vue';

const LOOKUP_API = 'http://localhost:3000/lookup/';
const initialData = ['TSLA', 'MSFT', 'AAPL'];

export default {
  components: {
    DashboardCard,
  },
  name: 'home',
  data() {
    return {
      stocks: [],
    };
  },
  mounted() {
    const stocks = initialData.join(',');
    axios.get(LOOKUP_API + stocks).then((response) => {
      this.stocks = response.data;
    });
  },
};
</script>

<style scoped>
img {
  margin-top: 5vh;
}
</style>
