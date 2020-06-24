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
                context.commit('addToFavorites', id);
                firebase.firestore().collection(firebase.auth().currentUser).set({
                  id: "this.$store.myFavs.gameID",
                }).then(()=>{
                  console.log("Agregado a favorito");
                  let cambioFav = this.$store.state.myFavs.filter(item => item.id === this.$store.myFavs.gameID)
                  console.log(cambioFav);
                  cambioFav.favorito = true;
                  console.log(this.$store.state.myFavs)
                }).catch(err => console.error(err))
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
        accionarDB(){  // crear documentos con ID's = array myFavs
                
                this.myFavs.forEach(crearDocs => {
                 let argumento = firebase.auth().currentUser.uid
                 console.log(argumento)
                 console.log(crearDocs)
                 firebase.firestore().collection("Ludoteca").doc(argumento).collection("My Game Collection").doc(crearDocs).set({ gameFav : true });
                });
        },
         revisarDB(){  // trae todos los documentos (ID juegos) y sus propiedades (siempre son fav true en este caso)
            let argumento = firebase.auth().currentUser.uid 
            firebase.firestore().collection("Ludoteca").doc(argumento).collection("My Game Collection").get().then(function(querySnapshot) {
            //console.log(querySnapshot.docs[0].id) 
            let favArray = []            
            querySnapshot.forEach(function(doc) {
                favArray.push(doc.id)
                console.log(favArray)
            // favArray es el que debe pasar a myFavs
            
            console.log(doc.id, " => ", doc.data());
            
            });
            });
        }
    }
})