require("./bootstrap");

import Vue from "vue";

import store from "./store";
import vuetify from "../plugins/vuetify";

Vue.component("main-page", require("./pages/MainPage.vue").default);

new Vue({
    store,
    vuetify,
}).$mount("#app");
