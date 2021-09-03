module.exports = function (config, env) {
  if (env === "development") {
    const apis = { "/api": "http://127.0.0.1" };

    Object.keys(apis).map((path) => {
      config.devServer.proxy[path] = {
        secure: false,
        changeOrigin: true,
        // pathRewrite: { [`^${path}`]: '' },
        target: apis[path],
      };
    });
  }

  return config;
};
