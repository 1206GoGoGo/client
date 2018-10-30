//路由配置文件
import Vue from 'vue'
import Router from 'vue-router'

import xtwh from './xtwh.js'
import xxtx from './xxtx.js'

Vue.use(Router);

export default new Router({
    mode:'hash',
    routes:[].concat(xtwh,xxtx)
})
