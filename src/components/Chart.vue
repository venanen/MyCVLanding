<script>
import { PolarArea } from 'vue-chartjs'

export default {
  extends: PolarArea,
  props: ['chartdata', 'options'],
  mounted () {
    this.renderChart(this.chartdata, this.options)
    this.$nextTick(()=>{
      this.$data._chart.update();
    })
  }
}
</script>

<style>
</style>