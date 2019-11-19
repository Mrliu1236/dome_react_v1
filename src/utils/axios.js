import axios from 'axios'

const isDevelopment = process.env.NODE_ENV === 'development'
const httpRegx = /^http(s*):\/\//
const customProxyRegx = /^\/api[a-zA-Z-_]*/
const defaultProxy = '/proxy'

function withProxy(url = '') {
  if (httpRegx.test(url)) {
    return url
  }

  if (customProxyRegx.test(url)) {
    return isDevelopment ? url : url.replace(customProxyRegx, '')
  } else {
    return isDevelopment ? defaultProxy + url : url
  }
}

const axiosIns = axios.create({
  timeout: 10000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

axiosIns.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token')
    !!token && (config.headers['Authorization'] = token)
    config.url = withProxy(config.url)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosIns.interceptors.response.use(
  response => {
    if (response.data.code === 20000) {
      return response.data
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export const get = (url = '', params = null, config = {}) =>
  axiosIns.get(url, { ...config, params })
export const post = axiosIns.post
export const all = axiosIns.all
