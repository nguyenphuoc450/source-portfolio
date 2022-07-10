export default [
    {
        path: '/home',
        redirect: '/'
    },
    {
        name: 'home',
        path: '/',
        component: '@/pages/index.vue',
        chunkName: 'pages/index'
    },
    {
        name: 'projects',
        path: '/projects',
        component: '@/pages/projects.vue',
        chunkName: 'pages/projects'
    },
    {
        name: 'blog',
        path: '/blog',
        component: '@/pages/blog.vue',
        chunkName: 'pages/blog'
    },
]