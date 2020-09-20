import Vue from 'vue';
import './registerServiceWorker';
import Vuelidate from 'vuelidate';

import store from './store';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { auth } from './firebase/firebase';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

let app;
auth.onAuthStateChanged((user) => {
  if (user) {
    store.state.auth.isAuthenticated = true;
    store.state.auth.user = { email: user.email, userId: user.uid };
  }
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
