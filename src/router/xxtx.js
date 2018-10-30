//消息提醒路由配置文件

import sjx from '@/components/xxtx/sjx/sjx'
import fjx from '@/components/xxtx/fjx/fjx'
import select from '@/components/xxtx/sjx/select'
import hsx from '@/components/xxtx/hsx/hsx'

export default [
    {
        path:"/sjx",
        component:sjx,
    },
    {
        path:"/fjx",
        component:fjx,
    },
    {
        path:"/select",
        component:select,
    },
    {
        path:"/hsx",
        component:hsx,
    }

]