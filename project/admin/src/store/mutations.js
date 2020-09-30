export const setData = (state, {data, key}) => {
  // 未来传递数据时传递一个对象 payload是一个对象 payload.key payload.data
  state[key] = data
}