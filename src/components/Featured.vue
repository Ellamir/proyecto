<template>
    <div class="container my-5">
        <h2>Featured</h2>
        <div class="cuadroNaranjo"></div>
        <b-card-group deck>
            <b-card v-for="(item, index) in gameArray" :key="index"
                :title="item.name"
                :img-src="item.images.small"
                :img-alt="item.name"
                img-top
            >
                <b-card-text>
                Publisher: {{ item.publisher }}, {{ item.year_published }} 
                </b-card-text>
            </b-card>
        </b-card-group> 
    </div>
</template>

<script>
export default {
    name: 'Featured',
    data() {
        return {
            gameArray: [],
        }
    },
    beforeMount: function () {
        this.$store.dispatch('callDataToFeature');
        this.gameArray = this.$store.getters.showFeature;
        console.log(`This is an array`, this.gameArray);
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