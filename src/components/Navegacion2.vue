<template>
<div>
  <b-navbar toggleable="lg" type="dark" class="oscuro">
    <b-navbar-brand href="#">
      <router-link class="b-navbar-brand" to="/">Ludoteca</router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     

      <!-- center aligned nav items -->
      <b-navbar-nav class="mx-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

       
      </b-navbar-nav>
 <b-navbar-nav>
         <b-nav-item href="#">
            <router-link class="nav-link" to="/">Perfil</router-link></b-nav-item>
        <b-nav-item href="#"><router-link class="nav-link" @click="salida" to="/login">Logout</router-link></b-nav-item>
       <!-- <b-nav-item href="#"><router-link class="nav-link" to="/registro">Registro</router-link></b-nav-item>-->
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
        this.$router.push('/login');
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