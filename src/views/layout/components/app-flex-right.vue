<script setup lang='ts'>
import { ref } from 'vue';
import tip0 from '@/assets/images/img/list/7/安全用电监测.png';
import tip1 from '@/assets/images/img/list/7/能耗物联监测.png';
import tip2 from '@/assets/images/img/list/7/气象环境监测.png';
import tip3 from '@/assets/images/img/list/7/起重设备监测.png';
import tip4 from '@/assets/images/img/list/7/堆场喷淋监测.png' ;
import tip5 from '@/assets/images/img/list/7/工业设备资产.png' ;
import tip6 from '@/assets/images/img/list/7/视频AI行为监测.png';
import tip7 from '@/assets/images/img/list/7/视频监控调阅.png';




const fixed = ref(
    {
        show: false,
        list: [
            // { title: '安全用电监测',   image:'@/assets/images/img/list/7/安全用电监测.png' },
            { title: '安全用电监测',   image:tip0 },
            { title: '能耗物联监测',   image:tip1 },
            { title: '气象环境监测',   image:tip2 },
            { title: '起重设备监测',   image:tip3 },
            { title: '堆场喷淋监测',   image:tip4 },
            { title: '工业设备资产',   image:tip5 },
            { title: '视频AI行为监测', image:tip6 },
            { title: '视频监控调阅',   image:tip7 }  
        ]
    },
)




const showRightMiddelListBtn = () => {
    fixed.value.show= !fixed.value.show
}

</script>

<template>
        <div class="fixed-right">
            <img src="@/assets/images/img/fixed-right-bg.png" alt="" >
            <div class="rightMiddelBtn" @click="showRightMiddelListBtn"></div>


            <transition name="el-zoom-in-center">
                <div class="fixed-right-list" v-show="fixed.show">
                    <ul>
                        <li v-for="(item, index) in fixed.list" :key="index">
                            <img class="rightLiImg" :src="item.image" height="40">
                            <!-- <div v-else class="flex flex-align-center">{{item.title}}</div> -->
                        </li>
                    </ul>
                </div>
            </transition>


            <ul>
                <li ><img src="@/assets/images/img/fixed-right-bg-r1.png" alt=""></li>
                <li ><img src="@/assets/images/img/fixed-right-bg-r2.png" alt=""></li>
                <li ><img src="@/assets/images/img/fixed-right-bg-r3.png" alt=""></li>
                <li ><img src="@/assets/images/img/fixed-right-bg-r4.png" alt=""></li>
                <li ><img src="@/assets/images/img/fixed-right-bg-r5.png" alt=""></li>
            </ul>
        </div>
</template>

<style lang="less" scoped>


.fixed-right {
    position: absolute;
    right: 0;
    width: 130px;
    top: 50%;
    transform: translate(0%, -50%);
    z-index: 99999;
}

.fixed-right ul {
    position: absolute;
    right: 12px;
    top: 50px;
}

.fixed-right li {
    cursor: pointer;
    width: 35px;
    margin-top: 5px;
}

.fixed-right li:first-child {
    margin-top: 0;
}

.rightMiddelBtn {
    cursor: pointer;
    position: absolute;
    top: 43px;
    left: 30px;
    width: 40px;
    height: 200px;
    
}

.fixed-right-list {
    position: absolute;

    top: 50%;
    transform: translate(0%, -50%);
    right: 140px;
    margin-top: -40px;
    width: 100%;
    height: 100%;
}

.fixed-right-list ul{
    position: absolute;
    left: -20px;
    top: 0;
}

.fixed-right-list ul li {
    margin-top: 15px;
    cursor: pointer;
    overflow: hidden;
    width: 160px;
    height: 40px;
    position: relative;
}

.fixed-right-list ul li .flex {
    padding-left: 8px;
    padding-right: 26px;
    height: 40px;
    border: solid 4px #00cea3;
    box-sizing: border-box;
    background: #1d8f78;
    color: #ffffff;
    font-size: 18px;
    border-radius: 5px;
}

.fixed-right-list ul li:first-child {
    margin-top: 0;
}

.fixed-right-list ul li .rightLiImg {
    width: 160px;
    height: 40px;
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


</style>