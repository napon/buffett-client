<template>
  <v-card>
    <v-container fluid lg4>
      <v-layout row>
        <v-flex xs8>
          <v-card-title primary-title>
            <div class="headline">{{ symbol }}</div>
            <p class="investment-type">{{ type }}</p>
          </v-card-title>
        </v-flex>
        <v-flex xs2>
          <v-card-title primary-title>
            <div class="headline">{{ price }}</div>
            <p>{{ currency }}</p>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
        <line-graph :chart-data="data" class="chart-content" />
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          <v-card-actions>
            <v-btn flat color="orange">Explore</v-btn>
            <v-btn flat color="orange">Remove</v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import LineGraph from './LineGraph.vue';

export default {
  name: 'DashboardCard',
  props: {
    symbol: {
      type: String,
      default: 'TSLA',
    },
    type: {
      type: String,
      default: 'STO',
    },
    price: {
      type: Number,
      default: 217.17,
    },
    currency: {
      type: String,
      default: 'USD',
    },
  },
  components: {
    LineGraph,
  },
  data() {
    return {
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            data: [40, 20, 30, 42, 16, 29],
            backgroundColor: '#f87979',
          },
        ],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.investment-type {
  color: #e91e63;
  margin-left: 5px;
}

.chart-content {
  margin: 10px;
}
</style>
