// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import $ from 'jquery'
// import ElementUI from 'element-ui'
import {Menu,Submenu,MenuItem,MenuItemGroup,Row,Col} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Row);
Vue.use(Col);
//Vue.use(VueAxios, axios)
/* eslint-disable no-new */
// 生产环境错误日志
//if (process.env === 'production') {
//  Vue.config.errorHandler = function (err, vm) {
//    console.log(err, window.location.href)
//    errLog.pushLog({
//      err,
//      url: window.location.href,
//      vm,
//    })
//  }
//}

//rem.js
(function(win, doc) {
    win.addEventListener('resize', change, false);

    function change() {
        doc.documentElement.style.fontSize = doc.documentElement.clientWidth * 20 / 1366 + 'px';
    } 
    change();
   
})(window, document);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
