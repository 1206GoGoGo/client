//路由配置文件
import Vue from 'vue'
import Router from 'vue-router'

import Xqdm from '@/components/xtwh/ggdmwh/xqdmwh/xqdmwh'

import RightForm from '@/components/xtwh/ggdmwh/xqdmwh/rightForm'

Vue.use(Router)

export default new Router({
    mode:'hash',
    routes:[
        {
            path:"/xqdm",
            component:Xqdm,
            name: 'xqdmwh',
            children: [{
                path: '/xqdmwh/rightForm/:change_id',
                name: 'rightForm',
                component: RightForm
            }]
        }

    ]
})