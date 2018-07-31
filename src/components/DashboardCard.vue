<template>
  <v-card>
    <v-container fluid lg4 ref="card">
      <v-layout row>
        <v-flex xs8>
          <v-card-title primary-title>
            <div class="headline">{{ symbol }}</div>
            <p class="investment-type">{{ type }}</p>
          </v-card-title>
        </v-flex>
        <v-flex xs4>
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
            <router-link :to="{ name: 'info',
              params: {
                symbol,
                x,
                y,
                width,
                height
              }}">
              <v-btn flat color="orange">Explore</v-btn>
            </router-link>
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
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  },
  mounted() {
    const rect = this.$refs.card.getBoundingClientRect();
    this.x = rect.left;
    this.y = rect.top;
    this.width = rect.right - rect.left;
    this.height = rect.bottom - rect.top;
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
