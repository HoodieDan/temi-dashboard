<template>
  <div id="chart-container">
    <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
    ></fusioncharts>
  </div>
</template>

<script>
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import { FCComponent } from "vue-fusioncharts";

// Resolves charts dependency
Charts(FusionCharts);

const dataSource = {
  chart: {
    numberSuffix: '%',
    decimals: "1",
    palettecolors: "#0B8CFB, #FFA22B",
    theme: "fusion"
  },
  data: [
    {
      label: "Sent",
      value: "60"
    },
    {
      label: "Delivered",
      value: "15"
    },
    {
      label: "Undelivered",
      value: "25"
    },
  ]
};

export default {
  components: {
    fusioncharts: FCComponent
  },
  data: () => ({
    type: "column3d",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  })
};

</script>

<style>
#fc-2 {
    height: 100%;
}
</style>