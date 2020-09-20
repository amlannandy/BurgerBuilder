import { auth } from '../firebase/firebase';
import router from '../router/index';

export default {
  state: {
    user: null,
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
  mutations: {
    authenticate(state, payload) {
      state.user = payload;
      state.isAuthenticated = true;
    },
    logout(state, payload) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  actions: {
    register({ commit }, payload) {
      auth
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((res) => {
          console.log(res);
          commit('authenticate', {
            userId: res.user.uid,
            email: res.user.email,
          });
          router.push('/');
        })
        .catch((error) => {
          commit('addAlert', {
            text: error.message,
            type: 'error',
            duration: 3000,
          });
        });
    },
    login({ commit }, payload) {
      auth
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((res) => {
          console.log(res);
          commit('authenticate', {
            userId: res.user.uid,
            email: res.user.email,
          });
          router.push('/');
        })
        .catch((error) => {
          commit('addAlert', {
            text: error.message,
            type: 'error',
            duration: 3000,
          });
        });
    },
    logout({ commit }) {
      auth
        .signOut()
        .then((res) => {
          commit('logout');
          router.push('/login');
        })
        .catch((error) => {
          commit('addAlert', {
            text: error.message,
            type: 'error',
            duration: 3000,
          });
        });
    },
  },
};
