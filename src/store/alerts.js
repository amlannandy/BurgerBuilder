export default {
  state: {
    alerts: [],
  },
  getters: {
    getAlerts(state) {
      return state.alerts;
    },
  },
  mutations: {
    addAlert(state, payload) {
      state.alerts.push(payload);
      setTimeout(() => {
        state.alerts.pop();
      }, payload.duration);
    },
  },
  actions: {
    addAlert({ commit }, payload) {
      commit('addAlert', payload.alert);
    },
  },
};
