import { createRouter , createWebHashHistory  } from "vue-router";
import Layout from "@/views/layout/index.vue";
import Home from "@/views/home/index.vue";

const router = createRouter({
    // 匹配模式
    history:createWebHashHistory(),
    // 页面滚动行为
    scrollBehavior: () => {
        return {
          top: 0,
        }
    },
    routes : [
        {
            path:'/' , 
            component:Layout,
            children : [
                {
                    path:'/tabs1Home',
                    component:()=>import('@/views/tabs1Home/index.vue'),
                },
                {
                    path:'/tabs2SceneDisplay',
                    component : () => import('@/views/tabs2SceneDisplay/index.vue')
                },
                {
                    path:'/tabs3ProjectTracking',
                    component:()=>import('@/views/tabs3ProjectTracking/index.vue')
                },
                {
                    path:'/tabs4Emulation',
                    component:()=>import('@/views/tabs4Emulation/index.vue')
                }

            ]
        },
        // 路由懒加载
        // {
        //     path:'/login',component : () => import('@/views/login/index.vue')
        // }, 
        // {
        //     path:'/login/callback',component : () => import('@/views/login/callback.vue')
        // }, 
        // {
        //     path:'/demo',component : () => import('@/views/demo/index.vue')
        // },

    ]
})

// 路由前置守卫

/* router.beforeEach((to,from,next)=> {
    const {cart} = useStore()
    const isLogin = cart.isLogin

    // 登录
    if (isLogin) {
        // 登录
        next()
    } else {
        // 游客状态
        // console.log(to.fullPath);       
        if(to.path.includes('/member')){
            // 登录提示
            // Message.warning('请先登录')
            next({
                path:'/login',
                query: {
                    redirectUrl: to.fullPath
                }
            })
        } else {
            next()
        }
    }   

}) */


export default router