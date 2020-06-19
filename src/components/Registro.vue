<template>
  <div class="mx-auto">
        <h1>Registro de nuevo usuario</h1>
        
        <label for="nombre">Ingrese un nombre de usuario: </label>
        <input type="text" v-model="userName" placeholder="Ingrese su nombre"><br>
        
        <label for="email">Ingrese el correo electrónico: </label>
        <input type="email" v-model="correo" placeholder="Ingrese su correo"><br>
        
        <label for="clave">Ingrese la contraseña: </label>
        <input type="password" v-model="clave" placeholder="Ingrese clave elegida"><br>
        
        <button @click="userRegister">Registrar</button>
        <br>
        <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
// import firebase from 'firebase';
export default {
    name: 'Registro',
    data() {
        return {
            correo: '',
            clave: '',
            userName: ''
        }
    },
    methods: {
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