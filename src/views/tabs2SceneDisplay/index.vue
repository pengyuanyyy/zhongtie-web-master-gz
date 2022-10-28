<script setup lang='ts' >
import { onMounted,  ref, watchEffect ,nextTick} from 'vue'
import useStore from "@/store/index";

import {onBeforeRouteLeave} from "vue-router";
import pic01 from "@/assets/images/img/视频监控.jpg";
import { init1 ,init2,init3,init4} from "@/utils/echartsDom/tabs2SceneDisplayEchartsDom";

const main = ref() // 使用ref创建虚拟DOM引用，使用时用main.value





const  {tabs2SceneDisplay}  = useStore() 
const  {appFlexLeft}  = useStore() 
                    




//使用组件内守卫，对离开页面事件做一些操作，
onBeforeRouteLeave((to) => {
            tabs2SceneDisplay.changeShowpicturelist(false) 
            tabs2SceneDisplay.changeDialogTableVisible(false) 
            // appFlexLeft.getleftList([])
            
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
            showpicturelist.value = tabs2SceneDisplay.showpicturelist 
            dialogTableVisible.value = tabs2SceneDisplay.dialogTableVisible 
        }
    )  
    }, 300); 
})


// const asyncChooseBtn = () => {

//         showpicturelist.value = tabs2SceneDisplay.showpicturelist 

// }

// watchEffect(
//     () =>{
//         asyncChooseBtn();
        
//     },{
//     flush:'post'  //在组件更新完成之后操作
            
//     }
// )
 


// 控制弹窗显示与隐藏
const dialogTableVisible = ref(false)

// 控制表头信息
const headText  = ref('')

// 控制 当显示图片时 显示的图片
const contentPictrue = ref('')

// 这个值 用于控制确认是几级按钮
const identification :any  = ref('')

// dialog弹框业务逻辑
const showDialog = (name:any , imgSrc:any) => {
    // 场景切换业务涉及到二级按钮 切换打开  需要进行调整
    // 数组中写入 1级按钮 以及2级按钮 


    // 1)筛选数组name 当是一级按钮时 进行常规弹窗操作
    const itemcheck:any = tabs2SceneDisplay.list1.filter(item => {
       return  item.name === name
    })

    // console.log(itemcheck[0].btnLevel);
    if (itemcheck[0].btnLevel === '1') {
        // 控制弹窗开启
        dialogTableVisible.value = true
        // 点击时应把 LeftMiddlelist 隐藏 所以直接全部设置为false  如此可以避免不必要的逻辑判断 不显示即不用进行操作
        tabs2SceneDisplay.list1.forEach(item => item.leftMiddelListVisible = false)
        // 修改pinia中弹窗对应数据 (模型切换请求发送时,判断弹窗状态再发送请求)
        tabs2SceneDisplay.changeDialogTableVisible(true)
        // 修改pinia 弹框列表数据 给对应让对应item 弹框属性变为true  
        const isActiveIndex =  tabs2SceneDisplay.list1.findIndex(item => item.name === name)
        if (isActiveIndex !== -1 ) {
            tabs2SceneDisplay.list1[isActiveIndex].isActive = true
            identification.value = tabs2SceneDisplay.list1[isActiveIndex].identification
            // 检验 数组对应项的标识号 如果标识号为3 则渲染dom
            if (identification.value === '3') {


                //4.在组件挂载的生命周期中获取到DOM节点
                nextTick(async ()=>{
                    // 根据echartsDomName 判定传入的echarts信息数据
                    if (tabs2SceneDisplay.list1[isActiveIndex].echartsDomName === 'init1') {
                        init1(main,tabs2SceneDisplay.echartsDomList)
                    }
                    if (tabs2SceneDisplay.list1[isActiveIndex].echartsDomName === 'init2') {
                        init2(main,tabs2SceneDisplay.echartsDomList)
                    }                    
                    if (tabs2SceneDisplay.list1[isActiveIndex].echartsDomName === 'init3') {
                        
                        init3(main,tabs2SceneDisplay.echartsDomList)
                    }                    
                    if (tabs2SceneDisplay.list1[isActiveIndex].echartsDomName === 'init4') {
                        // 执行获取接口命令 // 获取水温 PH值
                        await tabs2SceneDisplay.getechartsDomListByWater()
                        init4(main,tabs2SceneDisplay.echartsDomList)
                    } 
                    
                })
            
            }
            // 检验 数组对应项的标识号 如果标识号为1 则 渲染视频
            // 检验 数组对应项的标识号 如果标识号为2 则 渲染图片
            if (identification.value === '1' || identification.value === '2') {

                contentPictrue.value = imgSrc    
            }
            // 检验 数组对应项的标识号 如果标识号为4 则 dom挂载3D模型图
            if (identification.value === '1' || identification.value === '4') {

                console.log('此处写后续模型图逻辑 并配合左右侧按钮使用');
                    
            }
            // 至此一级按钮 点击业务完成
        }

        headText.value = name
    
    }




    // 2)当是二级按钮时 点击显示 隐藏的左侧按钮列 对按钮列添加点击事件 进行弹窗 
    if (itemcheck[0].btnLevel === '2') {
        console.log('触发2级按钮点击事件');

        // tabs2SceneDisplay.list1.forEach(item => item.leftMiddelListVisible === false)
        
        // dialogTableVisible.value = true
        // 修改pinia中弹窗对应数据 (模型切换请求发送时,判断弹窗状态再发送请求)
        // tabs2SceneDisplay.changeDialogTableVisible(true)
        // 修改pinia 弹框列表数据 给对应让对应item 弹框属性变为true  
        // 当前点击项
        const isActiveIndex =  tabs2SceneDisplay.list1.findIndex(item => item.name === name)

        // 先检查有没有为true 的项 
        const leftMiddelListVisibleIndex = tabs2SceneDisplay.list1.findIndex(item => item.leftMiddelListVisible === true)
        if (isActiveIndex !== -1 ) {
            
            // 如果筛选值没有true 给对应项赋值true
            if (leftMiddelListVisibleIndex === -1 ) {
                console.log('实验1');
                
                tabs2SceneDisplay.list1[isActiveIndex].leftMiddelListVisible = true
                // 此时为首次点击操作 给leftlist 赋值 
                appFlexLeft.getleftList(tabs2SceneDisplay.list1[isActiveIndex])

                //如果筛选值有true 且当前点击项与设置false的项不相等 先全部设置为false 在给对应项赋值 true 
            } else if(leftMiddelListVisibleIndex !== -1 && leftMiddelListVisibleIndex !== isActiveIndex) {
                console.log('实验2');

                tabs2SceneDisplay.list1.forEach(item => item.leftMiddelListVisible = false)
                tabs2SceneDisplay.list1[isActiveIndex].leftMiddelListVisible = true
                // 此时业务为切换 对 leftList 直接进行赋值操作
                appFlexLeft.getleftList(tabs2SceneDisplay.list1[isActiveIndex])

                // 如果筛选值有true 且当前点击项与设置false的项相等 则给对应项赋值为false 
            } else if (leftMiddelListVisibleIndex !== -1 && leftMiddelListVisibleIndex === isActiveIndex) {
                console.log('实验3');

                tabs2SceneDisplay.list1[isActiveIndex].leftMiddelListVisible = false
                // 此时业务为关闭
                // 给leftList 赋值为空数组
                appFlexLeft.getleftList([])
            }
            // 值赋予这个list 
            
            console.log(appFlexLeft.leftList);// 打印观察 后续在flex left组件选择 3级按钮 再回到本页面添加
            
        }
        // 控制左侧leftMiddelList  // 取反操作 后续控制左侧leftList显示与隐藏

        // 取反操作时 判断
        


        // headText.value = name
        // contentPictrue.value = imgSrc        
    }


}

// 弹窗关闭时,将视频关闭
const dialogClose = () => {
    dialogTableVisible.value = false // 弹窗关闭
    contentPictrue.value = pic01 // 修改图片的src
    tabs2SceneDisplay.changeDialogTableVisible(false)
    tabs2SceneDisplay.list1.forEach(
        (item)=> {
            if (item.isActive) {
                item.isActive = false
            }
            item.list.forEach(
                (item)=>{
                    if (item.isActive) {
                        item.isActive = false
                    }
                }
            )
        }
    )
    identification.value = ''
    // 弹窗关闭 echartsDomList变更为[]
    tabs2SceneDisplay.RefeshEchartsList()

} 






</script>

<template>
    <div class="select">
      <div class="footer-list">
            <transition name="el-zoom-in-center">
                
                    <ul class="flex flex-align-center" v-show="showpicturelist">
                    
                        <li class="flex flex-align-center" 
                            v-for="(item, index) in tabs2SceneDisplay.list1" :key="index"                      
                            @click="showDialog(item.name ,item.imgSrc)">
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
            

            </transition>
            
  
        </div>
        <!-- dialog弹框 -->
        <el-dialog 
        v-model="dialogTableVisible"
        :modal="false" 
        width="60%" 
        @close="dialogClose"
        :close-on-click-modal="false"
        class="trans"
        align-center>
          <div class="ShowPhoto">
            <div class="headText">
                <span>{{headText}}</span>
            </div>
            <div class="contentPictrue">
           
                <template v-if="identification === '1'">
                    <!-- <video 
                        :src="contentPictrue"                
                        controls               
                        height="520"
                    ></video> -->
                    
                </template>
                <template v-if="identification === '2'">
                    <img :src="contentPictrue"  alt="">
                </template>
                <template v-if="identification === '3'">

                    <div ref="main" style="width: 100%; height: 100%"></div>
                </template>                
            </div>
            <div class="footerText">
                <span>{{tabs2SceneDisplay.companyName}}</span> 
            </div>
          </div>
        </el-dialog>
    </div>

</template>

<style lang="less" scoped>

:deep(.el-dialog) {
    background: rgba(0, 0, 0, 0) !important; //弹出层透明;
    background-image: linear-gradient(180deg,rgba(0, 0, 0, 0) , rgba(0, 0, 0,) 100% )!important;
    border-radius: 20px;
    transform: translateY(-7%);
}
:deep(.el-dialog__body) {
    padding: 0 !important;

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
    margin-left: 26%;
    margin-right: 26%;
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

    // background-color: #000;
}
.contentPictrue img {
    width: 100%;
    height: 100%;
}

</style>