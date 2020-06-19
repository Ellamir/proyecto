    <div class="container my-5">
        <h2>Featured</h2>
            <b-card v-for="(item, index) in gameArray" :key="index"
                :title="item.name"
                :img-src="item.image_url"
                :img-alt="item.name"
                img-top
            >
                <b-card-text>
                Publisher: {{ item.publisher }}, {{ item.year_published }} 
                </b-card-text>
            </b-card>
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

