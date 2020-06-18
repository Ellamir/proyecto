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
          <th>Apellido</th>
          <th>Correo</th>
          <th>Favorito</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(persona,index) in datosFavoritos" :key="index" :class="{seleccionado: persona.favorito}">
          <td>{{persona.id}}</td>
          <td><img :src="persona.avatar" :alt="index" class="avatar"></td>
          <td>{{persona.first_name}}</td>
          <td>{{persona.last_name}}</td>
          <td>{{persona.email}}</td>
          <td>{{persona.favorito}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from "../main";
export default {
  name: 'Favorito',
  data() {
    return {
      busqueda: '',
      datosFavoritos: []
    }
  },
  mounted() {
      if (this.$store.state.uidUser) {
          db.collection(this.$store.state.uidUser).get().then(resp=>{
              var aux = [];
              resp.forEach(elemt=>{
                  aux.push({
                    id: elemt.data().id,
                    last_name: elemt.data().last_name,
                    first_name: elemt.data().first_name,
                    avatar: elemt.data().avatar,
                    email: elemt.data().email,
                    idDoc: elemt.id,
                    favorito: elemt.data().favorito
                  })
              });
              this.datosFavoritos = aux;
          })
      }else{
          this.router.push('/login');
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