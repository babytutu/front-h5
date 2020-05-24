import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.common.Pragma = 'no-cache'
axios.defaults.headers.common['Cache-Control'] = 'no-cache'

const config = {
  // baseURL,
  // timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (process.env.NODE_ENV !== 'production' && config.data) {
      console.warn('请求参数')
      console.warn(JSON.stringify(config.data))
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    const {
      status, // 接口状态码。200成功
      data: {
        data = {}, // 后端返回的数据，默认为空对象，前端js处理不会报错
        result_code: code, // 1成功，0失败
        result_message: message // 接口返回的错误信息
      },
      request
    } = response
    // 只处理接口正常且接口参数正常数据
    if (status !== 200) {
      console.error('接口请求异常', status, request.responseURL)
    } else if (code !== 1) {
      // 统一处理接口报错信息，弹出后端的错误信息
      if (message) Toast.fail(message)
      console.error('接口异常', request.responseURL)
    }
    return data
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

Plugin.install = function (Vue) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    },
  })
}

Vue.use(Plugin)

export default Plugin
