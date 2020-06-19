<template>
  <div>
      
    <!-- <Navegacion2 v-if="usuario"></Navegacion2> -->
    <Navegacion></Navegacion>
    
    <router-view/>
    <Coleccion></Coleccion>
    <Footer></Footer>
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue';
// import Navegacion2 from './components/Navegacion2.vue';
import Coleccion from './components/Coleccion.vue';
import Footer from './components/Footer.vue';
// import firebase from 'firebase';

export default {
  name: 'App',
  components: {
    Navegacion, 
    // Navegacion2,
    Coleccion,
    Footer,
  },
  mounted() {
    /* firebase.auth().onAuthStateChanged(user=>{
      if (user) {
        this.$store.dispatch('idUserLog',user.uid);
      }else{
        console.log("Salida de Usuario")
        this.$store.dispatch('idUserLog','');
      }
    }) */
  },
}
</script>

<style lang="scss">


</style>