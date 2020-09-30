export function filterRoutes (routes, role) {
  const res = []
  routes.forEach(route => {
    const tmp = {...route}
  
    if ((tmp.meta && tmp.meta.role && tmp.meta.role.some(r => r === role)) || (tmp.meta && !tmp.meta.role)) {
      if (tmp.children) {
        tmp.children = filterRoutes(tmp.children, role)
      }
      res.push(tmp)
    }
  })
  return res
}