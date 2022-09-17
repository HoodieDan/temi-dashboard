<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-lg-2 col-1 men">
            <SideMenu />
        </div>
        <div class="col-lg-10 col-11">
            <div class="container">
                <div class="row mt-5">
                    <!-- first row -->
                    <div class="col-lg-4 col-md-4">
                        <div class="search">
                            <i class="fa-solid fa-magnifying-glass icon"></i>
                            <input type="text" class="input field" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-0">

                    </div>
                    <div class="col-lg-4 col-md-4 top-right">
                        <button class="btn"><i class="fa fa-solid fa-plus"></i> Search</button>
                        <i class="faw fa-regular fa-comment-dots"></i>
                        <i class="faw fa-regular fa-bell"></i>
                        <img src="./assets/images/user.png" alt="user image" class="user">
                    </div>

                    <!-- Second row -->
                    <div class="col-lg-3 mt-3">
                        <div class="box">
                            <div class="box-left">
                                <p class="small">Total Sales</p>
                                <h5 class="blue">$11,002,395</h5>
                                <div class="bt">
                                    <img src="./assets/images/up.png" alt="up" class="img-fluid up">
                                    <p class="tiny">40% last week</p>
                                </div>
                            </div>
                            <div class="box-right">
                                <img src="./assets/images/money.png" alt="money" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-3">
                        <div class="box">
                            <div class="box-left">
                                <p class="small">B2B Sales</p>
                                <h5 class="blue">$9,035,004</h5>
                                <div class="bt">
                                    <img src="./assets/images/up.png" alt="up" class="img-fluid up">
                                    <p class="tiny">12% last week</p>
                                </div>
                            </div>
                            <div class="box-right">
                                <img src="./assets/images/bags.png" alt="money" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-3">
                        <div class="box">
                            <div class="box-left">
                                <p class="small">Online Sales</p>
                                <h5 class="blue">$1,843,900</h5>
                                <div class="bt">
                                    <img src="./assets/images/up.png" alt="up" class="img-fluid up">
                                    <p class="tiny">2% last week</p>
                                </div>
                            </div>
                            <div class="box-right">
                                <img src="./assets/images/cart.png" alt="money" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 mt-3">
                        <div class="box">
                            <div class="box-left">
                                <p class="small">Store Sales</p>
                                <h5 class="blue">$105,654</h5>
                                <div class="bt">
                                    <img src="./assets/images/up.png" alt="up" class="img-fluid up">
                                    <p class="tiny">5% last week</p>
                                </div>
                            </div>
                            <div class="box-right">
                                <img src="./assets/images/list.png" alt="money" class="img-fluid">
                            </div>
                        </div>
                    </div>

                    <!-- Third row  -->
                    <div class="col-lg-8 mt-3">
                        <div class="chart-box">
                            <div class="chart-box-top row">
                                <div class="col-lg-6">
                                    <div class="rev">
                                        <h5 class="revenue me-1">Revenue</h5>
                                        <p class="rev-p">This Year</p>
                                    </div>
                                    <div class="rev">
                                        <h6 class="yellow me-1">$653,000,340</h6>
                                        <p class="rev-under-p">All Time</p>
                                    </div>
                                </div>
                                <div class="col-lg-6">
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

                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import LineChart from "./components/LineChart.vue";
import DonutChart from "./components/DonutChart.vue";
import SideMenu from "./components/Menu.vue";

export default {
    data() {
        return {

        }
    },
    components: {
    LineChart,
    DonutChart,
    SideMenu
}
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  position: relative;
}
.container-fluid {
    padding-left: 0;
}
.menu {
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(45px);
    color: #999999;
    font-weight: 300;
    padding: 4rem 1rem;
}
.nav-group {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.fa {
    margin-right: 0.5rem;
}
.link {
    display: flex;
    justify-content: flex-start;
    border-radius: 32px;
    margin: 0.5rem auto;
    cursor: pointer;
}
.link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
}
.active {
    color: #1A1A1A !important;
    background-color: #FFFFFF !important;
}
.navi {
    margin: 0.9rem auto;
    font-size: 0.8rem;
}
.search i {
    position: absolute;
}  
.search {
    width: 100%;
    margin-bottom: 0.6rem;
} 
.icon {
    padding: 10px;
    min-width: 2.3rem;
    z-index: 10;
    color: #999999;
}   
.input-field {
    width: 100%;
    padding: 10px;
    text-align: center;
}
input[type='text'] {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(45px);
    color: #999999;
    border: none;
    border-radius: 32px;
    height: 2.4rem;
    padding-left: 2rem;
    cursor: pointer;
}
input[type='text']::focus {
    outline: 1px solid #999999;
}
.top-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btn {
    background: #0B8CFB;
    backdrop-filter: blur(45px);
    color: #FFFFFF;
    font-size: smaller;
    border-radius: 10px;
}
.btn:hover {
    background: #037ee7;
    color: #FFFFFF;
}
.faw {
    color: #FFFFFF;
    cursor: pointer;
}
.user {
    cursor: pointer;
}
.box {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(45px);
    color: #999999;
    margin: 0.2rem;
    padding: 1rem 1.5rem;
    height: 7rem;
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s ease-out;
    cursor: pointer;
}
.box:hover {
    transform: scale(1.1);
}
.bt {
    display: flex;
    align-items: flex-start;
    position: relative;
}
.up {
    margin-right: 0.5rem;
    position: relative;
    top: 0.2rem;
}
.small {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #FFFFFF;
}
.blue {
    color: #0B8CFB;
}
.yellow {
    color: #FFA22B;
}
.tiny {
    font-size: 0.6rem;
}
.chart-box {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(45px);
    color: #999999;
    margin: 0.5rem 0.2rem;
    padding: 2rem;
    border-radius: 10px;
}
.revenue {
    font-weight: 600;
    color: #FFFFFF;
}
.rev {
    display: flex;
}
.rev-p {
    font-size: 0.8rem;
    margin-bottom: 0.65rem;
    align-self: flex-end;
}
.rev-under-p {
    font-size: 0.8rem;
    margin-bottom: 0.65rem;
    align-self: flex-end;
    font-weight: 600;
}
.revex {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}
.yellow-dot {
    height: 9px;
    width: 9px;
    background-color: #FFA22B;
    border-radius: 50%;
    position: relative;
    top: 0.5rem;
    margin-right: 1.5rem;
}
.blue-dot {
    height: 9px;
    width: 9px;
    background-color: #0B8CFB;
    border-radius: 50%;
    position: relative;
    margin-right: 1.5rem;
    top: 0.5rem;
}
.rv {
    display: flex;
    position: relative;
}
.line-chart {
    height: 15rem;
}
.chart-box-2 {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(45px);
    color: #999999;
    margin: 0.5rem 0.2rem;
    padding: 2rem;
    border-radius: 10px;
}
</style>
