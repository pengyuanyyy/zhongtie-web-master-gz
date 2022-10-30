import  request  from "@/utils/request";
import { defineStore } from "pinia";

import useStore from "@/store";
const useappFlexRightStore = defineStore('appFlexRight',{

    state() {
        return {

            dialogTableVisible: false,
            companyName:'来自appRightList'
        }
    },
    actions: {
        // 控制dialog弹框的显示隐藏
        changeDialogTableVisible(action:any) {
            this.dialogTableVisible  = action
        },
    },
    getters: { 

    }
})

export default useappFlexRightStore;