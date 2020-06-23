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
    myFavs:[],
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
    },
    showFavs(state)
    {
      return state.myFavs;
    },

  },
  mutations: {
    dataToRandomHero(state,random) 
    {
      state.randomHero = random;
    },
    dataToRandomFeature(state,randomGame) 
    {
      state.randomFeature.push(randomGame);
    },
    clearFeatured(state)
    {
      state.randomFeature = [];
    },
    dataToPopularToday(state,popularGame)
    {
      state.popularToday = popularGame;
    },
    addToFavorites(state, game)
    {
      state.myFavs.push(game);
    }
  },
  actions: {
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
      context.commit('clearFeatured')

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
    },
    callFavorites(context,id)
    {
      let selectedGame = `ids=${id}`;
      // la llamada es parte de otra funcion.
      // Pasar selectedGame directo como un string al arreglo
      const apiRes = async () => {
        const getFav = await (
          await apiCall(selectedGame)
        ).data.games[0];
        context.commit('addToFavorites', getFav);
      }

      apiRes();
    }
  } 
})
