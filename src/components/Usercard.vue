<template>
    <div>
        
        
       

<!--  
 <div>
            <b-card bg-variant="light">
                <b-form-group >

                   
               
                <b-img left :src="photoURL" rounded py-auto alt="Left image"></b-img>
                
                

                <b-form-group
                    label-cols-sm="3"
                    label="Name:"
                    label-align-sm="right"
                    label-for="name"
                >
                    <b-form-input id="name" v-model="name" class="mayusculas"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="3"
                    label="Email"
                    label-align-sm="right"
                    label-for="email"
                >
                    <b-form-input id="email" v-model="email"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="3"
                    label="Password:"
                    label-align-sm="right"
                    label-for="password"
                >
                    <b-form-input type="password" v-model="clave" id="password"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="3"
                    label="Imagen de perfil:"
                    label-align-sm="right"
                    label-for="photoURL"
                >
                    <b-form-input id="photoURL" v-model="photoURL"></b-form-input><br>
                    <p class="small">Recomendamos usar <a href="https://es.gravatar.com/">Gravatar</a> para desplegar imágenes de perfil.</p>
                </b-form-group>

                
                </b-form-group>
            </b-card>
            </div>

 <div id="franjasaludo" class="morado text-white">


        <p @click="saludo"> Saludar en el console log </p>
        <h1 class="hola" v-html="hola"></h1>
        <b-img :src="Uri" rounded="circle" alt="algo"/> <span>Foto en Firebase, desde el Mounted - el gravatar de 200px importado en la creacion de usuario</span> 
        <br><br>
        <b-avatar :src="Uri" /> <span>Avatar bootstrap desde foto firebase (1rem)</span> 
        <br><br>
        <b-avatar :src="Uri" rounded style="font-size: 4rem;"></b-avatar> <span>Avatar bootstrap en firebase, avatar rounded 4rem</span> 
        </div>  -->



     
    <div class="container my-5">
        <h2>User Profile</h2>
        <div class="cuadroNaranjo"></div>
        
            <b-card title="Your account information" >
                 <b-img center :src="photoURL" rounded="circle" alt="foto"></b-img>
                
                 <div class="center"><br>
                <h3 center class="mayusculas center" v-html="name"></h3>
                <p class="center" v-html="email"></p>
                <br>           
                <!-- <b-button @click="userRegister" my-5 class="ml-auto boton1">Actualizar</b-button> -->
                <b-button @click="verColeccion" my-5 mx-auto class="center boton1">My game collection</b-button>
                </div>
                
     
            </b-card>
        
    </div>



  
        


    </div>
    

</template>

<script>

import firebase from 'firebase';
//import md5 from 'js-md5';
//protected $appends = ['gravatar'];


export default {
    
    name: 'Usercard',
    components: {
       
    },

    data() {
            return {
            //gravatarURL: 'https://es.gravatar.com/avatar/HASH-STRING?s=200&d=mp'   
            gravatarURL: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=mp',  //fantasma default
            hola: '',
            foto: '',
            Uri: '',
            name: '', 
            email: '', 
            photoUrl: '', 
            uid: '',
            clave: '',
            }
    },


    beforeMount() {
      if (this.$store.state.uidUser) {
          var user = firebase.auth().currentUser;
          //var name, email, photoUrl, uid, Uri;

            if (user != null) {
            this.name = user.displayName;
            this.email = user.email;
            this.Uri = user.photoURL;
            this.clave = user.password;
            //  emailVerified = user.emailVerified;
            this.photoURL = user.photoURL;  
            }




            }else{
                this.$router.push('/access');
            }
  },

    
    
    
    
}

</script>

<style lang="scss" scoped>
h2 {
    border-bottom: 1px solid #727272;
    margin-bottom: 0;
}
.cuadroNaranjo {
    margin-bottom: 1rem;
    
    &:after{
        content: " ";
        display: block;
        height: 6px;
        max-width: 55px;
        background: #EC8E4C;
    }
}

.mayusculas { text-transform: capitalize; }

.boton1 {
    color:#FFF;
    background:#FFA040;
    }
    .boton1:hover {
    color:#FFF;
    background:#EC8E4C;
    
    }
.center {
    text-align: center;
}

</style>