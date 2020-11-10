<template>
    <main>
        <div class="main-container">
            <h1 class="text-center m-2">All news</h1>
            <div class="row justify-content-lg-center mt-4">
                <Search />
            </div>
            <Sorting />
            <div class="main-content">
                <FilterSidebar />
                <div class="cards">
                    <div class="cards-wrap">
                        <div
                            class="card-item"
                            v-for="(article, index) in ALL_POSTS"
                            :key="index"
                        >
                            <div class="card-item__c">
                                <div class="card-img-fix" :style="`background-image: url('${article.urlToImage
                                            ? article.urlToImage
                                            : 'No-Image.jpg'}')`">

                                </div>
                                <div class="card-body">
                                    <h5 class="card-title" v-html="article.title" />
                                    <p
                                        class="card-text"
                                        v-html="article.description"
                                    />
                                    <router-link
                                        :to="{ path: article.title }"
                                        class="btn btn-primary"
                                    >Read more</router-link
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="!ALL_POSTS[0]">
                        <h2 class="text-center m-4">No results</h2>
                    </div>
                </div>
            </div>
        </div>
        <footer class="mt-5">
            <div class="container text-center">
                2020
            </div>
        </footer>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';
import Search from '@/components/Search';
import Sorting from '@/components/Sorting';
import FilterSidebar from '@/components/FilterSidebar';
export default {
    components: { FilterSidebar, Sorting, Search },
    computed: {
        ...mapGetters({
            ALL_POSTS: 'posts/ALL_POSTS',
        }),
    },
};
</script>

<style>
.main-container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 15px;
}
.card-img-fix {
    position: relative;
    height: 200px;
    background-position: center;
    background-size: cover;

}
footer {
    padding: 15px 0;
    background-color: #f1f1f1;
}
main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
}
.main-content {
    display: flex;
}
.cards {
    width: 100%;
}
.cards-wrap {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
}
.card-item {
    width: 50%;
    padding: 0 15px;
    margin-bottom: 30px;
}
@media screen and (max-width: 600px){
    .card-item{
        width: 100%;
    }

}
.card-item__c{
    border: 1px solid #f1f1f1;
}
</style>
