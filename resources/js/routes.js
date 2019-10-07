"use strict";
exports.__esModule = true;
var StartPage_1 = require("./components/StartPage");
var GaleryPage_vue_1 = require("./components/Galery/GaleryPage.vue");
var RegisterPage_vue_1 = require("./components/Auth/RegisterPage.vue");
var ProfilePage_vue_1 = require("./components/Profile/ProfilePage.vue");
var ProfileGraphic_vue_1 = require("./components/Profile/ProfileGraphic.vue");
var ProfileGame_vue_1 = require("./components/Profile/ProfileGame.vue");
exports.routes = [
    { path: '', component: StartPage_1["default"] },
    { path: '/galery', component: GaleryPage_vue_1["default"], props: { overflowType: 'auto' } },
    { path: '/register', component: RegisterPage_vue_1["default"] },
    {
        path: '/profile/:id', component: ProfilePage_vue_1["default"], name: "profile", children: [
            { path: '/profile/:id/graphic', component: ProfileGraphic_vue_1["default"], name: 'profileGraphic' },
            { path: '/profile/:id/game', component: ProfileGame_vue_1["default"], name: 'profileGame' }
        ]
    }
];
