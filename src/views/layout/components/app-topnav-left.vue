<script setup lang='ts'>
import useStore from "@/store/index";


const  {layout}  = useStore() 
layout.getHomeHotList()

setInterval(() => {
    layout.getHomeHotList()
}, 600000);



</script>

<template>
        <div class="left">
            <img src="@/assets/images/img/header-left-bg.png" alt="">
            <div class="tianqi">
                <img :src="layout.weatherList.weatherimg" v-if="layout.weatherList.weatherimg">
                <img src="@/assets/images/img/5天气.png" v-else="">
                <div class="divMiddle">
                    <div style="text-align: left" class="divMiddleTop" v-if="layout.weatherList.city" >{{layout.weatherList.city}}</div>
                    <div style="text-align: left" class="divMiddleTop" v-else >广州</div>
                    <div v-if="layout.weatherList.temp">{{layout.weatherList.temp}}度</div>
                    <div v-else>28度</div>
                </div>
                <div v-if="layout.weatherList.weather" class="divRight">{{layout.weatherList.weather}}</div>
                <div v-else class="divRight">多云</div>
            </div>
            <div class="content flex" v-if="layout.weatherList.temp">
                <p>PM2.5 : {{layout.weatherList.temp}}ug/m3</p>
                <p>湿度 : {{layout.weatherList.humidity}}</p>
                <p>能见度 : {{layout.weatherList.wisib}}</p>
                <p>风力 : {{layout.weatherList.wd}}{{layout.weatherList.wdspd}}</p>
            </div>
            <div class="content flex" v-else>
                <p>PM2.5 : 28ug/m3</p>
                <p>湿度 : 47%</p>
                <p>能见度 : 18km</p>
                <p>风力 : 北风0km/h</p>
            </div>
        </div>
</template>

<style lang="less" scoped>
header .left .content p {
    margin-top: 5px;
    background: url(@/assets/images/img/2.png) no-repeat left center;
    padding-left: 10px;
    text-align: left;
}

.left {
    width: 290px;
    position: relative;
}
.tianqi img {
    width: 30px;
    height: 30px;
}


img {
    width: 100%;
    vertical-align: bottom;
    display: block;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
}

.tianqi {
    display: flex;
    color: #fff;
    font-size: 12px;
    position: absolute;
    top: 5px;
    left: 120px;
}

header .left .content {
    position: absolute;
    flex-direction: column;
    right: 50px;
    top: 40px;
    color: #ffffff;
    font-size: 12px;
    border-top: solid 2px #0094df;
    box-sizing: border-box;
}

header .content {
    margin-left: 30px;
    margin-right: 30px;
    flex: 1;
    // background-image: url('@/assets/images/img/header-bg.png');
    background-size: 100%;
    height: 100px;
    background-repeat: no-repeat;
    background-position: top;
    font-size: 30px;
    color: #ffffff;
}

header .left .content p:first-child {
    margin-top: 0;
}

.divMiddle {
    margin-left: 10px;
}

.divMiddle  .divMiddleTop {
    text-align: center  !important ; 
}

.divRight {
    margin-left: 10px;
}



</style>