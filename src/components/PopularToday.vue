<template>
    <div class="container my-5">
        <h2>Popular Today</h2>
        <div class="cuadroNaranjo"></div>
        <b-card-group deck>
            <b-card :title="showPopular.name"
                :img-src="showPopular.image_url"
                :img-alt="showPopular.name"
                img-left
            >
                <b-card-text>
                {{ showPopular.description }} 
                </b-card-text>
            </b-card>
        </b-card-group> 
    </div>
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
        ...mapGetters([
            'showPopular'
        ])
    },
    beforeMount: function() 
    {
        this.callPopularToday();

    }
}
</script>

<style lang="scss" scoped>
h2 {
    border-bottom: 1px solid #727272;
    margin-bottom: 0;
}
.cuadroNaranjo {
    margin-bottom: 1rem;
    
    &:after{
        content: " ";
        display: block;
        height: 6px;
        max-width: 55px;
        background: #EC8E4C;
    }
}

</style>