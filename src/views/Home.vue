<template>
  <v-slide-y-transition mode="out-in">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex lg3 md4 sm6 xs12>
          <DashboardCard symbol="TSLA" />
        </v-flex>
        <v-flex lg3 md4 sm6 xs12>
          <DashboardCard symbol="VFV" type="ETF" :price="65.81" currency="CAD" />
        </v-flex>
        <v-flex lg3 md4 sm6 xs12>
          <DashboardCard symbol="AMZN" :price="1626.1" />
        </v-flex>
        <v-flex lg3 md4 sm6 xs12>
          <DashboardCard symbol="FB" :price="175.48" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-slide-y-transition>
</template>

<script>
import DashboardCard from '../components/DashboardCard.vue';

export default {
  components: {
    DashboardCard,
  },
  name: 'home',
};
</script>

<style scoped>
img {
  margin-top: 5vh;
}
</style>
