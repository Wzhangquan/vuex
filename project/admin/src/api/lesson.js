import axios from '@/utils/server'


/* 
  _limit 每页数量
  _page 第几页

*/
export const getLessons = params => axios.get('/lessons', {params})