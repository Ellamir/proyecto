<template>
<div class="mx-auto pt-5 pb-5"> 
    <!-- Necesito ayuda para centrar este titulo.-->
     <!-- No lleva color aquí sino que en la vista/componente que lo contiene -->
     
  <b-container fluid>
    <b-form-row>
        <div class="alert alert-success mx-auto" style="width: 350px;" role="alert" block v-if="userOk">
        {{userOk}}
      </div>
      <div class="alert alert-danger mx-auto" style="width: 350px;" role="alert" v-else-if="error">
        Se ha producido un error. {{error}}
      </div>
    <div class="mx-auto" v-else style="width: 330px;"><h1>Sign up for more!</h1></div>
    </b-form-row>
    <b-form-row>
      <!-- Email (Auth) -->
      <!-- Aqui tambien podriamos poner una validación de si el usuario ya existe, avisar -->
          <b-form-group class="mx-auto" label-for="correo">
                <b-form-input class="campo" id="correo" v-model="correo"  :state="mailState" placeholder="Email"
               lazy-formatter :formatter="formatter"></b-form-input> </b-form-group>
    </b-form-row>

      <!-- Password (Auth) -->
    <b-form-row>
        <b-form-group class="mx-auto" label-for="clave">
        <b-form-input class="campo" id="clave" v-model="clave" :state="passState"
          aria-describedby="input-live-help input-live-feedback" type="password" placeholder="Contraseña"
          trim>  </b-form-input> </b-form-group>

        <b-form-invalid-feedback id="input-live-feedback">
        Enter at least 3 letters  <!-- se supone q esto se ve si no se cumple la condicion -->
        </b-form-invalid-feedback>
    </b-form-row>

    <b-form-row>

        <!-- Username (Perfil) -->
      
          <b-form-group class="mx-auto" label-for="userName">
                <b-form-input class="campo" id="userName" v-model="userName" :state="nameState" placeholder="Nombre de usuario"
                lazy-formatter :formatter="formatter"></b-form-input> </b-form-group>

    </b-form-row>



    <!-- botones del final --> 
    <b-form-row>
       
      <div class="mx-auto" style="width: 350px">
         <b-form inline> 
<b-form-checkbox class="mr-auto mb-2 mr-sm-2 mb-sm-0">Accept terms</b-form-checkbox>

    <b-button @click="userRegister" class="ml-auto boton1">Sign up!</b-button> <!--on click no hace nada-->
  </b-form>
<br>



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
        this.passState = this.clave.length > 5 ? true : false
      },
      correo() {   
        const emailRe = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        this.mailState = emailRe.test(this.correo) ? true : false
      },
      userName() {   
        this.nameState = this.userName.length > 0 ? true : false
      }
    },
    
    data() {
        return {
        correo: '',
        clave: '',
        userName: '',
        mailState: null,
        passState: null, 
        nameState: null,
        error: '',
        userOk: ''
      }
    },
   
    methods: {
     



        // cambia valor ingresado a todo minusculas con  return value.toLowerCase()
        formatter(value) {
        return value.toLowerCase().trim();//espero q esto ademas le saque aires sobrantes
        },


          userRegister(){
            if (this.userName && this.correo && this.clave){
              this.error = '';
                firebase.auth().createUserWithEmailAndPassword(this.correo, this.clave).then(response=>{
                    console.log(response.user)
                    return response.user.updateProfile({
                        displayName: this.userName
                    }).then(()=>{
                      this.mailState = null;
                      this.passState = null;
                      this.nameState = null;
                      this.userOk = 'Usuario creado, ya puedes ingresar';
                      
                          setTimeout(()=>{
                            this.mailState = null;
                            this.passState = null;
                            this.nameState = null;
                            this.correo = '';
                            this.userName = '';
                            this.clave = '';
                            this.userOk = '';
                            this.error = '';
                            this.$router.push('/tam');  //pasa directo a perfil
                          },1000);
                        
                    })
                }).catch(error => console.error(error))
            //  this.error = 'Si creaste usuario, prueba a ingresar'
             setTimeout(()=>{
                            
                            this.correo = '';
                            this.userName = '';
                            this.clave = '';
                            this.userOk = '';
                            this.error = '';
                            this.$router.push('/access');  //pasa al login
                          },1000);
            }else{
                this.error = 'Crea usuario con email, contraseña y nombre';
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