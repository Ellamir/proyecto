

<template>
<div class="mx-auto">
  <b-container>
    <b-row class="my-2" sm="9">
      <!-- Email (Auth) -->
      <!-- Aqui tambien podriamos poner una validación de si el usuario ya existe, avisar -->
          <b-form-group class="mx-auto" label-for="email" description="Tu correo electrónico">
                <b-form-input class="campo" id="email" v-model="correo" type="email" placeholder="Email"
                lazy-formatter :formatter="formatter"></b-form-input> </b-form-group>
      </b-row>

      <!-- Password (Auth) -->
<b-row class="my-2" sm="9">
    <b-form-group class="mb-0" label-for="email" description="Contraseña de al menos 6 caracteres">
        <b-form-input class="campo" id="clave" v-model="clave" :state="nameState"
      aria-describedby="input-live-help input-live-feedback" placeholder="Contraseña"
      trim>  </b-form-input> </b-form-group>

    
    <b-form-invalid-feedback id="input-live-feedback">
      Enter at least 3 letters  <!-- se supone q esto se ve si no se cumple la condicion -->
    </b-form-invalid-feedback>

    
</b-row>

<b-row class="my-1" sm="9">

        <!-- Username (Perfil) -->
      
          <b-form-group class="mb-0" label-for="userName" description="El nombre que será visible en este sitio">
                <b-form-input class="campo" id="userName" v-model="userName" type="userName" placeholder="Nombre de usuario"
                lazy-formatter :formatter="formatter"></b-form-input> </b-form-group>

</b-row>

<!-- botones del final --> 
     <a href=# @click="userRegister">Registrar</a> | 
        
        <router-link to="/login">Si ya estás registrado, puedes ingresar al sitio</router-link>
  </b-container>

  </center>
</template>

<script>
// import firebase from 'firebase';
export default {
    computed: {   
      nameState() {   // esto no está funcionando por ahora no se pq
        return this.clave.length > 3 ? true : false
      }
    },
    name: 'Registro',
    data() {
        return {
        email: '',
        clave: '',
        userName: '',
      }
    },
   
    methods: {
        // cambia valor ingresado a todo minusculas
        formatter(value) {
        return value.toLowerCase()
        },


        /* userRegister(){
            if (this.userName && this.correo && this.clave){
                firebase.auth().createUserWithEmailAndPassword(this.correo, this.clave).then(response=>{
                    console.log(response.user)
                    return response.user.updateProfile({
                        displayName: this.userName
                    }).then(()=>{
                        this.correo = '';
                        this.userName = '';
                        this.clave = '';
                        this.$router.push('/');
                    })
                }).catch(error => console.error(error))
            }else{
                alert("Ingrese un correo y una contraseña");
            }
        } */
    },
}
</script>

<style lang="scss" scoped>
.campo{
        width: 350px;
}
.bloque-login {
        text-align: center;
        width: 380px;
}
</style>