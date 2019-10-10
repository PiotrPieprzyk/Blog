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

// CustomHeader //
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

// Profile //

Vue.component('profile-page', require('./components/Profile/ProfilePage.vue').default);
Vue.component('profile-graphic', require('./components/Profile/ProfileGraphic.vue').default);
Vue.component('profile-game', require('./components/Profile/ProfileGame.vue').default);

// Game // 
Vue.component('game-panel', require('./components/Game/GamePanel.vue').default);

Vue.component('game-play', require('./components/Game/GamePanelEl/GamePlay.vue').default);
Vue.component('location', require('./components/Game/GamePanelEl/GamePlayEl/PlaceElement.vue').default);

Vue.component('game-menu', require('./components/Game/GamePanelEl/GameMenu.vue').default);
Vue.component('menu-element', require('./components/Game/GamePanelEl/GameMenuEl/MenuElement.vue').default);

// Auth //
Vue.component('register-page', require('./components/Auth/RegisterPage.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// moja próba animowania heh
import jsAnimation from "./jsAnimation";
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
    // homePage
    currentCard: 0,
    animationStatus: false,
    loadedCard: false,
    //
    headerVisible: 2,
    // auth
    csrf: document.querySelector('meta[name="csrf-token"]').content,
    authCheck: {},

    // profile
    profileCardActive: '',
    visibleProfileButton1: true,
    visibleProfileButton2: true,
    buttonProfileActive: false,

    // jsAnimation
    jsAnimation,
    scrollEventActive: true,

    // dataBase
    cards: [
      {
        id: 0, href: "image11.jpg",
        title: "<h1 >OurBlog</h1>",
        content: "<p>Jak połączyć sztukę i programowanie?</br> Sprawdź jak my to robimy!</p>",
        buttonText: "",
        buttonRoute: "",
      },
      {
        id: 1,
        href:
          "image5.jpg",
        title: "<h1 >Graphic</h1>",
        content: "<p>Zabawa z prostymi narzędziami</p>",
        buttonText: "Przejdź do Galerii",
        buttonRoute: "/galery",

      },
      {
        id: 2,
        href: "image1.jpg",
        title: "<h1 >Game</h1>",
        content: "<p>Grałeś kiedyś w grę tekstową?</p>",
        buttonText: "Chcę zagrać",
        buttonRoute: "/game",

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
        buttonRoute: "",
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

    ],
    // GAME //
    menu: true,
    uploadedPlaceElementsList: [],
    currentCommend: "",
    lastCommends: [],
    lastCommendId: -1,
    currentNavigation: {
      x: 0,
      y: 0
    },
    mapPlace: {
      "0_0": {
        name: "home",
        description: "small house",
        x: 0,
        y: 0,
        location: "city",
        world: ""
      },
      "0_1": {
        name: "Wood",
        description: "smelly wood",
        x: 1,
        y: 0,
        location: "wood",
        world: ""
      }
    },
    menuElements: {
      game: ""
    },
    mapNavigation: {
      0: { 0: 1, 1: 1 }
    }
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
    },
    changeProfileCardActive(state, card) {
      state.profileCardActive = card;
    },
    changeVisibleProfileButton1(state, conditional) {

      state.visibleProfileButton1 = conditional;
    },
    changeVisibleProfileButton2(state, conditional) {

      state.visibleProfileButton2 = conditional;
    },
    changebuttonProfileActive(state, conditional) {

      state.buttonProfileActive = conditional;
    },
    changeScrollEventActive(state, conditional) {

      state.scrollEventActive = conditional;
    },
    setCurrentCommend(state, value) {
      state.currentCommend = value;
    },
    setMenu(state, conditional) {
      state.menu = conditional;
    },
    setHeaderVisible(state, conditional) {
      state.headerVisible = conditional;
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

function detectMouseWheelDirection(e) {
  var delta = null,
    direction = false
    ;
  if (!e) { // if the event is not provided, we get it from the window object
    e = window.event;
  }
  if (e.wheelDelta) { // will work in most cases
    delta = e.wheelDelta / 60;
  } else if (e.detail) { // fallback for Firefox
    delta = -e.detail / 2;
  }
  if (delta !== null) {
    direction = delta > 0 ? 'up' : 'down';
  }

  return direction;
}

let animation_active = true;

function handleMouseWheelDirection(direction) {
  let i;
  if (direction == 'down') {
    if (animation_active) {
      animation_active = false;
      store.commit("setHeaderVisible", 1);
      console.log("DOWN SET ");
      setTimeout(() => {
        animation_active = true;
      }, 1000)
    }


    // only on start page
    if (router.history.current.fullPath == "/") {

      if (store.state.currentCard < 3) {
        i = store.state.currentCard + 1;
        store.commit("changecurrentCard", i);

      }
    }


  } else if (direction == 'up') {
    if (animation_active) {
      animation_active = false;
      store.commit("setHeaderVisible", 2);
      console.log("UP SET ");
      setTimeout(() => {
        animation_active = true;
      }, 1000)
    }

    // only on start page
    if (router.history.current.fullPath == "/") {

      if (store.state.currentCard > 0) {

        i = store.state.currentCard - 1;
        store.commit("changecurrentCard", i);

      }
    }


  } else {
    // this means the direction of the mouse wheel could not be determined
  }
}
document.onmousewheel = function (e) {
  handleMouseWheelDirection(detectMouseWheelDirection(e));
};
if (window.addEventListener) {
  document.addEventListener('DOMMouseScroll', function (e) {
    handleMouseWheelDirection(detectMouseWheelDirection(e));
  });
}
