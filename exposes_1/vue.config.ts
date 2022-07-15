const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/main.ts'
    }
  },
  publicPath: 'auto',
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'exposes_1',
        filename: 'remoteEntry.js',
        exposes: {
          './HelloWorld.vue': './src/components/HelloWorld.vue',
          './AboutView.vue': './src/views/AboutView.vue',
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
