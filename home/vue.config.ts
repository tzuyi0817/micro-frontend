const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/main.ts'
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'home',
        filename: 'remoteEntry.js',
        remotes: {
          exposes_1: 'exposes_1@http://localhost:8081/remoteEntry.js',
        },
        shared: {
          vue: {
            singleton: true,
          }
        }
      })
    ]
  },
  transpileDependencies: true,
});
