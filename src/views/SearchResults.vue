<template>
    <div>
        <h2>Search Results</h2>
        <b-table 
            striped 
            hover 
            :items="showSearch" 
            :fields="fields"
        >
            <template v-slot:cell(image)="data">
                <b-img 
                    :src="data.item.image_url"
                    :alt="data.item.name"
                    center
                    width="100vw"
                ></b-img>
            </template>

            <template v-slot:cell(action)="data">
                <b-button 
                    @click="callFavorites(data.item.id)"
                    class="boton-color"
                >
                    Add to My Library
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data() 
    {
        return {
            fields: [
                'image',
                'name',
                'action'
            ],
        }
    },
    methods: {
        ...mapActions([
            'apiSearch',
            'callFavorites'
        ]),
    },
    computed:{
        ...mapGetters([
            'showSearch'
        ])
    },
    beforeMount() 
    {
        let sQuery = this.$route.query.q;
        this.apiSearch(sQuery);
    }
}
</script>

<style lang="scss" scoped>
.boton-color {
    background-color: #FFA040;

    &:hover {
        background-color: #EC8E4C;
        color:#424242; 
    }
}
</style>