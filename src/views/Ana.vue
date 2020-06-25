<template>
    <div>
        <featured></featured>
        <my-games :ids="this.showFavs"></my-games>

    </div>
</template>

<script>
import Featured from '../components/Featured';
import MyGames from '../components/MyGames'
import { mapGetters } from 'vuex';

export default {
    name: 'Ana-Test',
    components: {
        Featured,
        MyGames
    },
    computed: {
        ...mapGetters([
            'showFavs'
        ]),
    },
    beforeMount: function() 
    {
        this.$store.dispatch('revisarDB');
    }
}
</script>