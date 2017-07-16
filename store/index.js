import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  const releases = require('../router/releases.json')

  return new Vuex.Store({
    state: {
      h1: null,
      sidebar: true,
      currentColor: 'transparent',
      previous: {
        name: 'Components',
        color: 'primary',
        route: '/components'
      },
      next: {
        name: 'Breadcrumbs',
        color: 'green',
        route: '/components/breadcrumbs'
      },
      releases,
      release: '0.14'
    },

    actions: {},

    mutations: {
      'vuetify/COLOR' (state, payload) {
        state.currentColor = payload
      },

      'vuetify/PREVIOUS' (state, payload) {
        state.previous = payload
      },

      'vuetify/NEXT' (state, payload) {
        state.next = payload
      },

      'vuetify/SIDEBAR' (state, payload) {
        state.sidebar = payload
      },

      'vuetify/H1' (state, payload) {
        state.h1 = payload
      }
    },

    getters: {}
  })
}
