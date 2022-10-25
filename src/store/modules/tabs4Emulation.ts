import  request  from "@/utils/request";
import { defineStore } from "pinia";

import useStore from "@/store";
const useZhongTie15Store = defineStore('tabs4Emulation',{

    state() {
        return {
            list:                         
            [
                { name: '钢筋下料'    ,  imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '钢筋焊接'    ,  imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '钢筋笼堆放'  , imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '预埋件添加'  , imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '模具清理'    ,  imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '钢筋笼放模'  , imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '混泥土浇筑'  , imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '混泥土震动'  , imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '构件蒸养'    ,  imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '构件脱模'    ,  imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '构件水养'    ,  imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '构件堆场养护', imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '构件发运'    ,  imgSrc: 'src/assets/images/img/视频监控.jpg' },
                { name: '构件签收'    ,  imgSrc: 'src/assets/images/img/视频监控.jpg' },

            ],
            companyName:'可切换tab4',
            showpicturelist: false,
            showId : 4,
            routePath:'tabs4Emulation',
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

export default useZhongTie15Store;