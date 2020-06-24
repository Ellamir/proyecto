import Vue from 'vue'
import Vuex from 'vuex'

import { apiCall } from '../config/conexionApi'
//import { db } from "../main";
import firebase from 'firebase';

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
            myFavs:[]
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
        isFavorite(state)
        {
            return gameID => 
            {
                return state.myFavs.includes(gameID);
            }
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
        },
        clearFeatured(state)
        {
            state.randomFeature = [];
        },
        dataToPopularToday(state,popularGame)
        {
            state.popularToday = popularGame;
        },
        addToFavorites(state, gameID)
        {
            state.myFavs.push(gameID);
        },
        agregandoId(state,idRecibido){
          state.uidUser = idRecibido;
        },
        pasandoFavs(state, favArray){
            state.myFavs = favArray;
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
            if(!this.getters.isFavorite(id))
            {
                const saveGame = gID => {
                    let uID = firebase.auth().currentUser.uid
                    firebase.firestore().collection("Ludoteca")
                        .doc(uID).collection("My Game Collection")
                            .doc(gID).set({ gameFav : true });
                }

                saveGame(id);
                context.dispatch('revisarDB');
            }
            else
            {
                console.log(`El ID ${id} ya está registrado`)
            }
        },
        idUserLog(context,dataUsuarioRecibido){
          context.commit('agregandoId',dataUsuarioRecibido);
        },
        
        bringFavorites(context, gameIDs)
        {
            console.log('Game IDs: ',gameIDs);
            let favorites = `ids=${gameIDs}`;

            const apiRes = async () => {
                const getFavs = await (
                    await apiCall(favorites)
                ).data.games;
                console.log('Esto es getFavs',getFavs)
                return getFavs;
            }

            return apiRes();
        },
         revisarDB(context){  
            let firebaseAuth = firebase.auth();
            console.log('El firebase auth', firebaseAuth);

            let currentUser = this.state.uidUser;
            console.log('El current user', currentUser);

            let uID = firebase.auth().currentUser.uid   // documento corresponde al ID del usuario
            console.log('El uID',uID)

            firebase.firestore().collection("Ludoteca")
                .doc(uID).collection("My Game Collection")
                .get().then(function(querySnapshot) {
                    let favArray = []       

                    querySnapshot.forEach(function(doc) {
                        favArray.push(doc.id)
                    // favArray es el que debe pasar a myFavs
                    });

                    context.commit("pasandoFavs", favArray)
                });
        }
    }
})