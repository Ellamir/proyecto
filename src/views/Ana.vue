<template>
    <div>
        <hero></hero>
        <featured></featured>
    </div>
</template>

<script>
import Hero from '../components/Hero';
import Featured from '../components/Featured'

export default {
    name: 'Ana-Test',
    components: {
        Hero,
        Featured,
    }
}
</script>