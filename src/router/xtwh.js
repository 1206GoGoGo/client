import Xqdm from '@/components/xtwh/ggdmwh/xqdmwh/index'
import Xydm from '@/components/xtwh/ggdmwh/xydmwh/index'
import Zydm from '@/components/xtwh/ggdmwh/zydmwh/index'
import Kclbdm from '@/components/xtwh/jhzmkdmwh/kclbdmwh/index'
import Kcxzdm from '@/components/xtwh/jhzmkdmwh/kcxzdmwh/index'
import Khfsdm from '@/components/xtwh/jhzmkdmwh/khfsdmwh/index'
import Xklbdm from '@/components/xtwh/jhzmkdmwh/xklbdmwh/index'
import Xxkcgsdm from '@/components/xtwh/jhzmkdmwh/xxkcgsdmwh/index'

import xqdmRightForm from '@/components/xtwh/ggdmwh/xqdmwh/rightForm'
import xydmRightForm from '@/components/xtwh/ggdmwh/xydmwh/rightForm'
import zydmRightForm from '@/components/xtwh/ggdmwh/zydmwh/rightForm'
import kclbdmRightForm from '@/components/xtwh/jhzmkdmwh/kclbdmwh/rightForm'
import kcxzdmRightForm from '@/components/xtwh/jhzmkdmwh/kcxzdmwh/rightForm'
import khfsdmRightForm from '@/components/xtwh/jhzmkdmwh/khfsdmwh/rightForm'
import xklbdmRightForm from '@/components/xtwh/jhzmkdmwh/xklbdmwh/rightForm'
import xxkcgsdmRightForm from '@/components/xtwh/jhzmkdmwh/xxkcgsdmwh/rightForm'


//创建路由数组
export default [
    {
        path:"/xqdm",
        component:Xqdm,
        name: 'xqdmwh',
        children: [{
            path: '/xqdmwh/rightForm/:change_id',
            name: 'xqdmRightForm',
            component: xqdmRightForm
        }]
    },
    {
        path:"/xydm",
        component:Xydm,
        name: 'xydmwh',
        children: [{
            path: '/xydmwh/rightForm/:change_id',
            name: 'xydmRightForm',
            component: xydmRightForm
        }]
    },
    {
        path:"/zydm",
        component:Zydm,
        name: 'zydmwh',
        children: [{
            path: '/zydmwh/rightForm/:change_id',
            name: 'zydmRightForm',
            component: zydmRightForm
        }]
    },
    {
        path:"/kclbdm",
        component:Kclbdm,
        name: 'kclbdmwh',
        children: [{
            path: '/kclbdmwh/rightForm/:change_id',
            name: 'kclbdmRightForm',
            component: kclbdmRightForm
        }]
    },
    {
        path:"/kcxzdm",
        component:Kcxzdm,
        name: 'kcxzdmwh',
        children: [{
            path: '/kcxzdmwh/rightForm/:change_id',
            name: 'kcxzdmRightForm',
            component: kcxzdmRightForm
        }]
    },
    {
        path:"/khfsdm",
        component:Khfsdm,
        name: 'khfsdmwh',
        children: [{
            path: '/khfsdmwh/rightForm/:change_id',
            name: 'khfsdmRightForm',
            component: khfsdmRightForm
        }]
    },
    {
        path:"/xklbdm",
        component:Xklbdm,
        name: 'xklbdmwh',
        children: [{
            path: '/xklbdmwh/rightForm/:change_id',
            name: 'xklbdmRightForm',
            component: xklbdmRightForm
        }]
    },
    {
        path:"/xxkcgsdm",
        component:Xxkcgsdm,
        name: 'xxkcgsdmwh',
        children: [{
            path: '/xxkcgsdmwh/rightForm/:change_id',
            name: 'xxkcgsdmRightForm',
            component: xxkcgsdmRightForm
        }]
    }

]