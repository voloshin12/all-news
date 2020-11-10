<template>
    <div class="search">
        <form @submit.prevent="searchHandler">
            <input
                class="form-control form-control"
                type="text"
                placeholder="Enter article titles"
                v-model="searchQ"
                required
            />
            <div class="justify-content-center d-flex m-3">
                <button type="submit" class="btn btn-primary">
                    Search
                </button>
            </div>
        </form>
    </div>

</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'Search',
    methods: {
        ...mapActions({
            SEARCH: 'posts/SEARCH'
        }),
        searchHandler() {
            this.SEARCH(this.searchQ)
            console.log(this.searchQ)
        }
    },
    data: () => ({
        searchQ: ''
    })
};
</script>

<style scoped>
.search{
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
    padding: 0 15px;
}
</style>
