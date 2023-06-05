import axios from 'axios'
import { showFailToast } from 'vant'
import 'vant/es/toast/style'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8'
// axios.defaults.headers.common.Pragma = 'no-cache'
// axios.defaults.headers.common['Cache-Control'] = 'no-cache'

const config = {
  // baseURL,
  timeout: 60 * 100, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
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
      data, // 后端返回的数据，默认为空对象，前端js处理不会报错
      infocode = '10000',
    } = response.data
    // 只处理接口参数正常数据
    if (infocode !== '10000') {
      // 统一处理接口报错信息，弹出后端的错误信息
      showFailToast('操作失败')
      return Promise.reject(data)
    }
    return data
  },
  function (error) {
    showFailToast('操作失败')
    // Do something with response error
    return Promise.reject(error)
  }
)
