import axios from '@/utils/server'

export const  getBanners = (params) => axios.get('/banners', {params})