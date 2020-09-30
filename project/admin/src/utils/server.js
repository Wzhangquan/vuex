import axios from 'axios'
import router from '../router'

const _axios = axios.create({
  baseURL: "http://localhost:3000"
})

// 设置请求拦截器，给所有的请求添加token
_axios.interceptors.request.use(config => {
  // 给config设置token
  const userInfo = localStorage.getItem('userInfo')
  if (userInfo) {
    config.headers.authorization = JSON.parse(userInfo).token
  }

  return config
}, err => Promise.reject(err))


_axios.interceptors.response.use(res => {
  return res
}, err => {
  switch (err.response.status) {
    case 401: 
      router.replace('/login')
      break
    case 403:
      router.replace('/403')
      break
  }

  


  return Promise.reject(err)
})

export default _axios