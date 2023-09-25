// store/index.js

import BlogApi from '@/api/BlogApi';

const state = {
  count: 12,
};
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
};
const actions = {
  asyncIncrement(context) {
    setTimeout(() => {
      context.commit('increment');
    }, 500);
  },
  asyncDecrement(context) {
    setTimeout(() => {
      context.commit('decrement');
    }, 500);
  },
  async getBlog(){
    try {
      const response = await BlogApi.getBlog();
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

