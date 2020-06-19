<template>
    <div>
        <div id="franjalogin" class="morado text-white">
        PROFILE
        Aqui va lo del perfil
        </div>
        <featured></featured>
        
    </div>
</template>

<script>
import Featured from '../components/Featured';


export default {
    name: 'Tam',
    components: {
        
        Featured,
        
    }
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
</style> 