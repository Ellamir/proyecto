<template>
    <div>

        <b-container class="bv-example-row" fluid="md">

  <b-row>
    <b-col lg="4">
        <usercard></usercard>
    </b-col>
    <b-col lg="8">
        <popular-today></popular-today>
    </b-col>
  </b-row>

        </b-container>

        <my-games :ids="this.showFavs"></my-games>


    </div>
    

</template>

<script>
import PopularToday from '../components/PopularToday';
import Usercard from '../components/Usercard';
import firebase from 'firebase';
import md5 from 'js-md5';
import MyGames from '../components/MyGames';
import { mapGetters } from 'vuex';



export default {
    
    name: 'Profile',
    components: {
        PopularToday,
        Usercard,
        MyGames
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

    computed: {
        ...mapGetters([
            'showFavs'
        ])
    },

    mounted() {
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

    
    
    methods: {
    saludo(){
            var user = firebase.auth().currentUser;
            console.log('desde Firebase:',user.displayName);
            console.log('desde Firebase:',user.photoURL);
            console.log(user.email);
            var gravatar = md5(user.email);
            console.log('email en md5',gravatar);
            let URL = "https://secure.gravatar.com/avatar/"+gravatar+"?s=200&d=mp";
            this.gravatarURL=URL;
            let nombre = (user.displayName)  // capitalizar nombre depende de CSS
            let foto = (user.photoURL) 
            this.foto = foto
            this.hola="Hola "+nombre;
            }
    },
}

</script>

<style lang="scss" scoped>

.morado{
        background-color: #6a1b9a;
        text-decoration-color: #FFF;
        
}
.mejorlogin {
        text-decoration-color: #FFF;
        }

.mayusculas { text-transform: capitalize; }

.small{
        color: #38006b;
        font-size: 13px;
}
</style> 