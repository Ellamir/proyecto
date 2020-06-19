import Vue from 'vue'
import Vuex from 'vuex'

import {/* api ,*/ random} from '../dbDummy'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomHero:{},
    randomFeature: [],
    featuredQuantity: 4,

  },
  getters: {
    showHero(state) 
    {
      return state.randomHero;
    },
    showFeature(state)
    {
      return state.randomFeature;
    }
  },
  mutations: {
    dataToRandomHero(state) 
    {
      state.randomHero = {};
      let apiRandom = random.game;
      // hacer un fetch con promesa

      state.randomHero = apiRandom;
    },
    dataToRandomFeature(state) 
    {
      state.randomFeature = [];

      for(let i = 0; i < state.featuredQuantity; i++) 
      {
        let apiRandom = random.game;
        // fetch con promesa
  
        state.randomFeature.push(apiRandom);
      }
    }
  },
  actions: {
    callDataToHero(context) 
    {
      context.commit('dataToRandomHero');
    },
    callDataToFeature(context)
    {
      context.commit('dataToRandomFeature');
    }
  } 
})
