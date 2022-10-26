<script setup lang='ts'>
import useStore from "@/store/index";
import { onBeforeUnmount, onMounted, ref } from "vue";


const  {layout}  = useStore() 
layout.getHomeHotList()

let getWeather :any = null
//每10min 获取天气数据
getWeather = setInterval(() => {
    layout.getHomeHotList()
  }, 60000);


  onBeforeUnmount(() => {
  clearInterval(getWeather)
  getWeather = null;
})

    //现在的时间
    let dataTime = ref("");
    //今天星期
    const day = ref("");
    // 年月日
    const dataDay = ref("")

    let timer:any 
 
    //获取当前的时间
    const getNowTime = () => {
      //时间戳
      const Dates = new Date();
      //年份
      const Year = Dates.getFullYear();
      //星期
      const data: number = Dates.getDay();
      //月份下标是0-11
      const Months = Dates.getMonth() + 1 < 10? "0" + (Dates.getMonth() + 1): Dates.getMonth() + 1;
      //具体的天数
      const Day = Dates.getDate() < 10 ? "0" + Dates.getDate() : Dates.getDate();
      //小时
      const Hours =Dates.getHours() < 10 ? "0" + Dates.getHours() : Dates.getHours();
      //分钟
      const Minutes =Dates.getMinutes() < 10 ? "0" + Dates.getMinutes(): Dates.getMinutes();
      //秒
      const Seconds =Dates.getSeconds() < 10 ? "0" + Dates.getSeconds(): Dates.getSeconds();
    //   dataTime.value = `${Hours}:${Minutes}:${Seconds} ${Year}.${Months}.${Day}`;
      dataTime.value = `${Hours}:${Minutes}:${Seconds} `;
      dataDay.value = `${Year}.${Months}.${Day}`
      day.value = `${data}`;
 
      //数字转化为汉字（switch写法）
      //switch (day.value as any) {
      //  case "1":
      //    day.value = "一";
      //    break;
      //  case "2":
      //    day.value = "二";
      //    break;
      //  case "3":
      //    day.value = "三";
      //    break;
      //  case "4":
      //    day.value = "四";
      //    break;
      //  case "5":
      //    day.value = "五";
      //    break;
      //  case "6":
      //    day.value = "六";
      //    break;
      //  case "7":
      //    day.value = "天";
      //    break;
      //}
 
      //数字转化为汉字（优化写法）
      let arr=["1","2","3","4","5","6","7"]
      let arr1=["星期一","星期二","星期三","星期四","星期五","星期六","星期天"]
      for(let i in arr){
        if(arr[i]==day.value){
          day.value=arr1[i]
          
          
        }
      }
      return dataTime.value;
      
    }
 
   //挂载定时器
    onMounted(() => {
      timer = setInterval(() => {
        getNowTime();
      }, 1000);
    });
 
    onBeforeUnmount(() => {
      // 清理定时器要处理 timer 的类型
      clearInterval(Number(timer));
    });






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
                <div v-if="layout.weatherList.weather" class="divRight">
                    <span>{{layout.weatherList.weather}}</span>
                    
                </div>
                <div v-else class="divRight">
                    多云
                </div>
                <div class="time">
                    <span>{{dataTime}}</span>
                </div>
                
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
            <!-- <div class="time">
                <div> {{ day }}</div>
                <div>{{ dataTime }}</div>
        
            </div> -->
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
.divRight span {
   display: block;
   text-align: left;
}

.time {

    position: absolute;
    top: 18px;
    left: 75px;

    color:#fff;

}

</style>