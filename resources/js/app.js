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
Vue.component('galery-slider', require('./components/Galery/GalerySlider.vue').default);


// Auth //
Vue.component('register-page', require('./components/Auth/RegisterPage.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { routes } from './routes'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);
Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
    state: {
        currentCard: 0,
        animationStatus: false,
        loadedCard: false,
        csrf: document.querySelector('meta[name="csrf-token"]').content,
        authCheck: {},
        cards: [
            {
                id: 0, href: "image11.jpg",
                title: "<h1 >OurBlog</h1>",
                content: "<p>Jak połączyć sztukę i programowanie?</br> Sprawdź jak my to robimy!</p>",
                buttonText: "",
            },
            {
                id: 1,
                href:
                    "image1.jpg",
                title: "<h1 >Graphic</h1>",
                content: "<p>Zabawa z prostymi narzędziami</p>",
                buttonText: "Przejdź do Galerii",


            },
            {
                id: 2,
                href: "image5.jpg",
                title: "<h1 >Game</h1>",
                content: "<p>lorem lorem lorem</p>",
                buttonText: "",


            },
            {
                id: 3,
                href: "",
                title: "",
                content:
                    `
                <div class="contactItems">
                    <p class="contactTitle">Spodobała się strona?</p>
                    <p class="contactText">Przy jej tworzeniu skorzystałem z współczesnych technologi</p>
                    <div class="technologyList">
                        <img class="technologyItem" src="./images/contactImg/Vue.png" />
                        <img class="technologyItem" src="./images/contactImg/Laravel.png" />
                    </div>
                    <p class="contactTitle">Chcesz się skontaktować?</p>
                    <p class="contactText">+48 886 168 943</p>
                    <p class="contactText">piotr.pieprzyk.pp@gmail.com</p>
                </div>
                `,
                buttonText: "",

            }


        ],
        graphics: [{
            id: 1,
            href: "image1.jpg"
        },
        {
            id: 2,
            href: "image2.png"
        },
        {
            id: 3,
            href: "image3.png"
        },
        {
            id: 4,
            href: "image4.jpg"
        },
        {
            id: 5,
            href: "image5.jpg"
        },
        {
            id: 6,
            href: "image6.jpg"
        },
        {
            id: 7,
            href: "image7.jpg"
        },
        {
            id: 8,
            href: "image8.png"
        },
        {
            id: 9,
            href: "image9.png"
        },
        {
            id: 10,
            href: "image10.png"
        },
        {
            id: 11,
            href: "image11.jpg"
        },

        ]
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
        },
        changeAuthData(state, data) {
            state.authCheck = data;
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

