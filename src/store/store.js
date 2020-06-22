import Vue from 'vue'
import Vuex from 'vuex'
import { apiCall } from '../config/conexionApi'

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
    },
    callPopularToday(context)
    {
      let callPopular = 'order_by=popularity';

      const apiRes = async () => {
        const getPopular = await (await apiCall(callPopular)).data.games[0];
        console.log(getPopular);
        context.commit('dataToPopularToday', getPopular);
      }

      apiRes();
    }
  } 
})
