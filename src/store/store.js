import Vue from 'vue'
import Vuex from 'vuex'

import {/* api ,*/ random} from '../dbDummy'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomHero: {
      images: {
        original: '',
      }
    },
    randomFeature: [],
    featuredQuantity: 4,

  },
  getters: {
    showHeroIMG(state) 
    {
      return state.randomHero.images.original
    },
    showFeature(state)
    {
      return state.randomFeature;
    }
  },
  mutations: {
    dataToRandomHero(state,random) 
    {
      state.randomHero = random;
    },
    dataToRandomFeature(state,randomGame) 
    {
      state.randomFeature.push(randomGame);
    }
  },
  actions: {
    callDataToHero(context) 
    {
      let callRandom = 'random=true';

      async function apiRes () {
        console.log('llamando a la api...');
        const getRandom = await (await apiCall(callRandom)).data.game;
        context.commit('dataToRandomHero', getRandom);
      }
      apiRes()
    },
    callDataToFeature(context)
    {
      context.commit('dataToRandomFeature');
    }
  } 
})
