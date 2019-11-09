const withTM = require('next-transpile-modules');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

// compile the common packages
module.exports = withTM({
  transpileModules: ['common'],
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  }
});
