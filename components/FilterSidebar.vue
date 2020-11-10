<template>
    <div class="sidebar-wrap" v-bind:class="{ open: menuPosition }">
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
        <button @click="menuPosition = !menuPosition" class="open-menu"></button>
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
        }
    },
    data: () => ({
        sources: [],
        menuPosition: false
    }),
};
</script>

<style>
.open-menu{
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0;
    box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    background-size: 20px;
    background-position: center;
    background-repeat: no-repeat;
    display: none;
    z-index: 10;
    background-image: url("data:image/svg+xml,%3Csvg width='448' height='356' viewBox='0 0 448 356' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M442 36H6C4.4087 36 2.88258 35.3679 1.75736 34.2426C0.632141 33.1174 0 31.5913 0 30L0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632144 4.4087 0 6 0H442C443.591 0 445.117 0.632144 446.243 1.75736C447.368 2.88258 448 4.4087 448 6V30C448 31.5913 447.368 33.1174 446.243 34.2426C445.117 35.3679 443.591 36 442 36V36ZM442 196H6C4.4087 196 2.88258 195.368 1.75736 194.243C0.632141 193.117 0 191.591 0 190L0 166C0 164.409 0.632141 162.883 1.75736 161.757C2.88258 160.632 4.4087 160 6 160H442C443.591 160 445.117 160.632 446.243 161.757C447.368 162.883 448 164.409 448 166V190C448 191.591 447.368 193.117 446.243 194.243C445.117 195.368 443.591 196 442 196V196ZM442 356H6C4.4087 356 2.88258 355.368 1.75736 354.243C0.632141 353.117 0 351.591 0 350L0 326C0 324.409 0.632141 322.883 1.75736 321.757C2.88258 320.632 4.4087 320 6 320H442C443.591 320 445.117 320.632 446.243 321.757C447.368 322.883 448 324.409 448 326V350C448 351.591 447.368 353.117 446.243 354.243C445.117 355.368 443.591 356 442 356V356Z' fill='%23007BFF'/%3E%3C/svg%3E%0A");
}
.open-menu:focus{
    outline: none;
}
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
        position: fixed;
        left: -300px;
        transition: 0.25s all;
        z-index: 10;
        background-color: #ffffff;
        top: 0;
        bottom: 0;
        height: 100vh;
        overflow: auto;
    }
    .sidebar-wrap.open{
        left: 0;
        padding-right: 0;
    }
    .open-menu{
        display: block;
    }
}
</style>
