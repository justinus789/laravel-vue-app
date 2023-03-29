import axios from "axios";

const state = () => ({
    uom: [],
    currency: [],
    chargeTo: [],

    formData: [
        {
            description: "",
            qty: "",
            uom: "SHP",
            unitPrice: "",
            discount: 0,
            vat: 0,
            currency: "USD",
            vatAmount: 0,
            subTotal: 0,
            total: 0,
            chargeTo: "",
        },
        {
            description: "",
            qty: "",
            uom: "SHP",
            unitPrice: "",
            discount: 0,
            vat: 0,
            currency: "AED",
            vatAmount: 0,
            subTotal: 0,
            total: 0,
            chargeTo: "",
        },
    ],
});

const mutations = {
    setDropdownData(state, payload) {
        state.uom = payload.uom;
        state.currency = payload.currency;
        state.chargeTo = payload.charge_to;
    },

    updateFormData(state, payload) {
        state.formData[payload.index][payload.field] = payload.value;
    },

    pushFormData(state, payload) {
        state.formData.push(payload);
    },

    removeFormData(state, payload) {
        state.formData.splice(payload.index, 1);
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
