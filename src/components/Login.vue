<template>
  <div class="container">
    <h1 class="text-center">Login</h1>
    <form @submit.prevent="ingresar">
      <div class="alert alert-danger" role="alert" v-if="error">
        {{error}}
      </div>
      <div class="alert alert-success" role="alert" v-if="userOk">
        {{userOk}}
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Ingrese un Correo Electrónico</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password">
      </div>
      <a @click="restablecer" href="#">Olvidé la contraseña</a> | 
    <router-link to="/registro">Registrate</router-link>
      <button type="submit" class="btn btn-primary">Ingresar</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Login',
  data() {
    return {
      password: '',
      email: '',
      error: '',
      userOk: ''
    }
  },
  methods: {
    ingresar(){
      if (!this.email && !this.password) {
        this.error = 'Debe ingresar los datos del usuario';
      } else if(this.password.length < 6){
        this.error = 'La contraseña debe ser mayor a 6 digitos'
      }else {
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(()=>{
          this.userOk = 'Usuario correcto';
          setTimeout(()=>{
            this.userOk = '';
            this.$router.push('/');
          },3000);
          this.password = '';
          this.email = '';
          this.error = '';
        }).catch((error)=>{
          this.error = '';
          console.error(error);
          if (error.code == 'auth/user-not-found'){
            alert("El usuario no existe en nuestra base de datos");
          }else if(error.code == 'auth/wrong-password'){
            alert("La contraseña no es válida o el usuario no tiene una contraseña.");
          }else {
            alert(error.message);
          }
        })
      }
    },
    
    restablecer(){
      if (this.correo){
        firebase.auth().sendPasswordResetEmail(this.correo).then(function() {
          console.log("enviado")
        }).catch(function(error) {
          console.error(error);
          if (error.code == 'auth/user-not-found'){
            alert("El usuario no existe en nuestra base de datos");
          }
        });
      }else {
        alert("Para recuperar contraseña ingrese un correo valido");
      }
    } 
  }
}
</script>