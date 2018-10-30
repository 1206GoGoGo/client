//消息提醒路由配置文件

import sjx from '@/components/xxtx/sjx'
import fjx from '@/components/xxtx/fjx'
import select from '@/components/xxtx/select'


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
    }


]