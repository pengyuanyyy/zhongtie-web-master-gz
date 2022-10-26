
import axios from "axios";
// import useStore from "@/store";

// const { user } = useStore()

export const baseURL = 'http://110.80.41.154:50001/'
const instance = axios.create({
    baseURL,
    timeout: 5000
  })
  
  // http://110.80.41.154:50001/WeatherForecast?cityCode=101280101
  // https://www.pc301.cn/api_Company1000/
  // https://www.pc301.cn/api_Company1000/GetWeather?cityCode=101280101

  // http://110.80.41.154:50001/api/Common/getWeather?cityCode=101280101

  // api/GP_GuanPian/index/GetWeather
  // 添加请求拦截器
  instance.interceptors.request.use(
    function (config) {
    //   // 在发送请求之前做些什么
    //   const { user } = useStore()
    //   if (user.profile.token) {
    //     config.headers!.Authorization = `Bearer ${user.profile.token}`
    //   }
      return config
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error)
    }
  )
  
  // 添加响应拦截器
  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      // 对响应错误做点什么
    //   if (!error.response) {
    //     Message.error('网络异常，请稍后重置')
    //   } else {
    //     if(error.response.data.code==='501'&&error.response.data.message==='三方登录失败'){
    //       Message.warning('QQ号还未关联,请填定详细信息')
    //     }else {
    //       Message.error(error.response.data.message)
    //     }
    //   }
      return Promise.reject(error)
    }
  )
  
  export default instance