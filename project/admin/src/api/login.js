import axios from '@/utils/server'

export const login = (user) => axios.post('/token', user)

// 验证token的请求
export const auth = () => axios.get('/auth')