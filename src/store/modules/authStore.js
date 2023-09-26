const state = {
  isLogin: false,
};
const mutations = {
  toggle(state, payload) {
    state.isLogin = payload.status;
  },
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
