/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('start-page', require('./components/StartPage.vue').default);
Vue.component('start-web-wrapper-img', require('./components/StartWebWrapperImg.vue').default);
Vue.component('start-web-pagination', require('./components/StartPagePagination.vue').default);
Vue.component('pagination-item', require('./components/PaginationItem.vue').default);
Vue.component('start-content', require('./components/StartContent.vue').default);

// Startcards




/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { startCardRoutes } from './startCardRoutes'


Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
    state: {
        count: 0,
        backgroundImgIndex: 0,
        currentImgIndex: 0,
        animationStatus: false,
        loadedCard: false,
        cards: [
            {
                id: 0, href: "https://i.etsystatic.com/6300003/r/il/498a6f/1360564546/il_fullxfull.1360564546_kabo.jpg",
                title: "OurBlog",
                content: "lorem lorem lorem "
            },
            {
                id: 1,
                href:
                    "https://wallpapercave.com/wp/wp2661560.jpg",
                title: "Graphic",
                content: "lorem lorem lorem "
            },
            {
                id: 2,
                href: "http://cdn.wallpapername.com/1920x1080/20121114/trees%20creatures%20spotlight%20slender%20man%20aliens%20ambient%201920x1080%20wallpaper_www.wallpapername.com_11.jpg",
                title: "Drawing",
                content: "lorem lorem lorem "

            }
        ],
    },
    mutations: {
        changeAnimationStatus(state, conditional) {
            state.animationStatus = conditional;
            console.log(state.animationStatus)
        },
        loadCardStatus(state, conditional) {
            state.loadedCard = conditional;
            console.log(state.loadedCard)
        }
    }
});

const router = new VueRouter({
    startCardRoutes
})

const app = new Vue({
    el: '#app',
    store,
    router,

});

