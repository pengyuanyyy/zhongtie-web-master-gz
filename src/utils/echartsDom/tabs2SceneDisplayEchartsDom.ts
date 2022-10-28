// 导入echarts
import * as echarts from "echarts";


// 导入的echarts应具备两个参数 
// 参数1 创建的dom id name
// 参数2 echarts 对应的数据 应该为一个数组或对象 用于控制echarts的值的修改
//柱形图
export const init1 = (main:any ,echartsDomList:any) => {
    // 基于准备好的dom，初始化echarts实例
    var app :any = {};


        var myChart = echarts.init(main.value);
        var option;

        const posList = [
        'left',
        'right',
        'top',
        'bottom',
        'inside',
        'insideTop',
        'insideLeft',
        'insideRight',
        'insideBottom',
        'insideTopLeft',
        'insideTopRight',
        'insideBottomLeft',
        'insideBottomRight'
        ];
        app.configParameters = {
        rotate: {
            min: -90,
            max: 90
        },
        align: {
            options: {
            left: 'left',
            center: 'center',
            right: 'right'
            }
        },
        verticalAlign: {
            options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
            }
        },
        position: {
            options: posList.reduce(function (map, pos) {
            map[pos]  = pos;
            return map;
            }, {})
        },
        distance: {
            min: 0,
            max: 100
        }
        };
        app.config = {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15,
        onChange: function () {
            const labelOption = {
            rotate: app.config.rotate,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            position: app.config.position,
            distance: app.config.distance
            };
            myChart.setOption({
            series: [
                {
                label: labelOption
                },
                {
                label: labelOption
                },
                {
                label: labelOption
                },
                {
                label: labelOption
                }
            ]
            });
        }
        };
        const labelOption  = {
        show: true,
        position: app.config.position , 
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
            name: {}
        }
        };
        option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'shadow'
            }
        },
        legend: {
            data: ['Forest', 'Steppe', 'Desert', 'Wetland']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack'] },
            restore: { show: true },
            saveAsImage: { show: true }
            }
        },
        xAxis: [
            {
            type: 'category',
            axisTick: { show: false },
            data: ['2012', '2013', '2014', '2015', '2016'],
            axisLabel: {
            show: true,
                textStyle: {
                color: '#fff',  //更改坐标轴文字颜色
                fontSize : 14      //更改坐标轴文字大小
                },
            },
            axisLine:{
                lineStyle:{
                    color:'#315070' //更改坐标轴颜色
                }
                }

            }
        ],
        yAxis: [
            {
            type: 'value',
            axisLabel: {
            show: true,
                textStyle: {
                color: '#fff',  //更改坐标轴文字颜色
                fontSize : 14      //更改坐标轴文字大小
                },
            },
            }
        ],
        series: [
            {
            name: 'Forest',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390]
            },
            {
            name: 'Steppe',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290]
            },
            {
            name: 'Desert',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190]
            },
            {
            name: 'Wetland',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [98, 77, 101, 99, 40]
            }
        ]
        };

        option && myChart.setOption(option);
}  
 



// 堆叠折线图

export const init2 = (main:any ,echartsDomList:any) => {

  var myChart = echarts.init(main.value);

  var option;
  
  setTimeout(function () {
    option = {
      // 图例部分属性配置 用于控制图例
      legend: {
        orient: 'horizontal', // 横向排列
        x:'center', // x轴线方向居中
        y:'top', // y轴线方向置顶
        itemGap: 40 // 每一项的间距控制
      },
      tooltip: {
        trigger: 'axis',
        
      },
      dataset: {
        source: [
          ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
          ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
          ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
          ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
          ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      grid: { top: '55%' },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        // {
        //   type: 'pie',
        //   id: 'pie',
        //   radius: '30%',
        //   center: ['50%', '25%'],
        //   emphasis: {
        //     focus: 'self'
        //   },
        //   label: {
        //     formatter: '{b}: {@2012} ({d}%)'
        //   },
        //   encode: {
        //     itemName: 'product',
        //     value: '2012',
        //     tooltip: '2012'
        //   }
        // }
      ]
    };
    // myChart.on('updateAxisPointer', function (event:any) {
    //   const xAxisInfo = event.axesInfo[0];
    //   if (xAxisInfo) {
    //     const dimension = xAxisInfo.value + 1;
    //     myChart.setOption({
    //       series: {
    //         id: 'pie',
    //         label: {
    //           formatter: '{b}: {@[' + dimension + ']} ({d}%)'
    //         },
    //         encode: {
    //           value: dimension,
    //           tooltip: dimension
    //         }
    //       }
    //     });
    //   }
    // });
    myChart.setOption(option);
  });
  
  option && myChart.setOption(option);
  
} 
// 横向柱状图 双折线
export const init3 = (main:any ,echartsDomList:any) => {

    var myChart = echarts.init(main.value);
    var option;
    
    option = {
      tooltip: {
           
          },
          legend: {
            data: ["", ""],
            left: 10
          },
          // 右侧控制显示
      //     toolbox: {
      //       show: true,
      //       orient: "vertical",
      //       left: "right",
      //       top: "center",
      //       feature: {
      //         mark: { show: true },
      //         dataView: { show: true, readOnly: false },
      //         magicType: { show: true, type: ["line", "bar"] },
      //         restore: { show: true },
      //         saveAsImage: { show: true }
      //       }
      // },
          // 进行个别数据展示
          // axisPointer: {
          //   link: { xAxisIndex: "all" }
          // },
          color: ["#ffb100", "#1435ad"],
          // 区域缩放 不需要
          // dataZoom: [
          //   {
          //     show: true,
          //     height: 15, //组件高度
          //     realtime: true,
          //     bottom: "5px",
          //     start: 30,
          //     end: 70,
          //     xAxisIndex: [0, 1]
          //   },
          //   {
          //     type: "inside",
          //     height: 15, //组件高度
          //     realtime: true,
          //     start: 30,
          //     end: 70,
          //     xAxisIndex: [0, 1]
          //   }
          // ],
          grid: [
            {
              top: "29px",
              left: "5%",
              right: "5%",
              height: "30%"
            },
            {
              left: "5%",
              right: "5%",
              top: "60%",
              height: "30%"
            }
          ],
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              
              axisLine: {
                onZero: true,
                lineStyle: {
                  color: "#1982ff",
                  width: 1 //这里是为了突出显示加上的
                }
              },
              axisLabel: {
                //字体颜色
                show: true,
                textStyle: {
                  color: "#ff0536"
                }
              },
              data: [1,2,3,4,5,6,77,8999,88,7777] 
            },
            {
              gridIndex: 1,
              type: "category",
              boundaryGap: false,
              axisLine: { onZero: true },
              data: [1,2,3,4,5,6,77,8999,88,777] /*改变y轴颜色*/,
              // axisLine: {
              //   lineStyle: {
              //     color: "#1982ff",
              //     width: 1 //这里是为了突出显示加上的
              //   }
              // },
              axisLabel: {
                //字体颜色
                show: true,
                textStyle: {
                  color: "#ff0536"
                }
              },
              position: "top"
            }
          ],
          yAxis: [
            {
              type: "value" /*改变y轴颜色*/,
              axisLine: {
                lineStyle: {
                  color: "#1982ff",
                  width: 1 //这里是为了突出显示加上的
                }
        },
        
  
        name: 'that.danf',
        nameLocation: 'center',
        nameGap: 34,
              axisLabel: {
                //字体颜色
                show: true,
                textStyle: {
                  color: "#ff0536"
                }
              }
            },
            {
              gridIndex: 1 /*改变y轴颜色*/,
              axisLine: {
                lineStyle: {
                  color: "#1982ff",
                  width: 1 //这里是为了突出显示加上的
                }
        },
        name:  'that.dans',
        nameLocation: 'center',
        nameGap: 34,
              axisLabel: {
                //字体颜色
                show: true,
                textStyle: {
                  color: "#ff0536"
                }
              },
              type: "value",
              inverse: true
            }
          ],
          series: [
            {
              name: "",
              type: "line",
              // barWidth: 10,
              symbolSize: 8,
              hoverAnimation: false,
              data: [1,2,3,4,5,6,77,8999,88,777] 
            },
            {
              name: "",
              type: "line",
              // barWidth: 10,
              xAxisIndex: 1,
              yAxisIndex: 1,
              symbolSize: 8,
              hoverAnimation: false,
              data: [1,2,3,4,5,6,77,8999,88,777] 
            }
          ]
  };
    
    option && myChart.setOption(option);
} 


// 水氧池 水温 PH图
export const init4 =  (main:any ,echartsDomList:any) => {
 const timeList =  ['00:00', '01:00', '02:00', '03:00', '04:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00','12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  
  let waterList:any = [] 
  let PHList:any = []
  
  
    waterList =  echartsDomList.filter((item  :any) => item.type === 'SW')
    PHList = echartsDomList.filter((item  :any) => item.type === 'PH')

    // console.log(waterList);
    // console.log(PHList);


    function water(name:any) {
      // 1号水池温度数据 筛选所有一号水池温度 
      const waterList1 =  waterList.filter((item:any)=> item.name === name)
      // const arr1:any = [] //定义空数组 用于装载有数据时间的下标
      // x轴一定为24项数组 那么可以定义一个空数组
      const waterList1SW = ['', '', '', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', '', '', '']
      waterList1.forEach((item:any) =>{
        const index =  timeList.findIndex(i=> i === item.xAxis)
        if (index !== -1) {
          // 每当找到不为1的item 把item的y轴值赋值给该数组
          waterList1SW[index] = item.yAxis

        }
      })
      // console.log(arr1)
      // 此时已经获取了有数据的对应下标


      // console.log(arr1);
      // 获取到当前数组最小值
      // console.log(Math.min(...arr1));
      // const waterList1SW = waterList1.map((item:any) => {
      //   return item = item.yAxis
      // })
      // // console.log(waterList1SW);
      

      return waterList1SW
    }   
    
    function ph(name:any) {
    // 1号水池PH数据 筛选所有1号水池Ph值
    PHList.filter((item:any)=> item.name === name)
    const PHList1 =  PHList.filter((item:any)=> item.name === name)
    const arr1:any = []
    const PHList1SW = ['', '', '', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', '', '', '']
    PHList1.forEach((item:any) =>{
      const index =  timeList.findIndex(i=> i === item.xAxis)
      if (index !== -1) {
          // 每当找到不为1的item 把item的y轴值赋值给该数组
          PHList1SW[index] = item.yAxis
      }
    })
    // console.log(arr1);
    // 获取到当前数组最小值
    // console.log(Math.min(...arr1));
    // const PHList1SW = PHList1.map((item:any) => {
    //   return item = item.yAxis
    // })
    // console.log(PHList1SW);

    // 根据最小值改变数组
    // for (let i = 0; i < Math.min(...arr1)-1; i++) {
    //   PHList1SW.unshift('')
      
    // }
    return PHList1SW
    }   
  
  
  // const arrWaterList = []
  // for (let i = 0; i < 8; i++) {
  //   arrWaterList.push(water(``))
    
  // }
  // console.log(arrWaterList);
  
  // const arrPHList = []
  


  var myChart = echarts.init(main.value);
  var option;
  
  option = {
    // title: {
    //   // text: '水氧池温度 PH值曲线图',
    //   textStyle:{
    //   color:'#fff',//'red'，字体颜色
    //   fontStyle:'normal',//'italic'(倾斜) | 'oblique'(倾斜体) ，字体风格
    //   fontWeight:'normal',//'bold'(粗体) | 'bolder'(粗体) | 'lighter'(正常粗细) ，字体粗细
    //   fontFamily:'sans-serif',//'sans-serif' | 'serif' | 'monospace' | 'Arial' | 'Courier New' 
    //   // 'Microsoft YaHei'(微软雅黑) ，文字字体
    //   fontSize:18,//字体大小
    //   lineHeight:18,//字体行高
    //   },
    // },

    title:
    [
      {
        left: "left",
        // 标题
        text: '水温',
        textStyle: {
          color: "#ccc", //标签文字颜色改为白色
        },
       
      },
       {
        // color: "#0fa4ee",
        // left: "center",
        left: "left",
        top:'46%',//title 组件离容器上侧的距离
        // 标题
        subtext: `PH值` ,
        // 副标题样式
        subtextStyle: {
          // color: "#0fa4ee",
          fontSize: 18,
          fontWeight: "700",
          
          color: "#ccc", //标签文字颜色改为白色
        },
      },
    ],

    // {
      // show:true,//false
      // text:"水温",//主标题文本
      // left:right,
      // textStyle:{
      //     color:'#ccc',//'red'，字体颜色
      //     fontStyle:'normal',//'italic'(倾斜) | 'oblique'(倾斜体) ，字体风格
      //     fontWeight:'normal',//'bold'(粗体) | 'bolder'(粗体) | 'lighter'(正常粗细) ，字体粗细
      //     fontFamily:'sans-serif',//'sans-serif' | 'serif' | 'monospace' | 'Arial' | 'Courier New' 
      //     // 'Microsoft YaHei'(微软雅黑) ，文字字体
      //     fontSize:18,//字体大小
      //     lineHeight:18,//字体行高          
      // },
      // subtext:"PH",//副标题文本
      // subtextStyle:{
      //   left:right,
      //     color:'#ccc',//字体颜色
      //     fontStyle:'normal',//字体风格
      //     fontWeight:'normal',//字体粗细
      //     fontFamily:'sans-serif',//文字字体
      //     fontSize:18,//字体大小
      //     lineHeight:18,//字体行高
      //     align:'center',//'left' | 'right' ，文字水平对齐方式
      //     verticalAlign:'middle',//'top' | 'bottom' ，文字垂直对齐方式
      // },
      // textAlign:'auto',//整体（包括 text 和 subtext）的水平对齐
      // textVerticalAlign:'auto',//整体（包括 text 和 subtext）的垂直对齐
      // padding:0,//[5,10] | [ 5,6, 7, 8] ,标题内边距
      // // left:'auto',//'5' | '5%'，title 组件离容器左侧的距离
      // right:'auto',//'title 组件离容器右侧的距离
      // top:'50%',//title 组件离容器上侧的距离
      // bottom:'auto',//title 组件离容器下侧的距离
      // },



    // 图例部分属性配置 用于控制图例
    legend: {
      orient: 'horizontal', // 横向排列
      x:'center', // x轴线方向居中
      y:'top', // y轴线方向置顶
      // itemGap: 20, // 每一项的间距控制
      // icon:'roundRent',

      textStyle:{
        fontSize: 18,//字体大小
        color: '#ccc'//字体颜色
      },

      data: ['一号池', '二号池', '三号池', '四号池', '五号池','六号池','七号池','八号池']
    },
    // 悬浮框展示
    tooltip: {
      trigger: 'axis', // 提示框 坐标轴触发
      textStyle:{

        align:'left' //文字左对齐
      }
    },
    axisLabel: {//坐标轴轴线相关设置
      show: true,
      margin: 20,
      textStyle: {
          fontFamily: "MicrosoftYaHei",
          fontSize: 12,
          color: "#CCC",
      },
  },

 
    grid: [{
      left: '3%',
      right: '4%',
      
      top: '55%',
      height:"40%",
      containLabel: true
    },
    {
      left: '3%',
      right: '4%',
      height:"40%",
      top: '40px',
      containLabel: true
    }
  ],
    toolbox: {
      feature: {
        saveAsImage: {
          // BackgroundColor: '#000',
          iconStyle: {

          },
          emphasis: {
            iconStyle: {
              color :'rgba(255,255,255,1)',

            },
          },
          title: '保存图片',
          
          type: 'png',
          pixelRatio: 1,
          textStyle: {
            fontFamily: "MicrosoftYaHei",
            fontSize: 12,
            color: "rgba(255, 255, 255, 1)",
        },
        }
      }
    },
    // 横轴配置
    xAxis:[ {
      gridIndex:1,
      type: 'category',
      boundaryGap: false,

      data: timeList,

      axisLabel:{
        color:"#ccc"
      }
    }, 
    {

      type: 'category',
      boundaryGap: false,
      axisLabel:{
        color:"#ccc"
      },
      data: timeList
    },
  ],
    //纵轴配置
    yAxis: [
      {
        scale:true ,
        gridIndex: 1,
        type: 'value',

        axisLabel:{
          formatter:"{value}℃",//字符串模板
          color:"#ccc"
        }

      //   lineStyle:{
      //     color:'#white',
      //     width:10
      // }
    },        
    {
      scale:true ,
      type: 'value',
      axisLabel:{
        formatter:"{value}PH",//字符串模板
        color:"#ccc"
      }
      },
  ],
    series: [
      {

        name: '一号池',
        type: 'line',
        stack: 'Total1',
        smooth: true,  //true 为平滑曲线，false为直线
        data: water('1号水池') || []
      },
      {

        name: '二号池',
        type: 'line',
        stack: 'Total2',
        smooth: true,
        data:  water('2号水池') || []

      },
      {

        name: '三号池',
        type: 'line',
        stack: 'Total3',
        smooth: true,
        data:  water('3号水池') || []
      },
      {

        name: '四号池',
        type: 'line',
        stack: 'Total4',
        smooth: true,
        data:  water('4号水池') || []
      },
      {

        name: '五号池',
        type: 'line',
        stack: 'Total5',
        smooth: true,
        data:  water('5号水池') || []
      },
      {

        name: '六号池',
        type: 'line',
        stack: 'Total6',
        smooth: true,
        data:  water('6号水池') || []
      },
      {
  
        name: '七号池',
        type: 'line',
        stack: 'Total7',
        smooth: true,
        data:  water('7号水池') || []
      },
      {

        name: '八号池',
        type: 'line',
        stack: 'Total8',
        smooth: true,
        data:  water('8号水池') || []
      },   
      {
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: '一号池',
        type: 'line',
        stack: 'Total11',
        smooth: true,  //true 为平滑曲线，false为直线
        data:  ph('1号水池') || []
      },
      {
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: '二号池',
        type: 'line',
        stack: 'Total12',
        smooth: true,
        data: ph('2号水池') || []
      },
      {
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: '三号池',
        type: 'line',
        stack: 'Total13',
        smooth: true,
        data: ph('3号水池') || []
      },
      {
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: '四号池',
        type: 'line',
        stack: 'Total14',
        smooth: true,
        data: ph('4号水池') || []
      },
      {
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: '五号池',
        type: 'line',
        stack: 'Total15',
        smooth: true,
        data: ph('5号水池') || []
      },
      {
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: '六号池',
        type: 'line',
        stack: 'Total16',
        smooth: true,
        data: ph('6号水池') || []
      },
      {
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: '七号池',
        type: 'line',
        stack: 'Total17',
        smooth: true,
        data: ph('7号水池') || []
      },
      {
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: '八号池',
        type: 'line',
        stack: 'Total18',
        smooth: true,
        data: ph('8号水池') || []
      },      

    ]
  };
  
  option && myChart.setOption(option);
} 
