<template>
  <div class="container-fluid">
    <div class="row main">
        <div class="col-lg-2 col-1">
            <SideMenu />
        </div>
        <div class="col-lg-10 col-11">
            <div class="container">
                <RouteView />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "./components/Menu.vue";
import RouteView from "./components/RouteView.vue";

export default {
    data() {
        return {

        }
    },
    components: {
    SideMenu,
    RouteView
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
.main {
    position: relative;
}
.menu {
    height: 100vh;
    width: 16.67%;
    position: fixed;
    left: 0;
    top: 0;
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
    /* margin-bottom: 0.6rem; */
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
    transform: scale(1.05);
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
    height: 100%;
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
    height: 100%;
    border-radius: 10px;
}
.halves {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.half-chart-box {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(45px);
    color: #999999;
    margin: 0.5rem 0.2rem;
    padding: 2rem;
    height: 45%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
h4 {
    color: #FFFFFF;
    font-weight: 600;
}
h4 span {
    font-size: 0.8rem;
    color: #999999;
}
.bar-container {
    width: 100%;
    background-color: #999999;
    height: 0.3rem;
    border-radius: 32px;
    position: relative;
}
.bar {
    background-color: #FFA22B;
    height: 100%;
    border-radius: 32px;
    position: absolute;
}
@media (max-width: 992px) {
    .menu {
        width: 8.33%;
    }
    .navi span {
        display: none;
    }
    .link {
        justify-content: center;
        align-items: center;
    }
    .fa {
        margin-right: 0;
    }
}
@media (max-width: 768px) {
    .menu {
        padding: 4rem 0;
    }
    .active {
        border-radius: 0;
    }
    .search {
    /* width: 100%; */
    margin-bottom: 0.6rem;
    } 
    .input {
        width: 100%;
    }
}
</style>
