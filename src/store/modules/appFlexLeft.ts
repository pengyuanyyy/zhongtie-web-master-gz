import  request  from "@/utils/request";
import { defineStore } from "pinia";

import useStore from "@/store";
const useappFlexLeftStore = defineStore('appFlexLeft',{

    state() {
        return {
            leftList : [] as any,
            dialogTableVisible: false,
            companyName:'来自appFlexLeft'
        }
    },
    actions: {
        getleftList(arr :any) {
            this.leftList = arr
        }
    },
    getters: { 

    }
})

export default useappFlexLeftStore;