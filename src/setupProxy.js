const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/playcanvas',
    createProxyMiddleware({
      target: 'http://localhost:8000', // Change this to your PlayCanvas local server URL
      changeOrigin: true,
    })
  );
};
