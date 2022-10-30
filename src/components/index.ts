// vue插件机制 install()
import { useIntersectionObserver } from "@vueuse/core";
import defaultImg from '@/assets/images/img/视频监控.jpg'
import { App } from "vue";


// export default {
//     install(app:App) {
         
//         // 自定义图片懒加载指令
//         app.directive('lazy',{
//             // inserted(){}  vue2 的写法
//             // mounted(){}   vue3的写法
//             mounted(el,binding) {
//                 const {stop} = useIntersectionObserver(el , ([{isIntersecting}])=>{
//                     if (isIntersecting) {
//                         // console.log('加载');                       
//                         el.src = binding.value
//                         stop() // 停止监听

//                         // 如果图片加载失败，显示默认的图片
//                         el.onerror = function () {
//                             el.src =  defaultImg
//                         }
//                     }
//                 })
//             }
//         })
//     }
// }


// 