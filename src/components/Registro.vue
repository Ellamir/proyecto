<template>
<div class="mx-auto pt-5 pb-5"> 
    <!-- Necesito ayuda para centrar este titulo.-->
     <!-- No lleva color aquí sino que en la vista/componente que lo contiene -->
    <div class="mx-auto" style="width: 330px;"><h1>Sign up for more!</h1></div>
  <b-container fluid>
    <b-form-row>
        
      <!-- Email (Auth) -->
      <!-- Aqui tambien podriamos poner una validación de si el usuario ya existe, avisar -->
          <b-form-group class="mx-auto" label-for="correo">
                <b-form-input class="campo" id="email" v-model="correo" type="email" placeholder="Email"
                lazy-formatter :formatter="formatter"></b-form-input> </b-form-group>
    </b-form-row>

      <!-- Password (Auth) -->
    <b-form-row>
        <b-form-group class="mx-auto" label-for="clave">
        <b-form-input class="campo" id="clave" v-model="clave" :state="nameState"
          aria-describedby="input-live-help input-live-feedback" placeholder="Contraseña"
          trim>  </b-form-input> </b-form-group>

        <b-form-invalid-feedback id="input-live-feedback">
        Enter at least 3 letters  <!-- se supone q esto se ve si no se cumple la condicion -->
        </b-form-invalid-feedback>
    </b-form-row>

    <b-form-row>

        <!-- Username (Perfil) -->
      
          <b-form-group class="mx-auto" label-for="userName">
                <b-form-input class="campo" id="userName" v-model="userName" type="userName" placeholder="Nombre de usuario"
                lazy-formatter :formatter="formatter"></b-form-input> </b-form-group>

    </b-form-row>



    <!-- botones del final --> 
    <b-form-row>
       
      <div class="mx-auto" style="width: 350px">
         <b-form inline> 
<b-form-checkbox class="mr-auto mb-2 mr-sm-2 mb-sm-0">Accept terms</b-form-checkbox>

    <b-button @click="userRegister" class="ml-auto boton1">Sign up!</b-button> <!--on click no hace nada-->
  </b-form>

    </div>
        
    <!-- <router-link to="/login" class="mx-auto mejorlogin">Si ya estás registrado, 
    puedes ingresar al sitio</router-link> -->
      
    
    </b-form-row>
  </b-container>
</div>

</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Registro',

    watch: {   
      clave() {   
        this.nameState = this.clave.length > 5 ? true : false
      }
    },
    
    data() {
        return {
        correo: '',
        clave: '',
        userName: '',
        nameState: null, 
      }
    },
   
    methods: {
        // cambia valor ingresado a todo minusculas
        formatter(value) {
        return value.toLowerCase()
        },


          userRegister(){
            if (this.userName && this.correo && this.clave){
                firebase.auth().createUserWithEmailAndPassword(this.correo, this.clave).then(response=>{
                    console.log(response.user)
                    return response.user.updateProfile({
                        displayName: this.userName
                    }).then(()=>{
                        this.correo = '';
                        this.userName = '';
                        this.clave = '';
                        this.nameState = null;
                        this.$router.push('/');
                    })
                }).catch(error => console.error(error))
            }else{
                alert("Ingrese un correo y una contraseña");
            }
        } 
    },
}
</script>

<style lang="scss" scoped>


.campo{
        width: 350px;
}
.mini {
        text-align: center;
        width: 380px;
        
}

.boton1 {
    color:#FFF;
    background:#FFA040;
    }
    .boton1:hover {
    color:#FFF;
    background:#EC8E4C;
    
    }
</style>