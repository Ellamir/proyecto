<template>
<div>

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
                <b-button @click="revisarDB" my-5 mx-auto class="center boton1">My game collection</b-button>
            </div>
                
        </b-card>
        
    </div>

</div>
</template>

<script>

import {mapActions} from 'vuex';
import firebase from 'firebase';
//import md5 from 'js-md5';

export default {
    
    name: 'Usercard',
    components: {
    
    },
    computed: {
    myFavs() {
    return this.$store.state.myFavs;
    
    },
    },
    methods: {
        
        ...mapActions([
            'accionarDB',
            'revisarDB'
        ]),


    },
    data() {
            return {
            //gravatarURL: 'https://es.gravatar.com/avatar/HASH-STRING?s=200&d=mp'   
            // gravatarURL: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=mp',  //fantasma default
            hola: '',
            foto: '',
            Uri: '',
            name: '', 
            email: '', 
            photoUrl: '', 
            uid: '',
            clave: '',
            toggle: false,
            }
    },


    beforeMount() {
    if (this.$store.state.uidUser) {
        var user = firebase.auth().currentUser;
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
    .boton1:click{
    background:#FFA040;
    }
.center {
    text-align: center;
}

</style>