import axios from "axios";

const state = () => ({
    uom: [],
    currency: [],
    chargeTo: [],
});

const mutations = {
    setDropdownData(state, payload) {
        state.uom = payload.uom;
        state.currency = payload.currency;
        state.chargeTo = payload.charge_to;
    },
};

const actions = {
    async fetchAllDropdownData({ commit }) {
        try {
            const { data } = await axios.get(
                "http://127.0.0.1:8000/api/dropdown-data"
            );

            commit("setDropdownData", data.data);
        } catch (error) {
            console.log(error);
        }
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
