<template>
  <div>
      
    <Navegacion2 v-if="usuario"></Navegacion2>
    <Navegacion v-else></Navegacion>
    
    <router-view/>
    <Coleccion></Coleccion>
    <Footer></Footer>
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue';
import Navegacion2 from './components/Navegacion2.vue';
import Coleccion from './components/Coleccion.vue';
import Footer from './components/Footer.vue';
import firebase from 'firebase';

export default {
  name: 'App',
  components: {
    Navegacion, 
    Navegacion2,
    Coleccion,
    Footer,
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user=>{
      if (user) {
        this.$store.dispatch('idUserLog',user.uid);
      }else{
        console.log("Salida de Usuario")
        this.$store.dispatch('idUserLog','');
      }
    })
  },
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

@import './node_modules/bootstrap/scss/bootstrap.scss';
@import './node_modules/bootstrap-vue/src/index.scss';

/*
$morado-oscuro: #38006b
$morado: 6a1b9a 
*/
</style>