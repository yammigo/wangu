var env = require("./env")
const webpack = require('webpack')

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'wangu',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ["~/static/css/reset.css", "swiper/dist/css/swiper.min.css"],
    env: {
        //环境变量
        baseUrl: env[process.env.NODE_ENV].ENV_API
    },
    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [{
        src: "@/plugins/vue-awesome-swiper",
        ssr: false
    }],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: ['@nuxtjs/axios'],
    // axios: {
    //     proxy: true,
    //     prefix: '/api', // baseURL
    //     credentials: true,
    //   },
    //   proxy: {
    //     '/api': {
    //       target: 'http://192.168.xxx.xxx:xxxx', // 代理地址
    //       changeOrigin: true,
    //       pathRewrite: {
    //         '^/api': '', //将 /api 替换掉
    //       },
    //     },
    //   },
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    //webpack 配置的地方
    build: {
        plugins: [
            new webpack.ProvidePlugin({
                '$': 'jquery'
            })
        ]
    },
    router: {
        linkExactActiveClass: 'active'
    }
}