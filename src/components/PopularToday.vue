<template>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'PopularToday',
    data() {
        return {

        }
    },
    computed: {
        ...mapActions([
            'callPopularToday'
        ]),
    },
    beforeMount: function() 
    {
        this.callPopularToday();

    }
</script>
