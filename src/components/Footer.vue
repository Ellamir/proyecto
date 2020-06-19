<template>
  <div class="footer">
       <div id="franjalogin" class="morado">
         <registro class="mx-auto"></registro>
         </div>

         <div class="oscuro">
          
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
        background-color: #a239ff;
}
</style> 