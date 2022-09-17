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
    plottooltext: "<b>$dataValue</b> $seriesName customers in $label",
    palettecolors: "#0B8CFB, #FFA22B",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "Jan"
        },
        {
          label: "Feb"
        },
        {
          label: "Mar"
        },
        {
          label: "Apr"
        },
        {
          label: "May"
        },
        {
          label: "Jun"
        },
        {
          label: "Jul"
        },
        {
          label: "Aug"
        },
      ]
    }
  ],
  dataset: [
    {
      data: [
        {
          value: "25000"
        },
        {
          value: "18000"
        },
        {
          value: "17000"
        },
        {
          value: "15000"
        },
        {
          value: "75000"
        },
        {
          value: "18000"
        },
        {
          value: "17000"
        },
        {
          value: "15000"
        },
      ]
    },
    {
      data: [
        {
          value: "50000"
        },
        {
          value: "80000"
        },
        {
          value: "60000"
        },
        {
          value: "30000"
        },
        {
          value: "20000"
        },
        {
          value: "30000"
        },
        {
          value: "30000"
        },
        {
          value: "40000"
        },
      ]
    }
  ],
};

export default {
  components: {
    fusioncharts: FCComponent
  },
  data: () => ({
    type: "msbar3d",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  })
};

</script>

<style>
#fc-3 {
    height: 100%;
}
</style>