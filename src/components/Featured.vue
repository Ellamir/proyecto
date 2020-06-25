<template>
    <div class="container my-5">
        <h2>Featured</h2>
        <div class="cuadroNaranjo"></div>
        <b-card-group deck>
            <b-card v-for="(item, index) in gameArray" 
                :key="index"
                img-top
            >
                <b-card-img
                    :src="item.images.small"
                    :alt="item.name"
                    
                ></b-card-img>
                <b-card-title 
                    :title="item.name"></b-card-title>
                <b-card-text>
                Publisher: {{ item.publisher }}, {{ item.year_published }} 
                </b-card-text>
                <!-- sacale el template si no los quieres bajar -->
                <template v-slot:footer > 
                    <div align="center">
                    <b-button @click="callFavorites(item.id)" class="boton1">Add to My Library</b-button>
                    </div>
                </template>
            </b-card>
        </b-card-group> 
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'Featured',
    methods: {
        ...mapActions([
            'callDataToFeature',
            'callFavorites'
        ]),

    },
    computed: {
        gameArray() {
            return this.$store.getters.showFeature;
        }
    },
    beforeMount: function () {
        this.callDataToFeature();
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
.boton1 {
    color:#FFF;
    background:#FFA040;

    &:hover {
        color:#FFF;
        background:#EC8E4C;
    }
}
.card-body {
    max-width: 250px;
}

.card-img {
    max-height: 150px !important;
    width: auto !important;
}
</style>