<template>
    <div class="sorting mb-4">
        <div class="sort-container">

            <div>
                <div class="mb-2 sort-title"><b>SORTING</b></div>
                <div class="sort">
                    <div class="sort-left">
                        <div
                            class="custom-control custom-radio mr-2"
                        >
                            <input
                                type="radio"
                                id="customRadioInline1"
                                name="customRadioInline"
                                class="custom-control-input"
                                value="publishedAt"
                                v-model="sortBy"
                                @input="changeSortBy"
                                checked
                            />
                            <label
                                class="custom-control-label"
                                for="customRadioInline1"
                            >News</label
                            >
                        </div>
                        <div
                            class="custom-control custom-radio mr-2"
                        >
                            <input
                                type="radio"
                                id="customRadioInline2"
                                name="customRadioInline"
                                class="custom-control-input"
                                value="relevancy"
                                v-model="sortBy"
                                @input="changeSortBy"
                            />
                            <label
                                class="custom-control-label"
                                for="customRadioInline2"
                            >Topical</label
                            >
                        </div>
                        <div
                            class="custom-control custom-radio mr-2"
                        >
                            <input
                                type="radio"
                                id="customRadioInline3"
                                name="customRadioInline"
                                class="custom-control-input"
                                value="popularity"
                                v-model="sortBy"
                                @input="changeSortBy"
                            />
                            <label
                                class="custom-control-label"
                                for="customRadioInline3"
                            >Popular</label
                            >
                        </div>
                    </div>
                    <div class="sort-right">
                        <div class="custom-control">
                            <select
                                class="custom-select"
                                id="inputGroupSelect01"
                                v-model="language"
                                @change="changeLanguage"
                            >
                                <option selected disabled value>language...</option>
                                <option v-for="language in LANGUAGES" :key="language" :value="language">{{language}}</option>
                            </select>
                        </div>
                        <div class="custom-control ">
                            <input
                                type="text"
                                class="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                                @input="changePageSize"
                                v-model="pageSize"
                            />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "Sorting",
    computed: {
        ...mapGetters({
            LANGUAGE: 'posts/LANGUAGE',
            LANGUAGES: 'posts/LANGUAGES',
            PAGE_SIZE: 'posts/PAGE_SIZE'
        })
    },
    methods: {
        ...mapActions({
            CHANGE_LANGUAGE: 'posts/CHANGE_LANGUAGE',
            CHANGE_PAGE_SIZE: 'posts/CHANGE_PAGE_SIZE',
            CHANGE_SORT_BY: 'posts/CHANGE_SORT_BY'
        }),
        changeLanguage() {
            this.CHANGE_LANGUAGE(this.language);
        },
        changeSortBy() {
            this.CHANGE_SORT_BY(this.sortBy);
        },
        async changePageSize(){
            await this.CHANGE_PAGE_SIZE(this.pageSize)
        }
    },
    data: () => ({
        language:'',
        pageSize: '',
        sortBy: ''
    })
}
</script>

<style>
.sort{
    display: flex;
    align-items: center;
}
@media screen and (max-width: 425px){
    .sort{
        flex-direction: column;
        align-items: flex-end;
    }
}
.sort-left{
    display: flex;
}
@media screen and (max-width: 425px){
    .sort-left{
        margin-bottom: 20px;
    }
}
.sort-right{
    display: flex;
}
.sort-container{
    display: flex;
    justify-content: flex-end;
}
.sort-title{
    text-align: right;
}
</style>
