<template>
  <v-card>
    <v-container fluid v-if="isLoading">
      <v-layout align-center justify-center>
        <v-progress-circular
          indeterminate
          color="pink"
        ></v-progress-circular>
      </v-layout>
    </v-container>
    <v-container fluid lg4 ref="card" v-if="!isLoading">
      <v-layout row>
        <v-flex xs6>
          <v-card-title primary-title>
            <div class="headline">{{ symbol }}</div>
            <p class="investment-type">{{ type }}</p>
          </v-card-title>
        </v-flex>
        <v-flex xs6>
          <v-card-title primary-title class="unit-info-box">
            <div class="headline text-xs-right">{{ price }}
              <p class="currency">{{ currency }}</p>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          <line-graph :chart-data="chartData" :price="price" class="chart-content" />
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          <v-card-actions>
            <router-link :to="{ name: 'info',
              params: {
                symbol,
              }}">
              <v-btn flat color="red lighten-2">Explore</v-btn>
            </router-link>
            <v-btn flat color="red lighten-2" @click="removeStock">Remove</v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import axios from 'axios';
import LineGraph from './LineGraph.vue';

const LOOKUP_API = process.env.VUE_APP_SERVER + 'lookup/';

export default {
  name: 'DashboardCard',
  props: {
    stock: {
      type: Object,
    },
  },
  components: {
    LineGraph,
  },
  mounted() {
    axios.get(LOOKUP_API + this.symbol).then((response) => {
      this.$store.commit('dataLoaded', response.data);
      this.isLoading = false;
    });
  },
  data() {
    return {
      symbol: this.stock.symbol,
      type: 'STO',
      currency: 'USD',
      isLoading: true,
    };
  },
  computed: {
    price() {
      const stock = this.$store.state.stocks[this.symbol];
      return (stock && stock.price) || 0.0;
    },
    data() {
      const stock = this.$store.state.stocks[this.symbol];
      return (stock && stock.data) || [];
    },
    chartData() {
      const stock = this.$store.state.stocks[this.symbol];
      const data = (stock && stock.data) || [];
      const labels = [];
      const prices = [];
      data.forEach((d) => {
        labels.push(d.date);
        prices.push(d.close); // use closing price of that day
      });
      return {
        labels,
        datasets: [{
          data: prices,
          backgroundColor: '#f87979',
        }],
      };
    },
  },
  methods: {
    removeStock() {
      this.$store.commit('removeStock', { symbol: this.symbol });
    },
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

.currency {
  font-size: 14px;
}

.unit-info-box {
  display: flow-root;
}
</style>
