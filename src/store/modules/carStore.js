// store/index.js

import CarApi from '@/api/CarApi';

const state = {
  cars: [],
  id: 0,
};
const mutations = {
  setcars(state, data) {
    state.cars = data;
  },
  setId(state, id) {
    state.id = id;
  },
};
const actions = {
  async getCars({ commit }, { page }) {
    try {
      const response = await CarApi.getCar({ page });
      commit('setcars', response.data.items);
    } catch (error) {
      console.log(error);
    }
  },
  async updateCar({ commit }, { id, data }) {
    try {
      await CarApi.updateCar({ id, data });
    } catch (error) {
      console.log(error);
    }
  },
  async createCar({ commit }, { data }) {
    try {
      const res = await CarApi.createCar({ data });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteCar({ commit }, { id }) {
    try {
      await CarApi.deleteCar({ id });
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
