<template>

       <div class="mx-auto" pb-5 style="width: 350px">
   <br>   
<div ml-5 pb-3><h1>Log in to access your profile</h1></div>
<br>
<b-form-group class="mx-auto" >
<b-form>
    <label class="sr-only" for="email">Email</label>
    <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0 pb-3">
    <b-input v-model="email" id="email" type="email" placeholder="email@server.com"></b-input> 
    </b-input-group>

    <label class="sr-only" for="inline-form-input-username">Password</label>
    <b-input-group prepend="? " class="mb-2 mr-sm-2 mb-sm-0 pb-3">
      <b-input type="password" v-model="password" class="form-control" id="password" placeholder="Password"></b-input>
    </b-input-group>

      <div class="mx-auto" pb-5 style="width: 350px">
        <b-button mx-auto @click.prevent="ingresar" class="boton1">Ingresar con tu usuario</b-button> 
       
     </div>
    </b-form>
</b-form-group>
 <!-- mensajes instantaneos  -->

      <div class="alert alert-danger" role="alert" v-if="error">
        {{error}}
      </div>
      <div class="alert alert-success" role="alert" v-if="userOk">
        {{userOk}}
      </div>

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
            this.$router.push('/tam');
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
      if (this.email){
        firebase.auth().sendPasswordResetEmail(this.email).then(function() {
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

<style lang="scss" scoped>

h1{
  text-align: center;
}
.login {
          text-decoration-color: #000;
        }

.boton1 {
    color:#FFF;
    background:#EC8E4C;
    align-self: center;
    margin-bottom: 50px;
    margin-left: 90px;
    }
    .boton1:hover {
    color:#FFF;
    background:#e9772c;
    // este no es el color correcto, hay q arreglarlo
    }
</style> 