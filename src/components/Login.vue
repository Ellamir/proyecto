<template><!-- Me falta mejorar este form a BSV -->
  <!-- <div class="container">  
    <h1 class="text-center">Login</h1>
    <b-form-group class="mx-auto" @submit.prevent="ingresar">
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
        <label for="password">Password</label> <a @click="restablecer" href="#">¿Olvidaste la contraseña?</a> 
        <input type="password" class="form-control" id="password" v-model="password">
      </div> <router-link to="/registro">Registrate</router-link> -->  
      <div class="mx-auto" pb-5 style="width: 350px">
   <br>   
<div ml-5 pb-3><h1>Log in to access your profile</h1></div>
<br>
<b-form>
    <label class="sr-only" for="email">Email</label>
    <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0 pb-3">
    <b-input id="email" placeholder="Nombre"></b-input> 
    </b-input-group>

    <label class="sr-only" for="inline-form-input-username">Password</label>
    <b-input-group prepend="? " class="mb-2 mr-sm-2 mb-sm-0 pb-3">
      <b-input id="password" placeholder="Password"></b-input>
    </b-input-group>

      <div class="mx-auto" pb-5 style="width: 350px">
<<<<<<< HEAD
      <b-button @click="signin" mx-auto class="boton1">Ingresar con tu usuario</b-button> <!--on click no hace nada-->
      </div>
=======
         <b-button mx-auto @click.prevent="ingresar" class="boton1">Ingresar con tu usuario</b-button>

         <p id="recordatorio" class="recordatorio"><a @click="restablecer" class="recordatorio" href="#">Pincha aquí para restablecer la contraseña</a></p> 
        
       
     </div>
>>>>>>> componentes
    </b-form>

<!-- mensajes instantaneos -->

      <div class="alert alert-danger" role="alert" v-if="error">
        {{error}}
      </div>
      <div class="alert alert-success" role="alert" v-if="userOk">
        {{userOk}}
      </div>

  </div>
</template>

<script>
// import firebase from 'firebase';
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
      if (!this.email || !this.password) {
        this.error = 'Debe ingresar su email y contraseña';
      } else if(this.password.length < 5){
        this.error = 'La contraseña debe ser mayor a 5 digitos'
      }else {
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(()=>{
          this.userOk = 'Usuario correcto';
          setTimeout(()=>{
            this.userOk = '';
            this.$router.push('/profile');    // pasa a vista de usuario
          },1000);
          this.password = '';
          this.email = '';
          this.error = '';
        }).catch((error)=>{
          this.error = '';
          console.error(error);
          if (error.code == 'auth/user-not-found'){
            alert("El usuario no existe en nuestra base de datos");
          }else if(error.code == 'auth/invalid-email'){
            alert("Ingrese un correo valido");
            
          }else if(error.code == 'auth/wrong-password'){
            alert("La contraseña no es válida.\n Puedes solicitar una nueva a tu email \n pinchando en 'Restablecer contraseña'");
          }else {
            alert(error.message);
          }
        })
      }
    },
    
    restablecer(){
<<<<<<< HEAD
      if (this.correo){
        firebase.auth().sendPasswordResetEmail(this.correo).then(function() {
          console.log("enviado")
=======
      if (this.email){
        firebase.auth().sendPasswordResetEmail(this.email).then(function() {
          alert("Correo enviado")
>>>>>>> componentes
        }).catch(function(error) {
          console.error(error);
          if (error.code == 'auth/user-not-found'){
            alert("El usuario no existe en nuestra base de datos");
          }
          else if (error.code == 'auth/invalid-email'){
            alert("Para recuperar contraseña ingrese un correo valido");      // aqui podemos poner mas errores pero hay q revisar la sintaxis
          }
           else if (error.code == 'auth/user-not-found'){
            alert("El usuario no existe en nuestra base de datos");
          }
        });
      }else {
        alert("Se ha producido un error");
      }
    }  */
  }
}
</script>

<style lang="scss" scoped>

h1, .recordatorio, .boton1, .boton1:hover {
  text-align: center;
}

.login {
          text-decoration-color: #000;
        }

.recordatorio{
        color: #38006b;
        font-size: 13px;
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