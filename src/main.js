// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'
import Mainwin from './components/Mainwin'

//elm的相关引用
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(Mainwin)
});
//elm引用结束


Vue.config.productionTip = false

new Vue({
  el: '#mainwin',
  router,
  data: {
    site: "设置为当前位置：工作台--》"
  },
  components: { Mainwin }
})
