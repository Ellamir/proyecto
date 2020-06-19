<template>
  <div>
      
    <Navegacion2 v-if="user"></Navegacion2> <!-- hay que reemplazar el estado correcto -->
    <Navegacion v-else></Navegacion>
    
    
    <router-view/>
    <!-- <Coleccion></Coleccion> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue';
// import Navegacion2 from './components/Navegacion2.vue';
import Footer from './components/Footer.vue';
import firebase from 'firebase';

export default {
  name: 'App',
  components: {
    Navegacion, 
    // Navegacion2,
    // Coleccion,
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
  // firebase.auth().onAuthStateChanged(dato=>{
  //     if(dato){
  //       this.usuario = dato.displayName;
  //       this.correoUser = dato.email;
  //       this.uid = dato.uid;
  //       console.log(dato.emailVerified);
  //       if (!dato.emailVerified){
  //           dato.sendEmailVerification().then(function() {
  //           console.log("correo enviado")
  //           console.log(dato.emailVerified);
  //         }).catch(function(error) {
  //           console.log(error);
  //         });
  //       }
  //     }else{
  //       this.usuario = '';
  //     }
  //   })
  // },
}
</script>

<style lang="scss">


</style>