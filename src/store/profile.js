import { db } from '../firebase/firebase';
import router from '../router/index';

// Profile
// Name
// Phone Number
// Email Address
// Addresses
// Pincode

export default {
  state: {
    loading: false,
    profile: null,
  },
  getters: {
    getProfile(state) {
      return state.profile;
    },
    getLoading(state) {
      return state.loading;
    },
  },
  mutations: {
    fetchProfile(state, payload) {
      state.profile = payload;
    },
    updateProfile(state, payload) {
      state.profile = payload;
    },
    switchLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    fetchProfile({ commit, state, rootState }, payload) {
      commit('switchLoading', true);
      db.collection('users')
        .doc(rootState.auth.user.userId)
        .get()
        .then((res) => {
          if (res.exists) {
            commit('fetchProfile', res.data());
          } else {
            commit('fetchProfile', null);
          }
          commit('switchLoading', false);
        })
        .catch((error) => {
          commit('switchLoading', false);
          commit('addAlert', {
            text: error.message,
            type: 'error',
            duration: 3000,
          });
        });
    },
    addProfile({ commit, rootState }, payload) {
      db.collection('users')
        .doc(rootState.auth.user.userId)
        .set(payload)
        .then((res) => {
          commit('updateProfile', payload);
          router.push('/account');
        })
        .catch((error) =>
          commit('addAlert', {
            text: error.message,
            type: 'error',
            duration: 3000,
          })
        );
    },
  },
};
