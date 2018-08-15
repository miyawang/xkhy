// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//使用mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';

//按需引入 mint-ui
// import Button from 'mint-ui/lib/button';
// Vue.component(Button.name, Button);
//
// import { Swipe, SwipeItem } from 'mint-ui';   //按需引入部分组件
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

// import '@/assets/iconfont/iconfont.css'
// import '@/assets/css/style.css'
// import '@/assets/css/footer.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
