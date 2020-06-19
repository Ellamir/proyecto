<template>
  <div class="footer">
       <div id="franjalogin" class="morado text-white">
         <registro class="mx-auto"></registro>
         </div>

         <div pt-5 pb-5 class="oscuro text-white">
           <br>
           <b-container pt-5 pb-5>
           <b-row  align-v="center">
    <b-col mx-auto align-self="start" class="text-center" pt-5 pb-5 sm>&copy; Ellamir &amp; Anasu 2020<br></b-col>
    <b-col align-self="center" mx-auto class="text-center" pt-5 pb-5 sm>Encuéntranos en RRSS <br></b-col>
    <b-col align-self="end" mx-auto class="text-center" pt-5 pb-5 sm>Terms &amp; Conditions</b-col>
  </b-row>
</b-container>
<br>
          </div>
    </div>
</template>

<script>
import Registro from "./Registro.vue"  // componente hijo

export default {
  name: 'Footer',
  components: {
    Registro
  }
}
</script>


<style lang="scss" scoped>
.oscuro{
        background-color: #38006b;
}

.morado{
        background-color: #6a1b9a;
        text: #FFF;
        
}
.mejorlogin {
          text: #FFF;
        }
</style> 