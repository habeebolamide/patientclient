/* eslint-disable no-console */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueTouch from 'vue-touch';
import Trend from 'vuetrend';
import VueApexCharts from 'vue-apexcharts';

import store from './store';
import router from './Routes';
import App from './App';
import layoutMixin from './mixins/layout';
import authMixin from './mixins/auth';
import Widget from './components/Widget/Widget';
import vuetify from './plugins/vuetify'
import 'vue-toastification/dist/index.css'
import Toast from 'vue-toastification';
import Toasted from 'vue-toasted';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import AudioRecorder from 'vue-audio-recorder'

import VueSocialSharing from 'vue-social-sharing'
import Echo from 'laravel-echo';
import axiosConfig from './axios-config';
import Notifications from 'vue-notification';

Vue.use(Notifications);
Vue.prototype.$api=axiosConfig;

window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: '4c2e73e2ff55dfbf20af',
//     cluster: 'us2',
//     forceTLS: true
// });

Vue.use(require('vue-moment'));

Vue.use(BootstrapVue);
Vue.use(Toast)
Vue.use(VueSweetalert2);
Vue.use(VueSocialSharing);
Vue.use(VueTouch);
Vue.use(Trend); 
Vue.use(AudioRecorder);
Vue.component('Widget', Widget);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg',
  },
});
Vue.component('apexchart', VueApexCharts);
Vue.mixin(layoutMixin);
Vue.mixin(authMixin);
Vue.use(Toasted, {duration: 10000});
// router.beforeEach((to, from, next) => {
//   let isLoggedIn = JSON.parse(localStorage.getItem("2@39$*8"));
//   if (to.meta.requireAuth) {
//     if (isLoggedIn) {
//       window.document.title = to.meta && to.meta.title ? to.meta.title : 'Home';
//       next();
     
//     } else {
//       next("/login");
//     }
//   }
//   return next();
// });
Vue.config.productionTip = false;

//  navigation guards
// router.beforeEach((to, from, next) => {
//   // let isLoggedIn = localStorage.getItem('auth_info') != null ?  JSON.parse(localStorage.getItem('auth_info')).auth_token :null;
//   // if (to.matched.some(record => record.meta.requiresAuth)) {
//   //   //  Route requires AUth? Check if logged in. If not, redirect to login page
//   //   if(!isLoggedIn || isLoggedIn==null) {
//   //     next({
//   //       name: 'Login'
//   //     })
//   //   } else {
//   //     next()
//   //   }
//   // } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//   //   //  Route requires AUth? Check if logged in. If not, redirect to login page
//   //   if(store.getters.loggedIn) {
//   //     next({
//   //       name: 'AnalyticsPage'
//   //     })
//   //   } else {
//   //     next()
//   //   }
//   // } else {
//   //   next() // make sure to always call next()!
//   // }
// });
Vue.mixin({
  methods: {
    
   

  },
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  vuetify,
  render: h => h(App)
});
