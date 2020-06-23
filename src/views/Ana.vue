<template>
    <div>
        <popular-today></popular-today>
        <featured></featured>

    </div>
</template>

<script>
import PopularToday from '../components/PopularToday';
import Featured from '../components/Featured'

export default {
    name: 'Ana-Test',
    components: {
        PopularToday,
        Featured,
    }
}
</script>