import Xqdm from '@/components/xtwh/ggdmwh/xqdmwh/index'
import Xydm from '@/components/xtwh/ggdmwh/xydmwh/index'
import Zydm from '@/components/xtwh/ggdmwh/zydmwh/index'
import Kclbdm from '@/components/xtwh/jhzmkdmwh/kclbdmwh/index'

import xqdmRightForm from '@/components/xtwh/ggdmwh/xqdmwh/rightForm'
import xydmRightForm from '@/components/xtwh/ggdmwh/xydmwh/rightForm'
import zydmRightForm from '@/components/xtwh/ggdmwh/zydmwh/rightForm'
import kclbdmRightForm from '@/components/xtwh/jhzmkdmwh/kclbdmwh/rightForm'


//创建路由数组
export default [
    {
        path:"/xqdm",
        component:Xqdm,
        name: 'xqdmwh',
        children: [{
            path: '/xqdmwh/rightForm/:change_id',
            name: 'rightForm',
            component: xqdmRightForm
        }]
    },
    {
        path:"/xydm",
        component:Xydm,
        name: 'xydmwh',
        children: [{
            path: '/xydmwh/rightForm/:change_id',
            name: 'rightForm',
            component: xydmRightForm
        }]
    },
    {
        path:"/zydm",
        component:Zydm,
        name: 'zydmwh',
        children: [{
            path: '/zydmwh/rightForm/:change_id',
            name: 'rightForm',
            component: zydmRightForm
        }]
    },
    {
        path:"/kclbdm",
        component:Kclbdm,
        name: 'kclbdmwh',
        children: [{
            path: '/kclbdmwh/rightForm/:change_id',
            name: 'rightForm',
            component: kclbdmRightForm
        }]
    }

]