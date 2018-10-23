//路由配置文件
import Vue from 'vue'
import Router from 'vue-router'

import Xqdm from '@/components/xtwh/ggdmwh/Xqdm'


Vue.use(Router)

export default new Router({
    mode:'hash',
    routes:[
        {
            path:"/xqdm",
            component:Xqdm,
        }

    ]
})