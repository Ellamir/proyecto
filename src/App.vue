<template>
  <div>
    <Navegacion></Navegacion>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue';
import Footer from './components/Footer.vue';
import firebase from 'firebase';

export default {
  name: 'App',
  components: {
    Navegacion, 
    Footer,
  },
  mounted() {
    firebase.auth().onAuthStateChanged( user => 
    {
      if (user) 
      {
        // console.log("Usuario logueado")
        this.$store.dispatch('idUserLog',user);
      }
      else
      {
        // console.log("Salida de Usuario")
        this.$store.dispatch('idUserLog','');
      }
    });
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap');
* {
  font-family: 'Exo 2', sans-serif;
}
</style>