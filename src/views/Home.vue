<template>
    <div>
        <hero></hero>
        <featured></featured>
        <div id="franjalogin" class="morado text-white">
         <registro class="mx-auto"></registro>
        </div>
    </div>
</template>

<script>
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Registro from '../components/Registro';

export default {
    name: 'Home',
    components: {
        Hero,
        Featured,
        Registro
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