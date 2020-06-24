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


        
        <h1 class="hola" v-html="hola"></h1>
        <b-img :src="Uri" rounded="circle" alt="algo"/> <span>Foto en Firebase, desde el Mounted - el gravatar de 200px importado en la creacion de usuario</span> 
        <br><br>
        <b-avatar :src="Uri" /> <span>Avatar bootstrap desde foto firebase (1rem)</span> 
        <br><br>
        <b-avatar :src="Uri" rounded style="font-size: 4rem;"></b-avatar> <span>Avatar bootstrap en firebase, avatar rounded 4rem</span> 
        </div>
 -->

<p @click="accionar"> Click para accionar </p>
<p @click="revisar"> Click para accionar </p>
       

<!-- 
    <usercard></usercard>
    <popular-today></popular-today>
    <usermodal></usermodal> -->

    </div>
    

</template>

<script>
// import PopularToday from '../components/PopularToday';
// import Usercard from '../components/Usercard';
// import Usermodal from '../components/Usermodal';
import firebase from 'firebase';
// import md5 from 'js-md5';
//protected $appends = ['gravatar'];


export default {
    
    name: 'Tam',
    components: {
        //PopularToday,
        //Usercard,
        //Usermodal
        
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
            //myFavs: []
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
            this.clave = user.password;
            //  emailVerified = user.emailVerified;
            this.photoURL = user.photoURL;  
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

    // myFavs: ['patito','patata'] estos fueron probados localmente primero 
    
    computed: {
    myFavs() {
      return this.$store.state.myFavs;
      
    },
    },
    methods: {

         accionar(){  // crear documentos con ID's = array myFavs
                
                this.myFavs.forEach(crearDocs => {
                 let argumento = firebase.auth().currentUser.uid
                 console.log(argumento)
                 console.log(crearDocs)
                 firebase.firestore().collection(argumento).doc(crearDocs).set({ gameFav : true });
                });
        },

         revisar(){  // trae todos los documentos (ID juegos) y sus propiedades (siempre son fav true en este caso)
            let argumento = firebase.auth().currentUser.uid 
            firebase.firestore().collection(argumento).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            });
            });
        }

        // esto debe funcionar

        //  this.myFavs.forEach(crearDocs => {
        //          var argumento = firebase.auth().currentUser.uid
        //          console.log(argumento)
        //          console.log(crearDocs)
        //          firebase.firestore().collection(argumento).doc(crearDocs).set({ gameFav : true });
        //       });


    // saludo(){
    //         var user = firebase.auth().currentUser;
    //         console.log('desde Firebase:',user.displayName);
    //         console.log('desde Firebase:',user.photoURL);
    //         console.log(user.email);
    //         var gravatar = md5(user.email);
    //         console.log('email en md5',gravatar);
    //         let URL = "https://secure.gravatar.com/avatar/"+gravatar+"?s=200&d=mp";
    //         this.gravatarURL=URL;
    //         let nombre = (user.displayName)  // capitalizar nombre depende de CSS o arreglar el input
    //         let foto = (user.photoURL) 
    //         this.foto = foto
    //         this.hola="Hola "+nombre;
    //         }
 
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

.mayusculas { text-transform: capitalize; }

.small{
        color: #38006b;
        font-size: 13px;
}
</style> 