import Vue from 'vue';
import Vuex from 'vuex';

import alertsModule from './alerts';
import authModule from './auth';
import profileModule from './profile';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alerts: alertsModule,
    auth: authModule,
    profile: profileModule,
  },
});
