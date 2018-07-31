<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: {
    chartData: {
      type: Object,
      required: false,
    },
    height: {
      default: 180,
    },
  },
  components: {
    Line,
  },
  data() {
    return {
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: 'white',
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: 'white',
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>

<style scoped>
</style>
