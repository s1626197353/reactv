const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use('/mock', createProxyMiddleware({
    target: require('./config/base').baseServerUrl,
    changeOrigin: true,
    /*pathRewrite: { //路径替换
      '^/mock': '', // axios 访问/mock/xxx == target + /mock/xxx
    }*/
  }));

  app.use('/api2', createProxyMiddleware({
    target: 'http://vareyoung.top',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/api2': '/api', // axios 访问/api2 == target + /api
    }
  }));

};