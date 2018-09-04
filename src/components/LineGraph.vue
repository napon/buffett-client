<script>
import { Line, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
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
