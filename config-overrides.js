const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = function override(config, env) {
  if (env === "production") {
    config.optimization.minimizer = [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Remove console logs
          },
        },
      }),
      new CssMinimizerPlugin(), // Minify CSS
    ];
  }
  return config;
};
