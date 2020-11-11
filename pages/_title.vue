<template>
    <div>
        <main class="">
            <div class="main-container">
                <div class="mt-4 mb-4">
                    <div class="text-center m-2 h1"><router-link to="/" > All news </router-link></div>
                    <div class="main-content">
                        <div class="sidebar-wrap" v-bind:class="{ open: menuPosition }">
                            <div class="sidebar">
                                <h5 class="mb-3">Top 10 news</h5>
                                <div class="top-news-item" v-for="article in TOP_NEWS">
                                    <router-link :to="{path: article.title}" v-html="article.title"/>
                                </div>
                            </div>
                            <button @click="menuPosition = !menuPosition" class="open-menu"></button>
                        </div>
                        <div class="content" v-if="CURRENT_POST">
                            <h1 v-html="CURRENT_POST.title" class="mb-5" />
                            <div class="info mb-5">
                                <div>
                                    <b>Author: </b
                                    ><span v-html="CURRENT_POST.author" />
                                </div>
                                <div>
                                    <b>Link to original news: </b
                                    ><span>
                                        <a
                                            :href="CURRENT_POST.url"
                                            target="_blank"
                                        >Open</a
                                        ></span
                                >
                                </div>
                                <div>
                                    <b>Source: </b
                                    ><span v-html="CURRENT_POST.source.name" />
                                </div>
                                <div>
                                    <b>Date of publication: </b
                                    ><span v-html="CURRENT_POST.publishedAt" />
                                </div>
                            </div>
                            <div class="text">
                                <img
                                    class="mb-5"
                                    :src="CURRENT_POST.urlToImage"
                                    :alt="CURRENT_POST.title"
                                />
                                <div v-html="CURRENT_POST.content"></div>
                            </div>
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
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: '_title',
    computed: {
        ...mapGetters({
            CURRENT_POST: 'posts/CURRENT_POST',
            TOP_NEWS: 'posts/TOP_NEWS',
        }),
    },
    methods: {
        ...mapActions({
            GET_CURRENT_POST: 'posts/GET_CURRENT_POST',
            GET_TOP_NEWS: 'posts/GET_TOP_NEWS',
        }),
    },
    created() {
        this.GET_CURRENT_POST(this.$route.params.title);
        this.GET_TOP_NEWS(this.CURRENT_POST.source.id);
    },
    data: () => ({
        menuPosition: false
    }),
    head() {
        return {
            title: this.CURRENT_POST.title
        }
    },
};
</script>

<style>
img {
    max-width: 100%;
}
.top-news-item{
    margin-bottom: 20px;
}
.content{
    width: 100%;
}
@media screen and (max-width: 768px){
    h1{
        font-size: 1.5rem;
    }
}
</style>
