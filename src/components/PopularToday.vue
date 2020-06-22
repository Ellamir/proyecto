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
</script>
