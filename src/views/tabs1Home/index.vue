<script setup lang='ts' name="tabs1Home">
import { nextTick, onMounted,  ref, watchEffect } from 'vue'
import useStore from "@/store/index";

import {onBeforeRouteLeave} from "vue-router";





const  {tabs1Home}  = useStore() 
                    

//使用组件内守卫，对离开页面事件做一些操作，
onBeforeRouteLeave((to) => {
            
            tabs1Home.changeShowpicturelist(false) 
            // showpicturelist.value = false
			// console.log('中铁15');
            
})

        
// 定义一个初始值 为false
let showpicturelist = ref(false)
// 在mounted钩子中拿数据
onMounted(()=>{
    // console.log('123');
    // 使用watch监听 pinia数值变化 最终控制v-show的变化
    setTimeout(() => {
    watchEffect(
        () =>{
            showpicturelist.value = tabs1Home.showpicturelist 
        }
    )  
    }, 300); 
})


// const asyncChooseBtn = () => {

//         showpicturelist.value = tabs1Home.showpicturelist 

// }

// watchEffect(
//     () =>{
//         asyncChooseBtn();
        
//     },{
//     flush:'post'  //在组件更新完成之后操作
            
//     }
// )


let dialogTableVisible = ref(false)

const headText  = ref('')
const contentPictrue = ref('')


// dialog弹框业务逻辑
const showDialog = (name:any , imgSrc:any) => {
    // 控制弹窗开启
    dialogTableVisible.value = true
    // 修改pinia中弹窗对应数据 (模型切换请求发送时,判断弹窗状态再发送请求)
    tabs1Home.changeDialogTableVisible(true)
    // 修改pinia 弹框列表数据 给对应让对应item 弹框属性变为true  
    const isActiveIndex =  tabs1Home.list.findIndex(item => item.name === name)
    if (isActiveIndex !== -1 ) {
        tabs1Home.list[isActiveIndex].isActive = true
    }
    headText.value = name
    contentPictrue.value = imgSrc
}

// 弹窗打开时业务逻辑
const open= ()=> {

}

// 弹窗关闭时,将视频关闭
const dialogClose = () => {
    contentPictrue.value = '@/assets/images/img/视频监控.jpg'
    tabs1Home.changeDialogTableVisible(false)
    tabs1Home.list.forEach(item=> item.isActive = false)
} 


</script>

<template>
    <div class="select">
      <div class="footer-list">
            <transition name="el-zoom-in-center">
                
                    <ul class="flex flex-align-center" v-show="showpicturelist">
                    
                        <li class="flex flex-align-center" 
                            v-for="(item, index) in tabs1Home.list" :key="index"                      
                            @click="showDialog(item.name ,item.imgSrc)">
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
            

            </transition>
            
  
        </div>
        <!-- dialog弹框 -->
        <!-- :append-to-body="true" -->
        <el-dialog 
        v-model="dialogTableVisible"
        :modal="false"        
        :close-on-click-modal="false"
        width="60%" 
        @open="open"
        @close="dialogClose"
        class="trans"
        align-center>
          <div class="ShowPhoto">
            <div class="headText">
                <span>{{headText}}</span>
            </div>
            <div class="contentPictrue">
           
                <!-- <video 
                v-if="headText === '基地介绍'" 
                :src="contentPictrue"                
                controls               
                height="520"
                ></video> -->
                <img :src="contentPictrue"  alt="">
            </div>
            <div class="footerText">
                <span>{{tabs1Home.companyName}}</span> 
            </div>
          </div>
        </el-dialog>
    </div>

</template>

<style lang="less" scoped>
// :deep(.el-overlay-dialog) {
//     pointer-events:none;
// }
:deep(.el-dialog__headerbtn) {
    z-index: 1;
}
:deep(.el-dialog) {
    background: rgba(0, 0, 0, 0) !important; //弹出层透明;
    background-image: linear-gradient(180deg,rgba(0, 0, 0, 0) , rgba(0, 0, 0,) 100% )!important;
    transform: translateY(-7%);
    // pointer-events:auto;
}

:deep(.el-dialog__body) {
    padding: 0 !important;
    // background-image: linear-gradient(180deg,rgba(0, 0, 0, 0) , rgba(0, 0, 0,) 100% );
}

.actived2 {
    background-color: #09f;
}

.footer-list {
    position: absolute;
    width: 100%;
    bottom: 120px;

    // transform: translateX(-50%);
    z-index: 3;
    
}

div.ShowPhoto {
  position: relative;
  background-image: url('@/assets/images/img/ar眼镜.png');
  background-size: cover;
  height: 645px;
  overflow: hidden;
}

.footer-list ul {
    flex-wrap: wrap;
    // margin-bottom: 30px;
    justify-content: center;
    margin-left: 500px;
    margin-right: 500px;
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
    background-color: #09f;
    -webkit-transform: translateY(1px);
    -moz-transform: translateY(1px);
}


.headText span{
    position: absolute;
    top: 3%;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    font-size: 30px;
    font-family: 'TTMeiHeiJ-2';
    letter-spacing: .1em;
    color: #ffffff;
}

.footerText span {
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    font-size: 20px;
    color: #ffffff;
}
.contentPictrue {
    margin-left: 45px;
    margin-top: 71px;
    width: 1060px;
    height: 520px;
    background-color: #000;
}
.contentPictrue img {
    width: 100%;
    height: 100%;
}

</style>