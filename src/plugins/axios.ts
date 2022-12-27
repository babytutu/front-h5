import axios from 'axios'
import { showFailToast } from 'vant'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8'
// axios.defaults.headers.common.Pragma = 'no-cache'
// axios.defaults.headers.common['Cache-Control'] = 'no-cache'

const config = {
  // baseURL,
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true // Check cross-site Access-Control
}

export const $http = axios.create(config)

$http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
$http.interceptors.response.use(
  function (response) {
    // Do something with response data
    const {
      status, // 接口状态码。200成功
      data: res,
      data: {
        data, // 后端返回的数据，默认为空对象，前端js处理不会报错
        result_code: code, // 1成功，0失败
        result_message: message, // 接口返回的错误信息
        infocode = '10000',
      },
    } = response
    // 只处理接口正常且接口参数正常数据
    if (status !== 200 || (code !== 1 && infocode !== '10000')) {
      // 统一处理接口报错信息，弹出后端的错误信息
      if (message) showFailToast(message)
      return Promise.reject(data)
    }
    return data || res
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)
