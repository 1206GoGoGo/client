import gdfkcdz from '@/components/kck/gdfkcdz/index'
import kckbggl from '@/components/kck/kckbggl/index'
import kckgl from '@/components/kck/kckgl/index'

import kckbgglRightForm from '@/components/kck/kckbggl/rightForm'
import kckglRightForm from '@/components/kck/kckgl/rightForm'

import kckglAdd from '@/components/kck/kckgl/addCourse'

export default [
    {
        path:"/gdfkcdz",
        component:gdfkcdz
    },
    {
        path:"/kckbggl",
        component:kckbggl,
        children: [{
            path: '/kckbggl/rightForm/:change_id',
            name: 'kckbgglRightForm',
            component: kckbgglRightForm
        }]
    },
    {
        path:"/kckgl",
        name:"kckgl",
        component:kckgl,
        children: [{
            path: '/kckgl/rightForm/:change_id',
            name: 'kckglRightForm',
            component: kckglRightForm
        }]
    },
    {
        path:"/kckgl/add",
        name:"kckglAdd",
        component:kckglAdd
    },
]