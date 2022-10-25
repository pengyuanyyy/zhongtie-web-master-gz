import  request  from "@/utils/request";
import { defineStore } from "pinia";

import useStore from "@/store";
const useTabs4EmulationStore = defineStore('tabs3ProjectTracking',{

    state() {
        return {
            list:                         
            [
                { name: '工程进度汇报', imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '生产发运汇总', imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '构件养护汇总', imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '今天计划汇总', imgSrc: 'src/assets/images/img/视频监控.jpg' },
            ],
            companyName:'可切换tab3',
            showpicturelist: false,
            showId : 3,
            routePath:'tabs3ProjectTracking',
            dialogTableVisible: false,
        }
    },
    actions: {
        changeShowpicturelist(action:any) {
            this.showpicturelist  = action
        }

    },
    getters: { 

    }
})

export default useTabs4EmulationStore;