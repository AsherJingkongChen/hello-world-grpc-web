// const TerserPlugin = require('terser-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, context) => {
    // config.optimization = {
    //   minimize: true,
    //   minimizer: [
    //     new TerserPlugin({
    //       parallel: true,
    //       extractComments: false,
    //       terserOptions: {
    //         ecma: 2017,
    //         compress: {
    //           drop_console: true,
    //         },
    //         format: {
    //           comments: false,
    //         }
    //       }
    //     })
    //   ]
    // };
    return config;
  }
};

module.exports = nextConfig;
