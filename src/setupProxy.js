const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.fxss.work/',
      // ws: true,
      changeOrigin: true,
    })
  );
};
