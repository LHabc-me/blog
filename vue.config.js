const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config =>
        config.plugin('html')
            .tap(args => {
                args[0].title = '测试反应速度';
                return args;
            }),
    publicPath: './',
    outputDir: 'dist/vue',
})
