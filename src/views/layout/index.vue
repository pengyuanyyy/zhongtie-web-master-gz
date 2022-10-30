<script setup lang="ts" name="layout">
import AppTopnavLeft from './components/app-topnav-left.vue';
import AppTopnavRight from './components/app-topnav-right.vue';
import AppFooterLeft from './components/app-footer-left.vue';
import AppFooterRight from './components/app-footer-right.vue';
import AppFlexLeft from './components/app-flex-left.vue';
import AppFlexRight from './components/app-flex-right.vue';
import { ref } from 'vue';

import useStore from "@/store/index";



const  {tabs1Home}  = useStore() 
const  {tabs2SceneDisplay}  = useStore() 
const  {tabs3ProjectTracking}  = useStore() 
const  {tabs4Emulation}  = useStore() 




const tieluList = ref([
    {id:1 ,name:'基地介绍',isShow:false,pathUrl:'/tabs1Home' },
    {id:2 ,name:'场景切换',isShow:false,pathUrl:'/tabs2SceneDisplay' },
    {id:3 ,name:'工程跟踪',isShow:false,pathUrl:'/tabs3ProjectTracking' },
    {id:4 ,name:'工序仿真',isShow:false,pathUrl:'/tabs4Emulation' },

])
const chooseBtn = (item1 : any) => {
    // 点击tabs 后 取反操作
    item1.isShow = !item1.isShow
    // 找到点击的那一项
    const showfooterlist  = tieluList.value.filter(item => item === item1)
    const showfooterlists = JSON.parse(JSON.stringify(showfooterlist))
    // 打印
    // console.log(showfooterlists[0].id)
    // 如果这一项的 id 等于对应路由的id 就将对应路由页面种pinia中的state的值改变
    if (showfooterlists[0].id === tabs1Home.showId) {
        // console.log(1);
        
        tabs1Home.changeShowpicturelist(showfooterlists[0].isShow)
    }
    if (showfooterlists[0].id === tabs2SceneDisplay.showId) {
        // console.log(2);
        
        tabs2SceneDisplay.changeShowpicturelist(showfooterlists[0].isShow)
    }
    if (showfooterlists[0].id === tabs3ProjectTracking.showId) {
        tabs3ProjectTracking.changeShowpicturelist(showfooterlists[0].isShow)
    }
    if (showfooterlists[0].id === tabs4Emulation.showId) {
        tabs4Emulation.changeShowpicturelist(showfooterlists[0].isShow)
    }

    // 取反后将其余的全改为 false
    tieluList.value.map(item => {
        if (item !== item1) {
            item.isShow = false
        } 
        
    })
    // 获取tieluList 里为true的那一项 
}



</script>

<template>
    <!-- 页面头部部分 -->
    <header class="flex">
        <AppTopnavLeft></AppTopnavLeft>
        <div class="content flex flex-justify-center flex-align-center jiuss_Bold">
            预制构件智造平台
        </div>
        <AppTopnavRight></AppTopnavRight>
    </header>    
        <AppFlexLeft></AppFlexLeft>
        <AppFlexRight></AppFlexRight>

    <!-- 路由出口 图标内容展示区 -->
    <div  class="app-body">   
        <!-- <keep-alive>      -->
            <router-view></router-view>  
        <!-- </keep-alive>    -->
    </div>
    <!-- 页面底部部分 -->
    <footer class="flex">
        <AppFooterLeft></AppFooterLeft>

        <div class="menu">
            <ul class="flex flex-align-center">
                <router-link :to="item.pathUrl" v-for="item in tieluList" :key="item.id">
                    <li 
                    class="flex flex-align-center flex-justify-center"                       
                    @click="chooseBtn(item)">
                        <img src="@/assets/images/img/footer-menu-icon-bg.png" alt="" v-if="!item.isShow">
                        <img src="@/assets/images/img/footer-menu-icon-bg-hover.png" alt="" v-else>
                        <div class="titlelist">
                            <span>{{item.name}}</span>
                            
                        </div>
                    </li>
                </router-link>

            </ul>
        </div>
        <AppFooterRight></AppFooterRight>
    </footer>   
</template>

<style lang="less" scoped>
    // .app-body {
    //     min-height: 600px;
    // }

@charset "utf-8";

[v-cloak] {
    display: none;
}

// #app {
//     position: absolute;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//     background-image: url("../img/app-bg.jpg");
//     background-size: 100% 100%;
//     background-color: #213073;
//     overflow: hidden;
// }

header {
    justify-content: space-between;
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



header .left .content p:first-child {
    margin-top: 0;
}

header .content {
    margin-left: 30px;
    margin-right: 30px;
    flex: 1;
    background-image: url("@/assets/images/img/header-bg.png");
    background-size: 100%;
    height: 100px;
    background-repeat: no-repeat;
    background-position: top;
    font-size: 40px;
    color: #ffffff;
}

header .right {
    width: 290px;
    position: relative;
}

header .right .mode {
    position: absolute;
    width: 130px;
    top: 27px;
    left: 70px;
}

header .right .mode p {
    position: absolute;
    color: #ffffff;
    font-size: 12px;
}

header .right .mode p.text1 {
    left: 18px;
    top: 20px;
}

header .right .mode p.text2 {
    right: 25px;
    top: 20px;
}

header .right .mode p.text3 {
    left: 30px;
    bottom: -5px;
}

footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: space-between;
    align-items: flex-end;
}




footer .contact {
    width: 500px;
    flex: 0 0 430px
}

footer .menu {
    display: flex;
    background-image: url("@/assets/images/img/footer-menu-bg.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 100px;
    flex: 0 0 572px;
    padding-left: 122px;
    padding-right: 110px;
}

footer .menu ul {
    justify-content: space-between;
    margin-top: 5px;
    width: 100%;
}

footer .menu li {
    position: relative;
    // background-image: url("@/assets/images/img/footer-menu-icon-bg.png");
    background-size: 100%;
    background-repeat: no-repeat;
    width: 105px;
    height: 90px;
    justify-content: space-between;
    cursor: pointer;
}

// footer .menu li:hover {
//     background-image: url("@/assets/images/img/footer-menu-icon-bg-hover.png");
//     background-size: 100%;
//     background-repeat: no-repeat;
//     width: 105px;
//     height: 90px;
//     cursor: pointer;
// }
footer .menu li:hover>img {
    content: url(@/assets/images/img/footer-menu-icon-bg-hover.png);
}
footer .menu li .titlelist {
    position: absolute;
    top: 8px;
    left: 18px;
    // transform: translate(-100% -50%);
    width: 60px;
    
}

footer .menu li span {
    display: block;
    font-size: 12px;
    color: #ffffff;
    margin-top: 11px;
    width: 30px;
    padding-left: 21.5px;
}


/* .main-menu {
    margin-left: 150px;
    margin-right: 580px;
    justify-content: space-between;
    margin-top: 55px;
} */




.footer-list {
    position: absolute;
    width: 780px;
    bottom: 105px;
    left: 50%;
    z-index: 3;
    margin-left: -390px;
}

.footer-list ul {
    flex-wrap: wrap;
    margin-bottom: 30px;
    justify-content: center;
}

.footer-list ul li {
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #1180cf;
    border-radius: 30px;
    border: solid 2px #ffffff;
    box-sizing: border-box;
    height: 40px;
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 140px;
}

.footer-list ul li p {
    text-align: center;
    width: 100%;
}

.footer-list ul li:before,
.main-menu ul li:before,
.fixed-right-list ul li::before {
    position: absolute;
    top: 0;
    left: 30px;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    content: '';
    -webkit-transition: -webkit-transform 0.6s;
    transition: transform 0.6s;
    -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, -100%, 0);
    transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, -100%, 0);
    z-index: 9;
}

.footer-list ul li:hover:before,
.main-menu ul li:hover:before,
.fixed-right-list ul li:hover:before {
    left: -30px;
    -webkit-transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, 100%, 0);
    transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 45deg) translate3d(0, 100%, 0);
}

.footer-list ul li:active,
.main-menu ul li:active,
.fixed-right-list ul li:active {
    -webkit-transform: translateY(1px);
    -moz-transform: translateY(1px);
}

.tianqi {
    display: flex;
    color: #fff;
    font-size: 12px;
    position: absolute;
    top: 5px;
    left: 120px;
}

.tianqi img {
    width: 30px;
    height: 30px;
}

@media screen and (max-width:1660px) {
    html {
        zoom: .9;
    }
}

@media screen and (max-width:1496px) {
    html {
        zoom: .8;
    }
}


// @charset "utf-8";

// @font-face {
//     font-family: "jiuss title";
//     font-weight: 700;
//     src: url("../font/9sTj_T-bNbZ1xn6pcss9B.woff2") format("woff2"),
//         url("../font/9sTj_T-bNbZ1xn6pcss9B.woff") format("woff");
//     font-display: swap;
// }

// @font-face {
//     font-family: "jiuss number";
//     font-weight: 700;
//     src: url("../font/gvEPRT0jhHCd6oDtv977D.woff2") format("woff2"),
//         url("../font/gvEPRT0jhHCd6oDtv977D.woff") format("woff");
//     font-display: swap;
// }

// @font-face {
//     font-family: "TTMeiHeiJ-2";
//     src: url("../font/TTMeiHeiJ-2.ttf");
//     font-display: swap;
// }

.jiuss_Bold {
    font-family: 'TTMeiHeiJ-2';
    letter-spacing: .1em
}

.jiuss_Number {
    font-family: 'jiuss number';
    font-size: 18px !important;
    letter-spacing: .4em
}

html {
    height: 100%;
}

* {
    margin: 0px;
    padding: 0px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
}

img {
    width: 100%;
    vertical-align: bottom;
    display: block;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
}

input,
textarea,
select {
    vertical-align: middle;
    color: #666;
    outline: none;
    font-family: '微软雅黑';
    border: none;
    resize: none;
    background-color: transparent;
}

button {
    outline: none;
    cursor: pointer;
}

select {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: none;
}

li {
    list-style-type: none;
}

a {
    text-decoration: none;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.clearfix:after {
    content: "";
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
}

.clearfix {
    zoom: 1;
}

.disnone {
    display: none;
}

.flex {
    display: flex;
}

.flex-align-center {
    align-items: center;
}

.flex-justify-center {
    justify-content: center;
}



</style>