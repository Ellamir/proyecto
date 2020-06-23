import Vue from 'vue'
import Vuex from 'vuex'

import { apiCall } from '../config/conexionApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    uidUser: '',



    randomHero: {
      images: {
        original: '',
      }
    },
    randomFeature: [],
    featuredQuantity: 4,
    popularToday:{},
  },
  getters: {
    showHeroIMG(state) 
    {
      return state.randomHero.images.original
    },
    showFeature(state)
    {
      return state.randomFeature;
    },
    showPopular(state)
    {
      return state.popularToday;
    }
  },
  mutations: {
    agregandoId(state,idRecibido){
      state.uidUser = idRecibido;
    },



    dataToRandomHero(state,random) 
    {
      state.randomHero = random;
    },
    dataToRandomFeature(state,randomGame) 
    {
      state.randomFeature = [],
      state.randomFeature.push(randomGame);
    },
    dataToPopularToday(state,popularGame)
    {
      state.popularToday = popularGame;
    }
  },
  actions: {

    idUserLog(context,dataUsuarioRecibido){
      context.commit('agregandoId',dataUsuarioRecibido);
    },

    



    callDataToHero(context) 
    {
      let callRandom = 'random=true';

      async function apiRes () {
        const getRandom = await (
          await apiCall(callRandom)
        ).data.game;
        context.commit('dataToRandomHero', getRandom);
      }
      apiRes()
    },
    callDataToFeature(context)
    {
      let callRandom = 'random=true';

      const apiRes = async () => {
        for(let i = 0; i < 4; i++) 
        {
          const getRandom = await (
            await apiCall(callRandom)
          ).data.game;
          context.commit('dataToRandomFeature',getRandom);
        }
      }
      apiRes()
    },
    callPopularToday(context)
    {
      let callPopular = 'order_by=popularity';

      const apiRes = async () => {
        const getPopular = await (
          await apiCall(callPopular)
        ).data.games[0];
        context.commit('dataToPopularToday', getPopular);
      }

      apiRes();
    }
  } 
})
