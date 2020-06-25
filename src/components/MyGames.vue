<template>
    <b-container>
        <h2>My Game Collection</h2>
        <div class="cuadroNaranjo"></div>
        <b-card-group deck>
            <b-card v-for="(item, index) in currPageFavs" :key="index"
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
        <b-row>
            <b-col md="6" class="my-1">
                <b-pagination 
                    v-model="currentPage" 
                    :total-rows="totalRows" 
                    :per-page="perPage" 
                ></b-pagination>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'MyLibrary',
    props: {
        ids: {
            type: Array,
            required: true,
        },
        perPage: {
            type: Number,
            default: 4,
        }
    },
    data() {
        return {
            favs:[],
            currentPage: 1,
            totalRows: 0,
            paginated_items: {},
            currentPageIndex:0,
            nbPages:0
        }
    },
    watch: {
        ids: {
            immediate: true, 
            handler()
            {
                if(this.ids.length > 0)
                {
                    this.bringFavorites(this.ids).then(
                        (result)=>{
                            this.favs = result;
                            this.totalRows = this.favs.length;
                        }
                    ).catch(
                        (error)=> {
                            console.log(error);
                        }
                    )
                }
            }
        }
    },
    methods:{
        ...mapActions([
            'bringFavorites',
        ]),
    },
    computed: {
        pageCount() {
        return Math.ceil(this.totalRows / this.perPage);
        },
        currPageFavs() {
            let start = (this.currentPage - 1) * this.perPage;
            let end = start + this.perPage; 

            return this.favs.slice(start, end);
        },
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