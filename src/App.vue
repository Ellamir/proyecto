<template>
  <div>
    <!-- <Navegacion2></Navegacion2> -->
    <Navegacion></Navegacion>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue';
// import Navegacion2 from './components/Navegacion2.vue';
import Footer from './components/Footer.vue';
// import firebase from 'firebase';

export default {
  name: 'App',
  components: {
    Navegacion, 
    // Navegacion2,
    Footer,
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user=>{
      if (user) {
        console.log("Usuario logueado")
        this.$store.dispatch('idUserLog',user);
      }else{
        console.log("Salida de Usuario")
        this.$store.dispatch('idUserLog','');
      }
    });
    //this.$store.dispatch('activandoMutacionDB');
  },

}
</script>

<style lang="scss">


</style>