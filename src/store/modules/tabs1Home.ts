import  request  from "@/utils/request";
import { defineStore } from "pinia";

import pic01 from "@/assets/images/img/视频监控.jpg";

const useTabs1HomeStore = defineStore('tabs1Home',{

    state() {
        return {
            list:                         
            [
                { name: '基础概括', imgSrc: pic01,isActive:false },
                { name: '视频汇报', imgSrc: pic01,isActive:false },

            ],
            companyName:'可切换tab1',
            showpicturelist: false,
            showId : 1,
            routePath:'tabs1Home',
            dialogTableVisible: false
        }
    },
    actions: {
        changeShowpicturelist(action:any) {
            this.showpicturelist  = action
        },
        changeDialogTableVisible(action:any) {
            this.dialogTableVisible  = action
        }
    },
    getters: { 

    }
})

export default useTabs1HomeStore;