import Vuex from 'vuex'

import Vue from 'vue'

Vue.use(Vuex)

var Base64 = require('js-base64').Base64;
export default new Vuex.Store({

  state: {
    user: {},
    token: null,
    isFullScreen: false,
  },
  mutations: {
    LOGIN: (state, data) => {
      localStorage.token = data.token;
      localStorage.user = data.user
      state.user = JSON.parse(Base64.decode(localStorage.user))
      state.token = localStorage.token;
    },
    LOGOUT: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = null
      state.user = {}
    },
    REFRESH_USER: (state) => {
      state.user = JSON.parse(Base64.decode(localStorage.user))
      state.token = localStorage.token;
    },
  },
  actions: {
    login({commit}, data) {
      commit('LOGIN', data)
    },
    logout({commit}) {
      commit('LOGOUT')
    },
    refresh_user({commit}) {
      commit('REFRESH_USER')
    }
  }
})
