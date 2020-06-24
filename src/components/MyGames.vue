<template>
    <div class="container my-5">
        <h2>My Library</h2>
        <div class="cuadroNaranjo"></div>
        <b-card-group deck>
            <b-card v-for="(item, index) in favs" :key="index"
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
import { mapActions } from 'vuex'

export default {
    name: 'MyLibrary',
    props: {
        ids: {
            type: Array,
            required: true,
        }
    },
    watch: {
        ids: {
            immediate: true, 
            handler()
            {
               this.bringFavorites(this.ids).then(
                    (result)=>{
                        this.favs = result;
                    })
            }
        }
    },
    data() {
        return {
            favs:[]
        }
    },
    updated() {
       
    },
    methods:{
        ...mapActions([
            'bringFavorites',
        ])
    },
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