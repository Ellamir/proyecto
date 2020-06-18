<template>
  <div class="footer">
       <div id="franjalogin" class="morado">
         <registro class="morado"></registro>
         </div>

         <div class="oscuro">
          
          </div>
    </div>
</template>

<script>
import Registro from "./Registro.vue"

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
</style> 