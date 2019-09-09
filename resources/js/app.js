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

Vue.component('custom-header', require('./components/CustomHeader.vue').default);
Vue.component('login-form', require('./components/LoginForm.vue').default);

// StartPage // 
Vue.component('start-page', require('./components/StartPage/StartPage.vue').default);
Vue.component('start-web-wrapper-img', require('./components/StartPage/StartWebWrapperImg.vue').default);
Vue.component('start-web-pagination', require('./components/StartPage/StartPagePagination.vue').default);
Vue.component('pagination-item', require('./components/StartPage/PaginationItem.vue').default);
Vue.component('start-content', require('./components/StartPage/StartContent.vue').default);

// Galery //

Vue.component('galery-page', require('./components/Galery/GaleryPage.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
    state: {
        currentCard: 0,
        animationStatus: false,
        loadedCard: false,
        cards: [
            {
                id: 0, href: "https://images.pexels.com/photos/754082/pexels-photo-754082.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                title: "OurBlog",
                content: "<p>Jak połączyć sztukę i programowanie?</br> Sprawdź jak my to robimy!</p>",
                buttonText: "",
            },
            {
                id: 1,
                href:
                    "https://images.pexels.com/photos/1670035/pexels-photo-1670035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                title: "Graphic",
                content: "<p>Zabawa z prostymi narzędziami</p>",
                buttonText: "Przejdź do Galerii",


            },
            {
                id: 2,
                href: "http://cdn.wallpapername.com/1920x1080/20121114/trees%20creatures%20spotlight%20slender%20man%20aliens%20ambient%201920x1080%20wallpaper_www.wallpapername.com_11.jpg",
                title: "Drawing",
                content: "<p>lorem lorem lorem</p>",
                buttonText: "",


            },
            {
                id: 3,
                href: "",
                title: "Contact",
                content: "886168943",
                buttonText: "",

            }


        ],
    },
    mutations: {
        changeAnimationStatus(state, conditional) {
            state.animationStatus = conditional;
        },
        loadCardStatus(state, conditional) {
            state.loadedCard = conditional;
        },
        changecurrentCard(state, index) {
            state.currentCard = index;
        }
    }
});

const router = new VueRouter({
    routes,
})

const app = new Vue({
    el: '#app',
    store,
    router,

});

