import router from './router'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Nguyễn Phước',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap' }
        ],
        script: [
            { hid: 'stripe', src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', defer: true }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'ant-design-vue/dist/antd.css',
        '@/assets/scss/global.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/antd-ui'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    // Example Deploy github io
    // target: 'static',
    // router: {
    //     base: '/mycv'
    // }
    router: {
        // base: '/portfolio', //Devlop gibhub io
        extendRoutes (routes, resolve) {
            return [
                ...router
            ]
        }
    }
}
