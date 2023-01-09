const { defineConfig } = require('@vue/cli-service')
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = defineConfig({
  productionSourceMap: false,
  css: {
    extract: false,
  },
  transpileDependencies: true,
  configureWebpack: {
    mode: 'development',
    entry: '@/enter-server.js',
    target: 'node',
    output: {
      library: {
        type: 'commonjs2'
      },
      libraryTarget: 'commonjs2',
    },
    externals: nodeExternals({
      allowlist: [/\.css$/],
    }),
    optimization: {
      splitChunks: { chunks: 'all' },
    },
    plugins: [
      new VueSSRServerPlugin(),
    ],
  }
})
