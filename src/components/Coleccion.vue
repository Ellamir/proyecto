<template>
  <div class="about">
    <h1>Lista de Juegos</h1>
    <label for="busqueda">Buscar Juego</label>
    <input type="text" v-model="busqueda">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Avatar</th>
          <th>Nombre</th>
         <!--  <th>Apellido</th>
          <th>Correo</th>
          <th>Favorito</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juego,index) in datosFavoritos" :key="index" :class="{seleccionado: juego.favorito}">
          <td>{{juego.id}}</td>
          <td><img :src="juego.image_url" :alt="index" class="avatar"></td>
          <td>{{juego.name}}</td>
         <!--  <td>{{juego.name}}</td>
          <td>{{juego.name}}</td>
          <td>{{juego.name}}</td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { api } from "../dbDummy";
export default {
  name: 'Favorito',
  data() {
    return {
      busqueda: '',
      datosFavoritos: api.games,
    }
  },
  mounted() {
      if (this.$store.state.uidUser) {
          // esto va a cambiar
          api.collection(this.$store.state.uidUser).get().then(resp=>{
              var aux = [];
              resp.forEach(elemt=>{
                  aux.push({
                    id: elemt.data().id,
                    name: elemt.data().name,
                    /* first_name: elemt.data().first_name,
                    avatar: elemt.data().avatar,
                    email: elemt.data().email,
                    idDoc: elemt.id,
                    favorito: elemt.data().favorito */
                  })
              });
              this.datosFavoritos = aux;
          })
      }else{
          this.$router.push('/login');
      }
  },
}
</script>

<style lang="scss">
  .avatar{
    width: 100px;
    height: 100px;
  }
  .seleccionado{
    background-color: aquamarine;
  }
</style>