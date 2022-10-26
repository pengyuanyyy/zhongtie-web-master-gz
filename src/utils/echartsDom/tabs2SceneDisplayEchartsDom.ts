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
    
    option = {
      title: {
        text: 'Stacked Line'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          smooth: true,  //true 为平滑曲线，false为直线
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    
    option && myChart.setOption(option);
} 

// 横向柱状图
export const init3 = (main:any ,echartsDomList:any) => {

    var myChart = echarts.init(main.value);
    var option;
    
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      series: [
        {
            
          barWidth: 40, //柱子宽度
          barGap: 1, //柱子之间间距
          name: 'Direct',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
          name: 'Mail Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Affiliate Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
          name: 'Search Engine',
          type: 'bar',
          stack: 'total',
          label: {
            formatter: "{c}"+"人",
            show: true,
            position: "top",
            textStyle: {
              fontWeight: "bolder",
              fontSize: "18",
              color: "#fff"
            },
        },
        //   label: {
        //     show: true
        //   },
          emphasis: {
            focus: 'series'
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    
    option && myChart.setOption(option);
} 
