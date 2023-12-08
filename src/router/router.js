import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        // 使用动态导入替代 require.ensure
        component: () => import('../page/home')
    }, {
        path: '/item',
        // 使用动态导入替代 require.ensure
        component: () => import('../page/item')
    }, {
        path: '/score',
        // 使用动态导入替代 require.ensure
        component: () => import('../page/score')
    }]
}];
