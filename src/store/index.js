import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: '',
    pageForm: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    containResult: 
    {
      one: '',
      two: {
        email: '',
        phone: ''
      },
      three:''
    },
    resultAll: ''
  },

  mutations: {
    collectOne(state, payload) {
      let dataOne = {
        name: payload
      }
      state.containResult.one = dataOne;
    },

    // payload bisa menampung email dan phone
    collectTwo(state, payload) {
      state.pageForm.email = payload.email;
      state.pageForm.phone = payload.phone;
      let dataTwo = {
        email: state.pageForm.email,
        phone: state.pageForm.phone
      }
      state.containResult.two = dataTwo;
    },

    collectThree(state, payload){
      let dataThree = {
        message: payload
      }
      state.containResult.three = dataThree;
    },

    finally(state) {
      state.resultAll=state.containResult
    }
  },
  getters: {
    getResultAll(state) {
      return JSON.stringify(state.resultAll, undefined, 4);
    }
  },
  modules: {},
});
