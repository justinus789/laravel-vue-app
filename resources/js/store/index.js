import Vue from "vue";
import Vuex from "vuex";
import costDetail from "./modules/CostDetail";
import logisticInstruction from "./modules/LogisticInstruction";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        costDetail,
        logisticInstruction,
    },
    strict: true,
});
