<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="nav__backgrond-oscuro">
      <b-navbar-brand href="#">
        <router-link class="b-navbar-brand" to="/">
          <b-img src="http://dragon.cl/portafolio/ludoteca/ludoteca.png"></b-img>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- center aligned nav items -->
        <b-navbar-nav class="mx-auto">
          <b-nav-form>
            <b-form-input 
              size="md" 
              class="" 
              placeholder="¿Buscas un juego?"
              v-model="searchInput"
            ></b-form-input>
            <b-button 
              size="md" 
              class="my-2 my-sm-0 nav__boton-color" 
              @click="search(searchInput)"
            >
                <b-icon-search></b-icon-search>
            </b-button>
          </b-nav-form>
        </b-navbar-nav>

<b-navbar-nav v-if="$store.state.uidUser">  <!-- Links de navegación para usuarios registrados -->
        
        <b-nav-item href="#"><router-link class="mayusculas nav-link" to="/profile">{{ authName }}</router-link></b-nav-item>
        <b-nav-item href="#"><li class="nav-link" @click="salida" to="/">Logout</li></b-nav-item> 
        <b-nav-item href="#"><router-link class="nav-link" to="/profile">
        <b-avatar :src="$store.state.uidUser.photoURL" />
        </router-link></b-nav-item>
        
      </b-navbar-nav>

      <b-navbar-nav v-else>  <!-- Links de navegación están TODOS y en orden secuencial por ahora -->
        <b-nav-item href="#"><router-link class="nav-link" to="/signup">Sign Up!</router-link></b-nav-item>
        <b-nav-item href="#"><router-link class="nav-link" to="/access">Access</router-link></b-nav-item>
        <b-nav-item href="#"><router-link class="nav-link" to="/access">
        <b-avatar :src="authPic" /></router-link></b-nav-item>
        
      </b-navbar-nav>
      
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from 'firebase';
import { mapActions } from 'vuex';

export default {
  name: 'Navegacion',

    computed: {
    authPic() {
      return this.$store.state.uidUser.photoURL;
    },
    authName() {
      return this.$store.state.uidUser.displayName;
    },
  },
  data() {
    return {
      searchInput: '',
    }
  },
  methods: {
    salida()
    {
      firebase.auth().signOut().then(
        () => {
          // console.log("salida de usuario")
          this.$router.push('/');
        }
      )
    },
    search(query) 
    {
      this.$router.push(`/search-results?q=${query}`);
      this.$router.go();
    },
    ...mapActions([
      'apiSearch'
    ])
  },
}
</script>

<style lang="scss" scoped>
.nav{
  &__backgrond-oscuro {
    background-color: #38006b;
  }
  &__boton-color {
    background-color: #FFA040;

    &:hover {
      background-color: #EC8E4C;
      color:#424242; 
    }
  }
}

.mayusculas { text-transform: capitalize; }

</style> 