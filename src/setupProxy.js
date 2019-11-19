/**
 * @description 配置代理
 */

const proxy = require('http-proxy-middleware')

function createProxy(path = '', target = '') {
  return proxy(path, {
    target,
    changeOrigin: true,
    pathRewrite: { [`^${path}`]: '' },
  })
}

module.exports = function(app) {
  app.use(
    createProxy('/proxy', 'http://172.16.132.120:8888'),
    createProxy('/api-abc', 'http://172.16.132.100:9999')
  )
}
