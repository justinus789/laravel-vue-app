require("./bootstrap");

window.Vue = require("vue").default;

Vue.component("main-page", require("./pages/MainPage.vue").default);

new Vue({
    el: "#app",
});
