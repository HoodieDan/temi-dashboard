<template>
  <div class="row mt-5">
    <!-- first row -->
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="search">
            <i class="fa-solid fa-magnifying-glass icon"></i>
            <input type="text" class="input field" />
        </div>
    </div>
    <div class="col-lg-4 col-md-2 col-0">

    </div>
    <div class="col-lg-4 col-md-6 col-sm-6 top-right">
        <button class="btn"><i class="fa fa-solid fa-plus"></i> Search</button>
        <i class="faw fa-regular fa-comment-dots"></i>
        <i class="faw fa-regular fa-bell"></i>
        <img src="../assets/images/user.png" alt="user image" class="user">
    </div>

    <!-- Second row -->
    <div class="col-lg-3 col-md-6 mt-3">
        <div class="box">
            <div class="box-left">
                <p class="small">Total Sales</p>
                <h5 class="blue">$11,002,395</h5>
                <div class="bt">
                    <img src="../assets/images/up.png" alt="up" class="img-fluid up">
                    <p class="tiny">40% last week</p>
                </div>
            </div>
            <div class="box-right">
                <img src="../assets/images/money.png" alt="money" class="img-fluid">
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 mt-3">
        <div class="box">
            <div class="box-left">
                <p class="small">B2B Sales</p>
                <h5 class="blue">$9,035,004</h5>
                <div class="bt">
                    <img src="../assets/images/up.png" alt="up" class="img-fluid up">
                    <p class="tiny">12% last week</p>
                </div>
            </div>
            <div class="box-right">
                <img src="../assets/images/bags.png" alt="money" class="img-fluid">
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 mt-3">
        <div class="box">
            <div class="box-left">
                <p class="small">Online Sales</p>
                <h5 class="blue">$1,843,900</h5>
                <div class="bt">
                    <img src="../assets/images/up.png" alt="up" class="img-fluid up">
                    <p class="tiny">2% last week</p>
                </div>
            </div>
            <div class="box-right">
                <img src="../assets/images/cart.png" alt="money" class="img-fluid">
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 mt-3">
        <div class="box">
            <div class="box-left">
                <p class="small">Store Sales</p>
                <h5 class="blue">$105,654</h5>
                <div class="bt">
                    <img src="../assets/images/up.png" alt="up" class="img-fluid up">
                    <p class="tiny">5% last week</p>
                </div>
            </div>
            <div class="box-right">
                <img src="../assets/images/list.png" alt="money" class="img-fluid">
            </div>
        </div>
    </div>

    <!-- Third row  -->
    <div class="col-lg-8 mt-3">
        <div class="chart-box">
            <div class="chart-box-top row">
                <div class="col-lg-7">
                    <div class="rev">
                        <h5 class="revenue me-1">Revenue</h5>
                        <p class="rev-p">This Year</p>
                    </div>
                    <div class="rev">
                        <h6 class="yellow me-1">$653,000,340</h6>
                        <p class="rev-under-p">All Time</p>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="revex">
                        <div class="rv">
                            <div class="yellow-dot"></div>
                            <p>Revenue</p>
                        </div>
                        <div class="rv">
                            <div class="blue-dot"></div>
                            <p>Expense</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-100 line-chart">
                <LineChart />
            </div>
        </div>
    </div>

    <div class="col-lg-4 mt-3">
        <div class="chart-box-2">
            <div class="rev mb-4">
                <h5 class="revenue me-1">Products Sent</h5>
                <p class="rev-p">This Month</p>
            </div>
            <div class="w-100 donut-chart">
                <DonutChart />
            </div>
        </div>
    </div>

    <!-- Fourth row -->
    <div class="col-lg-8 mt-4">
        <div class="chart-box">
            <div class="chart-box-top row">
                <div class="col-lg-8">
                    <div class="rev">
                        <h5 class="revenue me-1">Total number of customers</h5>
                        <p class="rev-p">This Year</p>
                    </div>
                    <div class="rev">
                        <h6 class="yellow me-1">3,000,340</h6>
                        <p class="rev-under-p">All Time</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="revex">
                        <div class="rv">
                            <div class="yellow-dot"></div>
                            <p>Online</p>
                        </div>
                        <div class="rv">
                            <div class="blue-dot"></div>
                            <p>Physical</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-100 bar-chart">
                <BarChart />
            </div>
        </div>
    </div>

    <div class="col-lg-4 mt-4 halves">
        <div class="half-chart-box">
            <div class="rev">
                <h5 class="revenue me-1">Target</h5>
                <p class="rev-p">This Month</p>
            </div>
            <div class="percent">
                <h4>64% <span class="completed">completed</span></h4>
                <div class="bar-container">
                    <div class="bar" style="width: 64%;">
                    </div>
                </div>
            </div>
        </div>
        <div class="half-chart-box">
            <div class="rev">
                <h5 class="revenue me-1">Target</h5>
                <p class="rev-p">This Year</p>
            </div>
            <div class="percent">
                <h4>76% <span class="completed">completed</span></h4>
                <div class="bar-container">
                    <div class="bar" style="width: 76%;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import LineChart from './LineChart.vue';
import DonutChart from './DonutChart.vue';
import BarChart from './BarChart.vue';
export default {
    components: { LineChart, DonutChart, BarChart }
}
</script>

<style>

</style>