<template>
    <div class="sidebar-wrap">
        <div class="sidebar filter">
            <h5 class="mb-3">Sources</h5>
            <div
                v-for="source in SOURCES"
                class="custom-control custom-checkbox my-1 mr-sm-2"
            >
                <input
                    type="checkbox"
                    class="custom-control-input"
                    :id="source.id"
                    :data-language="source.language"
                    :value="source.id"
                    v-model="sources"
                    @change="changeSources"
                />
                <label class="custom-control-label" :for="source.id">{{
                    source.name
                }}</label>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'FilterSidebar',
    computed: {
        ...mapGetters({
            SOURCES: 'posts/SOURCES',
        }),
    },
    methods: {
        ...mapActions({
            CHANGE_SOURCES: 'posts/CHANGE_SOURCES',
        }),
        changeSources() {
            this.CHANGE_SOURCES(this.sources);
        },
    },
    mounted() {},
    data: () => ({
        sources: [],
    }),
};
</script>

<style>
.sidebar-wrap{
    width: 300px;
    min-width: 300px;
    padding-right: 30px;

}
.sidebar {
    box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 20px;
}
@media screen and (max-width: 1000px){
    .sidebar-wrap{
        position: absolute;
        left: -300px;
    }
}
</style>
