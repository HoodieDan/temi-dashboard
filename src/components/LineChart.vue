<template>
  <div id="chart-container">
    <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataformat="dataFormat"
        :dataSource="dataSource"
    >
    </fusioncharts>
  </div>
</template>

<script>
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import { FCComponent } from "vue-fusioncharts";

// Resolves charts dependency
Charts(FusionCharts);

const dataSource = {
  'styleDefinition': {
    'transparent': {
        'background-color': 'transparent',
    }
  },
  chart: {
    numdivlines: "5",
    showvalues: "0",
    legenditemfontsize: "20",
    legenditemfontbold: "5",
    palettecolors: "#0B8CFB, #FFA22B",
    plottooltext: "<b>$dataValue</b>% of revenue on $label",
    theme: "candy"
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
        }
      ]
    }
  ],
  dataset: [
    {
      data: [
        {
          value: "0"
        },
        {
          value: "40"
        },
        {
          value: "76"
        },
        {
          value: "74"
        },
        {
          value: "86"
        },
        {
          value: "10"
        },
        {
          value: "24"
        },
        {
          value: "0"
        }
      ]
    },
    {
      data: [
        {
          value: "0"
        },
        {
          value: "36"
        },
        {
          value: "22"
        },
        {
          value: "60"
        },
        {
          value: "82"
        },
        {
          value: "18"
        },
        {
          value: "31"
        },
        {
          value: "0"
        }
      ]
    }
  ]
};

export default {
  components: {
    fusioncharts: FCComponent,
  },
  data: () => ({
    type: "msspline",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  })
};
</script>

<style>
#chart-container {
    height: 15rem;
}
#fc-1 {
    height: 100%;
}
rect {
    fill: none;
}
#raphael-paper-4, #raphael-paper-138, .raphael-group-25-canvas {
    background-color: transparent !important;
}
</style>