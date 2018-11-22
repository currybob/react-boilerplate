import proxy from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    proxy('/posts', {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
    }),
  );
};
