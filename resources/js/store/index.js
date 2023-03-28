import Vue from "vue";
import Vuex from "vuex";
import costDetail from "./modules/CostDetail";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        costDetail,
    },
    strict: true,
});
