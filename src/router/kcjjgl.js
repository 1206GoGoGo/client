//课程简介管理路由配置文件

import tskc from '@/components/kcjjgl/tskc/tskc'
import zykc from '@/components/kcjjgl/zykc/zykc'

import Tskcjjgl from '@/components/kcjjgl/tskc/Tskcjjgl'
import Zykcjjgl from '@/components/kcjjgl/zykc/Zykcjjgl'

export default [
    {
        path:"/tskc",
        component:tskc,
    },
    {
        path:"/zykc",
        component:zykc,
    },
    {
        path:"/tskc/Tskcjjgl",
        name:"Tskcjjgl",
        component:Tskcjjgl
    },
    {
        path:"/zykc/Zykcjjgl",
        name:"Zykcjjgl",
        component:Zykcjjgl
    }

]