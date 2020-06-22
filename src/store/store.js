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
    agregandoId(state,idRecibido){
      state.uidUser = idRecibido;
    },



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

    idUserLog(context,dataUsuarioRecibido){
      context.commit('agregandoId',dataUsuarioRecibido);
    },





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
      let callRandom = 'random=true';

      const apiRes = async () => {
        for(let i = 0; i < 4; i++) 
        {
          console.log('llamando a la api...');
          const getRandom = await (await apiCall(callRandom)).data.game;
          console.log('la data',getRandom);
          context.commit('dataToRandomFeature',getRandom);
        }
      }
      apiRes()
    }
  } 
})
