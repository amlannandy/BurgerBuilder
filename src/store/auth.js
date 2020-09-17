export default {
  state: {
    user: [],
    isAuthenticated: false,
  },
  getters: {
    getAuthStatus(state) {
      return state.isAuthenticated;
    },
    getUser(state) {
      return state.user;
    },
  },
};
