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
/* no recuerdo como sobrescribir colores de bootstrap :(  */
@import './node_modules/bootstrap/scss/bootstrap.scss';
@import './node_modules/bootstrap-vue/src/index.scss';

/*
$morado-oscuro: #38006b
$morado: 6a1b9a 
*/
</style>