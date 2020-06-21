<template>
<div>
  <b-navbar toggleable="lg" type="dark" class="oscuro">
    <b-navbar-brand href="#">
      <router-link class="b-navbar-brand" to="/"><b-img src="http://dragon.cl/portafolio/ludoteca/ludoteca.png"></b-img></router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     

      <!-- center aligned nav items -->
      <b-navbar-nav class="mx-auto">
        
          <b-nav-form>
       <b-input-group size="sm" class="mb-2">
     
      <b-form-input type="search" placeholder="Buscas un juego?"></b-form-input>
       <b-input-group-append is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-append>
    </b-input-group>
        </b-nav-form>

       
      </b-navbar-nav>

      <b-navbar-nav>  <!-- Links de navegación están TODOS y en orden secuencial por ahora -->
        <b-nav-item href="#"><router-link class="nav-link" to="/signup">Sign Up!</router-link></b-nav-item>
        <b-nav-item href="#"><router-link class="nav-link" to="/access">User Access</router-link></b-nav-item>
        <b-nav-item href="#"><router-link class="nav-link" to="/tam">PERFIL</router-link></b-nav-item>
        <b-nav-item href="#"><li class="nav-link" @click="salida" to="/">Logout</li></b-nav-item> 
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Navegacion',
  methods: {
     salida(){
      firebase.auth().signOut().then(()=>{
        console.log("salida de usuario")
        this.$router.push('/access');
      })
    } 
  },
}
</script>

<style lang="scss" scoped>
.oscuro{
        background-color: #38006b;
}
</style> 