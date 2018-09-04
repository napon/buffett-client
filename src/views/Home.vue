<template>
  <div>
    <v-container fluid grid-list-md >
      <v-layout row wrap>
        <v-flex lg3 md4 sm6 xs12 v-for="stock in stocks" :key="stock.symbol">
          <DashboardCard :stock="stock" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DashboardCard from '../components/DashboardCard.vue';

export default {
  components: {
    DashboardCard,
  },
  name: 'home',
  computed: mapState({
    stocks: state => state.stocks,
  }),
};
</script>

<style scoped>
img {
  margin-top: 5vh;
}
</style>
