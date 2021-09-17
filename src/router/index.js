import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/pages/index.vue'),
            redirect: '/openSetting',
            children: [
                {
                    path: '/openSetting',
                    name: 'openSetting',
                    component: () => import('@/pages/settingManage/openSetting.vue'),
                },
                {
                    path: '/aiSetting',
                    name: 'aiSetting',
                    component: () => import('@/pages/settingManage/aiSetting.vue'),
                },
                {
                    path: '/normalSetting',
                    name: 'normalSetting',
                    component: () => import('@/pages/settingManage/normalSetting.vue'),
                },
                {
                    path: '/myShop',
                    name: 'myShop',
                    component: () => import('@/pages/shopManage/myShop.vue'),
                },
                {
                    path: '/addShop',
                    name: 'addShop',
                    component: () => import('@/pages/shopManage/addShop.vue'),
                },
                {
                    path: '/dataBlank',
                    name: 'dataBlank',
                    component: () => import('@/pages/shopManage/dataBlank.vue'),
                },
            ],
        },
    ],
})

export default router