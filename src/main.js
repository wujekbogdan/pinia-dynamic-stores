import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { createPinia, PiniaPlugin } from 'pinia';
import App from './App.vue';
import router from './router';

Vue.use(VueCompositionAPI);
Vue.use(PiniaPlugin);

const pinia = createPinia();

Vue.config.productionTip = false;

localStorage.setItem('settings', JSON.stringify({
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
  source: 'local',
}));

new Vue({
  pinia,
  router,
  render: (h) => h(App),
}).$mount('#app');
