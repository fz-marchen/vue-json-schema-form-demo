const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-json-schema-form-demo/' // 替换为你的 GitHub 仓库名
    : '/',
  transpileDependencies: true
})
