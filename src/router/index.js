//路由配置文件
import Vue from 'vue'
import Router from 'vue-router'

import xtwh from './xtwh.js'
import xxtx from './xxtx.js'
import zyxx from './zyxx.js'
import xtqx from './xtqx.js'
Vue.use(Router);

export default new Router({
    mode:'hash',
    routes:[].concat(xtwh,xxtx,zyxx,xtqx)
})