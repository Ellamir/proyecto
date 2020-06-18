<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Ludoteca</router-link>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          
            <ul class="navbar-nav mx-auto">
              <li> <!--search bar-->

<div class="input-group mb-8 mx-auto">
  <input type="text" class="form-control" placeholder="Busca un juego">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button"><span class="mb-1 material-icons">search
</span></button>
  </div>
</div>
              </li></ul>
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/registro">Registro</router-link>
                </li>
            </ul>
        </div>
    </nav>
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
$bg-dark: #38006b
</style>