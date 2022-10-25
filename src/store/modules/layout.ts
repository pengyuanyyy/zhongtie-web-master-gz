import  request  from "@/utils/request";
import { defineStore } from "pinia";

const useLayoutStore = defineStore('layout',{

    state() {
        return {
            tieluList : [
                {id:1 ,name:'基地介绍',isShow:false,pathUrl:'/zhongTie15' },
                {id:2 ,name:'场景切换',isShow:false,pathUrl:'/zhongTie16' },
                {id:3 ,name:'工程跟踪',isShow:false,pathUrl:'/zhongTie20' },
                {id:4 ,name:'工序仿真',isShow:false,pathUrl:'/zhongTie23' },

            ],
            weatherList: {}  as any
        }
    },
    actions: {
        async getHomeHotList () {
            // setTimeout(async() => {
            const res = await request.get('/api_Company1000/GetWeather?cityCode=101280101')
                       
            this.weatherList = res.data
            // console.log(123);
            
            // console.log(this.weatherList);
            
            // }, 3000);
        }        
    },
    getters: { 

    }
})

export default useLayoutStore;