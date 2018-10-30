//路由配置文件
import Vue from 'vue'
import Router from 'vue-router'

import Xqdm from '@/components/xtwh/ggdmwh/Xqdm'
import sjx from '@/components/xxtx/sjx'
import fjx from '@/components/xxtx/fjx'
import hsx from '@/components/xxtx/hsx'
Vue.use(Router)

export default new Router({
    mode:'hash',
    routes:[
        {
            path:"/xqdm",
            component:Xqdm,
        },
        {
            path:"/sjx",
            component:sjx,
        },
        {
            path:"/fjx",
            component:fjx,
        },
        {
            path:"/hsx",
            component:hsx,
        }
    ]

// import xtwh from './xtwh.js'
// Vue.use(Router);

// export default new Router({
//     routes:xtwh
// })
}