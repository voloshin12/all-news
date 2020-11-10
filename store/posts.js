import axios from 'axios';
const ENDPOINT_TOP_HEADLINES = 'https://newsapi.org/v2/everything';
const ENDPOINT_SOURCES = 'https://newsapi.org/v2/sources';
const APIKEY = '494d24a135cc4afcae7a4b628afb096e';

export const state = () => ({
    posts: [],
    pageSize: '20',
    sources: [],
    sourcesResult: [],
    sources_for_request: '',
    language: 'en',
    languages: [],
    sourcesID: '',
    sortBy: 'publishedAt',
    searchQ: '',
    currentPost: {},
    topNews: [],
});
export const actions = {
    GET_ALL_POSTS: async ctx => {
        axios
            .get(ENDPOINT_TOP_HEADLINES, {
                params: {
                    language: ctx.state.language,
                    sources: ctx.state.sources_for_request,
                    pageSize: ctx.state.pageSize,
                    sortBy: ctx.state.sortBy,
                    q: ctx.state.searchQ,
                    apiKey: APIKEY,
                },
            })
            .then(response => {
                ctx.commit('SET_ALL_POSTS', response.data.articles);
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    },
    GET_TOP_NEWS: async (ctx, source) => {
        axios
            .get(ENDPOINT_TOP_HEADLINES, {
                params: {
                    sortBy: 'popularity',
                    sources: source,
                    pageSize: 10,
                    apiKey: APIKEY,
                },
            })
            .then(response => {
                ctx.commit('SET_TOP_NEWS', response.data.articles);
            })
            .catch(error => {
                console.log(error);
            });
    },
    CHANGE_PAGE_SIZE: (ctx, pageSize) => {
        ctx.commit('SET_PAGE_SIZE', pageSize);
        ctx.dispatch('GET_ALL_POSTS');
    },
    GET_CURRENT_POST: (ctx, title) => {
        ctx.commit('SET_CURRENT_POST', title);
    },
    GET_SOURCES: async ctx => {
        await axios
            .get(ENDPOINT_SOURCES, {
                params: {
                    apiKey: APIKEY,
                },
            })
            .then(response => {
                ctx.commit('SET_SOURCES', response.data.sources);
                ctx.commit('SET_LANGUAGES', response.data.sources);
                ctx.commit('SET_SOURCES_FOR_REQUEST');
            })
            .catch(error => {
                console.log(error);
            });
    },
    CHANGE_SOURCES: (ctx, sources) => {
        if (sources[0]) {
            ctx.commit('SET_CHANGE_SOURCES_FOR_REQUEST', sources);
        } else {
            ctx.commit('SET_SOURCES_FOR_REQUEST');
        }

        ctx.dispatch('GET_ALL_POSTS');
    },
    CHANGE_LANGUAGE: (ctx, language) => {
        ctx.commit('SET_CHANGE_LANGUAGE', language);
        ctx.commit('SET_SOURCES_CHANGE', ctx.state.sources);
        ctx.commit('SET_SOURCES_FOR_REQUEST');
        ctx.dispatch('GET_ALL_POSTS');
    },
    CHANGE_SORT_BY: (ctx, sortBy) => {
        ctx.commit('SET_SORT_BY', sortBy);
        ctx.dispatch('GET_ALL_POSTS');
    },
    SEARCH: (ctx, searchQ) => {
        ctx.commit('SET_SEARCH_Q', searchQ);
        ctx.dispatch('GET_ALL_POSTS');
    },
};
export const mutations = {
    SET_ALL_POSTS: (state, posts) => {
        state.posts = posts;
    },
    SET_PAGE_SIZE: (state, pageSize) => {
        state.pageSize = pageSize;
    },
    SET_SOURCES: (state, sources) => {
        state.sources = sources;
        sources.filter(el => {
            if (el.id && el.language === state.language) {
                state.sourcesResult.push(el);
            }
        });
    },
    SET_LANGUAGES: (state, sources) => {
        let languages = [];
        sources.filter(el => {
            languages.push(el.language);
        });
        state.languages = languages.filter(
            (el, index, arr) => arr.indexOf(el) === index
        );
    },
    SET_SOURCES_CHANGE: (state, sources) => {
        state.sourcesResult = [];
        sources.filter(el => {
            if (el.language === state.language) {
                state.sourcesResult.push(el);
            }
        });
    },
    SET_CHANGE_LANGUAGE: (state, language) => {
        state.language = language;
    },
    SET_SOURCES_FOR_REQUEST: state => {
        const sourcesResult = [];
        let counter =
            state.sourcesResult.length > 20 ? 20 : state.sourcesResult.length;
        for (let i = 0; i < counter; i++) {
            sourcesResult.push(state.sourcesResult[i].id);
        }

        state.sources_for_request = sourcesResult.join();
    },
    SET_CHANGE_SOURCES_FOR_REQUEST: (state, sources) => {
        const sourcesResult = [];
        let counter = sources.length > 20 ? 20 : sources.length;
        for (let i = 0; i < counter; i++) {
            sourcesResult.push(sources[i]);
        }

        state.sources_for_request = sourcesResult.join();
        console.log(state.sources_for_request);
    },
    SET_SORT_BY: (state, sortBy) => {
        state.sortBy = sortBy;
    },
    SET_SEARCH_Q: (state, searchQ) => {
        state.searchQ = searchQ;
    },
    SET_CURRENT_POST: (state, title) => {
        let allPosts = [];
        if (state.topNews) {
            for (let i = 0; i < state.topNews.length; i++) {
                allPosts.push(state.topNews[i]);
            }
            for (let i = 0; i < state.posts.length; i++) {
                allPosts.push(state.posts[i]);
            }
            allPosts.filter((el, index) => {
                if (el.title === title) {
                    state.currentPost = el;
                }
            });
        } else {
            state.posts.filter((el, index) => {
                if (el.title === title) {
                    state.currentPost = el;
                }
            });
        }
    },
    SET_TOP_NEWS: (state, posts) => {
        state.topNews = posts;
    },
};
export const getters = {
    ALL_POSTS: state => state.posts,
    PAGE_SIZE: state => state.pageSize,
    SOURCES: state => state.sourcesResult,
    LANGUAGE: state => state.language,
    LANGUAGES: state => state.languages,
    CURRENT_POST: state => state.currentPost,
    TOP_NEWS: state => state.topNews,
};
