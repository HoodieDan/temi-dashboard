import { createApp } from 'vue';
import App from './App.vue';
import VueFusionCharts from 'vue-fusioncharts';

// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

import './assets/main.css'

const app = createApp(App)

app.use(VueFusionCharts, FusionCharts, Charts);
app.mount('#app')
