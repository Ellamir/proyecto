<template>
    <div>
        <div id="franjasaludo" class="morado text-white">
        
        <p @click="saludo"> Saludar en el console log </p>
        <h1 class="hola" v-html="hola"></h1>
        <img :src="gravatarURL" alt="algo">
        </div>
    </div>
    
    <!-- <featured></featured> -->
        
    
</template>

<script>
// import Featured from '../components/Featured';
import firebase from 'firebase';
import md5 from 'js-md5';
//protected $appends = ['gravatar'];


export default {
    
    name: 'Tam',

    data() {
            return {
            //gravatarURL: 'https://es.gravatar.com/avatar/HASH-STRING?s=200&d=mp'   
            gravatarURL: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=mp',  //fantasma default
            hola: ''
            }
    },

    components: {
        
        // Featured,
        
    },
    
    methods: {
    saludo(){
            var user = firebase.auth().currentUser;
            console.log('desde el metodo',user.displayName);
            console.log(user.email);
            var gravatar = md5(user.email);
            console.log('email en md5',gravatar);
            let URL = "https://secure.gravatar.com/avatar/"+gravatar+"?s=200&d=mp";
            this.gravatarURL=URL;
            let nombre = (user.displayName)  // capitalizar nombre depende de CSS o arreglar el input
            this.hola="Hola "+nombre;
            }
 
    },
    
    //     filters:{
    //  upper(str){
    //    str = str.toLowerCase().split(' ');

    //    let final = [ ];

    //     for(let  word of str){
    //       final.push(word.charAt(0).toUpperCase()+ word.slice(1));
    //     }

    //   return final.join(' ')      
    //     }
    //   },
        

    
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

// .hola { text-transform: capitalize; }
</style> 