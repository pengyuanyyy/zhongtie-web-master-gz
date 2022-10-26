import  request  from "@/utils/request";
import { defineStore } from "pinia";

import pic01 from "@/assets/images/img/视频监控.jpg";
import pic02 from "@/assets/images/img/app-bg.jpg";

import tip1_1 from "@/assets/images/img/list/1/钢筋笼生产统计.png";
import tip1_2 from "@/assets/images/img/list/1/今日钢筋用料.png";
import tip1_3 from "@/assets/images/img/list/1/钢筋笼库存数量.png";
import tip1_4 from "@/assets/images/img/list/1/钢筋笼待检数量.png";

import tip2_1 from "@/assets/images/img/list/2/本日产量.png";
import tip2_2 from "@/assets/images/img/list/2/本月产量.png";
import tip2_3 from "@/assets/images/img/list/2/本年产量.png";
import tip2_4 from "@/assets/images/img/list/2/产线在制品.png";
import tip2_5 from "@/assets/images/img/list/2/产线环境数据.png";

import tip3_1 from "@/assets/images/img/list/2/本日产量.png";
import tip3_2 from "@/assets/images/img/list/2/本月产量.png";
import tip3_3 from "@/assets/images/img/list/2/本年产量.png";
import tip3_4 from "@/assets/images/img/list/2/产线在制品.png";
import tip3_5 from "@/assets/images/img/list/2/产线环境数据.png";


import tip4_1 from "@/assets/images/img/list/3/1号池水养动态.png";
import tip4_2 from "@/assets/images/img/list/3/2号池水养动态.png";
import tip4_3 from "@/assets/images/img/list/3/3号池水养动态.png";
import tip4_4 from "@/assets/images/img/list/3/4号池水养动态.png";
import tip4_5 from "@/assets/images/img/list/3/5号池水养动态.png";
import tip4_6 from "@/assets/images/img/list/3/6号池水养动态.png";
import tip4_7 from "@/assets/images/img/list/3/7号池水养动态.png";
import tip4_8 from "@/assets/images/img/list/3/8号池水养动态.png";


import tip5_1 from "@/assets/images/img/list/4/堆场A区养护动态.png";
import tip5_2 from "@/assets/images/img/list/4/堆场B区养护动态.png";

import tip6_1 from "@/assets/images/img/list/5/今日原料入库清单.png";
import tip6_2 from "@/assets/images/img/list/5/原料库存数量.png";

import tip7_1 from "@/assets/images/img/list/6/今日用料预估与实际消耗.png";
import tip7_2 from "@/assets/images/img/list/6/原料库存数量.png";




const useTabs2SceneDisplayStore = defineStore('tabs2SceneDisplay',{

    state() {
        return {
            // list:                         
            // [
            //     { name: '大门', imgSrc:     pic01  },
            //     { name: '办公楼', imgSrc:   pic01 },
            //     { name: '钢筋车间', imgSrc: pic01  },
            //     { name: '浇筑1线', imgSrc:  pic01 },
            //     { name: '浇筑2线', imgSrc:  pic01 },
            //     { name: '水养池', imgSrc:   pic01 },
            //     { name: '堆场', imgSrc:     pic01  },
            //     { name: '地磅', imgSrc:     pic01 },
            //     { name: '搅拌站', imgSrc:   pic01 },
            //     { name: '试验室', imgSrc:   pic01 },
            // ],
                // 多维数组

                // identification:'1' dialog弹框内渲染视频
                // identification:'2' dialog弹框内渲染图片
                // identification:'3' dialog弹框内渲染echarts
                // identification:'3' dialog弹框内渲染3D图
                //list: ['大门', '办公楼', '钢筋车间', '浇筑1线', '浇筑2线', '水养池', '堆场', '地磅', '搅拌站', '试验室']
                list1: [
                    { name: '大门', list: [] ,btnLevel:'1',isActive:false, imgSrc: '',identification:'3', echartsDomName: 'init1' , leftMiddelListVisible: false },
                    { name: '办公楼', list: [],btnLevel:'1',isActive:false, imgSrc: '' ,identification:'3',echartsDomName: 'init2', leftMiddelListVisible: false },
                    {
                        name: '钢筋车间',
                        btnLevel:'2',
                        leftMiddelListVisible: false, 
                        echartsDomName: '',
                        list: [
                            { title: '钢筋笼生产统计', image:  tip1_1 ,isActive:false, imgSrc: pic02 },
                            { title: '今日钢筋用料',   image:  tip1_2 ,isActive:false, imgSrc: pic02 },
                            { title: '钢筋笼库存数量', image:  tip1_3 ,isActive:false, imgSrc: pic02 },
                            { title: '钢筋笼待检数量', image:  tip1_4 ,isActive:false, imgSrc: pic02 }
                        ]
                    },
                    {
                        name: '浇筑1线',
                        btnLevel:'2',
                        leftMiddelListVisible: false, 
                        list: [
                            { title: '本日产量',    image: tip2_1 ,isActive:false, imgSrc: pic02},
                            { title: '本月产量',    image: tip2_2 ,isActive:false, imgSrc: pic02},
                            { title: '本年产量',    image: tip2_3 ,isActive:false, imgSrc: pic02},
                            { title: '产线在制品',  image: tip2_4 ,isActive:false, imgSrc: pic02},
                            { title: '产线环境数据',image: tip2_5 ,isActive:false, imgSrc: pic02}
                        ]
                    },
                    {
                        name: '浇筑2线',
                        btnLevel:'2',
                        leftMiddelListVisible: false, 
                        list: [
                            { title: '本日产量', image: tip3_1,isActive:false, imgSrc: pic02 },
                            { title: '本月产量', image: tip3_2,isActive:false, imgSrc: pic02 },
                            { title: '本年产量', image: tip3_3,isActive:false, imgSrc: pic02 },
                            { title: '产线在制品', image: tip3_4,isActive:false, imgSrc: pic02 },
                            { title: '产线环境数据', image: tip3_5,isActive:false , imgSrc: pic02 }
                        ]
                    },
                    {
                        name: '水养池',
                        btnLevel:'2',
                        leftMiddelListVisible: false, 
                        list: [
                            { title: '1号池水养动态', image: tip4_1,isActive:false, imgSrc: pic02 },
                            { title: '2号池水养动态', image: tip4_2,isActive:false, imgSrc: pic02 },
                            { title: '3号池水养动态', image: tip4_3,isActive:false, imgSrc: pic02 },
                            { title: '4号池水养动态', image: tip4_4,isActive:false, imgSrc: pic02 },
                            { title: '5号池水养动态', image: tip4_5,isActive:false, imgSrc: pic02 },
                            { title: '6号池水养动态', image: tip4_6,isActive:false, imgSrc: pic02 },
                            { title: '7号池水养动态', image: tip4_7,isActive:false, imgSrc: pic02 },
                            { title: '8号池水养动态', image: tip4_8,isActive:false, imgSrc: pic02 }
                        ]
                    },
                    {
                        name: '堆场',
                        btnLevel:'2',
                        leftMiddelListVisible: false, 
                        list: [
                            { title: '堆场A区养护动态', image: tip5_1,isActive:false, imgSrc: pic02 },
                            { title: '堆场B区养护动态', image: tip5_2,isActive:false, imgSrc: pic02 }
                        ]
                    },
                    {
                        name: '地磅',
                        btnLevel:'2',
                        leftMiddelListVisible: false, 
                        list: [
                            { title: '今日原料入库清单', image: tip6_1,isActive:false, imgSrc: pic02 },
                            { title: '原料库存数量', image: tip6_2,isActive:false, imgSrc: pic02 }
                        ]
                    },
                    {
                        name: '搅拌站',
                        btnLevel:'2',
                        leftMiddelListVisible: false, 
                        list: [
                            { title: '今日用料预估与实际消耗', image: tip7_1,isActive:false, imgSrc: pic02 },
                            { title: '原料库存数量', image: tip7_2,isActive:false, imgSrc: pic02 }
                        ]
                    },
                    { name: '试验室', list: [] ,btnLevel:'1',isActive:false,identification:'3',echartsDomName: 'init3', imgSrc: pic01 ,leftMiddelListVisible: false }
                ] , 

            companyName:'可切换tab2',
            showpicturelist: false,
            showId : 2,
            routePath:'tabs2SceneDisplay',
            dialogTableVisible: false,
            leftMiddelListVisible:false ,// 左侧list显示隐藏控制

            echartsDomList : [] as any  // 用于控制echarts数据的list 应该由list1 数组中得到 点击1级按钮 直接赋值 
                                        // 点击2级按钮 选中对应的list后赋值 当dialog弹窗关闭 直接销毁数据 
        }
    },
    actions: {
        // 控制底部菜单显示
        changeShowpicturelist(action:any) {
            this.showpicturelist  = action
        },
        // 控制dialog弹框的显示隐藏
        changeDialogTableVisible(action:any) {
            this.dialogTableVisible  = action
        },
        // 给与echartsDomList 进行赋值 
        getechartsDomList(arr :any) {
            this.echartsDomList = arr
        }

    },
    getters: { 
        // 用于控制 app-flex 组件内 左侧list 显示隐藏
        leftMiddelListVisible1(state) {
            const res =  state.list1.findIndex(item => item.leftMiddelListVisible === true) 
            return res === -1 ? false :true
        }
    }
})

export default useTabs2SceneDisplayStore;