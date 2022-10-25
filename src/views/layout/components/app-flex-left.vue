<script setup lang='ts'>
import { useRoute } from "vue-router";
import useStore from "@/store/index";

import { ElMessage } from 'element-plus'
import { nextTick, ref } from "vue";

// 获取路由参数
const route = useRoute()

const  {tabs1Home}  = useStore() 
const  {tabs2SceneDisplay}  = useStore() 
const  {tabs3ProjectTracking}  = useStore() 
const  {tabs4Emulation}  = useStore() 
const  {appFlexLeft} = useStore()


const leftMiddelListVisible1 = ref(false)

nextTick(()=>{
    leftMiddelListVisible1.value =  tabs2SceneDisplay.leftMiddelListVisible1
})   
    



// 此处为左侧4个按钮  的业务逻辑 同样适用于右侧5个按钮
const mm = () => {
    // console.log('输出')
    // console.log(route.path.substring(1))
    const routePath = route.path.substring(1)



    if (routePath === tabs1Home.routePath   ) {
        if (tabs1Home.dialogTableVisible === true) {
            // 确认对应路由位置
            console.log('来自tabs1Home');
            const isActiveIndex =  tabs1Home.list.findIndex(item => item.isActive === true)
            if (isActiveIndex !== -1 ) {
                // 确认对应弹出框
                console.log(tabs1Home.list[isActiveIndex].name);
                // 后续可以对弹出框中数据进行操作
            }
        } else  {
            ElMessage({
                message: '请打开弹窗后进行场景模拟',
                type: 'warning',
            })
        }
    }
    if (routePath === tabs2SceneDisplay.routePath) {

        // 来自场景切换的业务
        if (tabs2SceneDisplay.dialogTableVisible === true) {
            // 确认对应路由位置
            console.log('来自tabs2SceneDisplay');
            // 筛选出所有的一级菜单
            const level1List = tabs2SceneDisplay.list1.filter(item => item.btnLevel === '1')
            const level2ListTree = tabs2SceneDisplay.list1.filter(item => item.btnLevel === '2')
            const level2List : Array<any> = []

            level2ListTree.forEach(
                (item) => {
                    item.list.forEach(item1 => level2List.push(item1))
                
            })

            
            console.log(level1List); // 获取了所有一级按钮的数据
            console.log(level2List); // 获取了所有二级按钮的数据
            



            // 筛选出所有的二级菜单
            // 一级菜单判断是否为 -1 
            // 二级菜单判断是否为 -1 

            const isActiveIndex1 =  level1List.findIndex(item => item.isActive === true)

            const isActiveIndex2 =  level2List.findIndex(item => item.isActive === true)
            
            if (isActiveIndex1 !== -1 ) {
                // 确认对应弹出框
                console.log(tabs2SceneDisplay.list1[isActiveIndex1].name);
                // 后续可以对弹出框中数据进行操作
            }
            if (isActiveIndex2 !== -1 ) {
                // 确认对应弹出框
                tabs2SceneDisplay.list1.forEach((item)=>{
                    const res =   item.list.findIndex(item1 => item1.isActive === true) 
                   if (res !== -1 ) {
                        console.log(item.list[res].title);
                        console.log(item.name);
                        
                   }   
                })
                
                // 后续可以对弹出框中数据进行操作
            }

        } else {
            ElMessage({
                message: '请打开弹窗后进行场景模拟',
                type: 'warning',
            })
        }        

    }
    if (routePath === tabs3ProjectTracking.routePath) {
        console.log('来自tabs3ProjectTracking');
    }
    if (routePath === tabs4Emulation.routePath) {
        console.log('来自tabs4Emulation');
    }

}

</script>

<template>
        <div class="fixed-left">
            <img src="@/assets/images/img/fixed-left-bg.png" alt="">

        <transition name="el-zoom-in-center">
            <div class="main-menu flex" v-show="tabs2SceneDisplay.leftMiddelListVisible1">
                <ul>
                    <li v-for="(item, index) in appFlexLeft.leftList.list" :key="index"
                    @click="">
                        <img class="leftLiImg" :src="item.image" height="40">
                        <!-- <div v-else class="flex flex-align-center">{{item.title}}</div> -->
                    </li>
                </ul>
            </div>
        </transition>


            <ul class="img1">
                <li @click="mm"><img src="@/assets/images/img/fixed-left-icon1.png" alt=""></li>
                <li ><img src="@/assets/images/img/fixed-left-icon2.png" alt=""></li>
                <li ><img src="@/assets/images/img/fixed-left-icon3.png" alt=""></li>
                <li ><img src="@/assets/images/img/fixed-left-icon4.png" alt=""></li>
            </ul>
        </div>
</template>

<style lang="less" scoped>
.fixed-left {
    position: absolute;
    left: 0;
    width: 130px;
    top: 50%;
    transform: translate(0%, -50%);
    z-index: 99999;
}

.fixed-left ul.img1 {
    position: absolute;
    left: 10px;
    top: 50px;
}

.fixed-left ul.img1 li {
    cursor: pointer;
    width: 45px;
    margin-top: 5px;
}

.fixed-left li:first-child {
    margin-top: 0;
}





.main-menu {
    display: flex;
    position: absolute;
    left: 140px;
    top: 50%;
    transform: translate(0%, -50%);
    margin-top: -13px;

    width: 160px;
    height: 425px;
    justify-content: center;
    align-items: center;
}





// .main-menu ul { 
//     width: 100%;
// }

// .main-menu ul li:first-child {
//     // margin-top: 20px;
// }

.main-menu ul li {
    margin-top: 15px;
    cursor: pointer;
    overflow: hidden;
    width: 160px;
    height: 40px;
    position: relative;
}

.main-menu ul li .flex {
    padding-left: 8px;
    padding-right: 8px;
    border: solid 4px #00cea3;
    box-sizing: border-box;
    background: #1d8f78;
    color: #ffffff;
    font-size: 18px;
    border-radius: 5px;
    height: 40px;
    white-space: nowrap
}


.main-menu ul li .leftLiImg {
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