<template>
    <div>
        
        
        <div id="franjasaludo" class="morado text-white">
        <p @click="saludo"> Saludar en el console log </p>
        <h1 class="hola" v-html="hola"></h1>
        <img :src="Uri" alt="algo"/> <span>Foto en Firebase, desde el Mounted - el gravatar de 200px importado en la creacion de usuario</span> 
        <br><br>
        <b-avatar :src="Uri" /> <span>Avatar bootstrap desde foto firebase (1rem)</span> 
        <br><br>
        <b-avatar :src="Uri" rounded style="font-size: 4rem;"></b-avatar> <span>Avatar bootstrap en firebase, avatar rounded 4rem</span> 
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
            hola: '',
            foto: '',
            Uri: '',
            name: '', 
            email: '', 
            photoUrl: '', 
            uid: '',
            }
    },


    mounted() {
      if (this.$store.state.uidUser) {
          var user = firebase.auth().currentUser;
          //var name, email, photoUrl, uid, Uri;

            if (user != null) {
            this.name = user.displayName;
            this.email = user.email;
            this.Uri = user.photoURL;
            //  emailVerified = user.emailVerified;
            this.uid = user.uid;  
            }





                    //   db.collection(this.$store.state.uidUser).get().then(resp=>{
                    //       var aux = [];
                    //       resp.forEach(elemt=>{
                    //           aux.push({
                    //             id: elemt.data().id,
                    //             last_name: elemt.data().last_name,
                    //             first_name: elemt.data().first_name,
                    //             avatar: elemt.data().avatar,
                    //             email: elemt.data().email,
                    //             idDoc: elemt.id,
                    //             favorito: elemt.data().favorito
                    //           })
                    //       });
                    //       this.datosFavoritos = aux;})
            }else{
                this.$router.push('/access');
            }
  },

    components: {
        
        // Featured,
        
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
            let nombre = (user.displayName)  // capitalizar nombre depende de CSS o arreglar el input
            let foto = (user.photoURL) 
            this.foto = foto
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

.hola { text-transform: capitalize; }
</style> 