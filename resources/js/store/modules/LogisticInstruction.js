const state = () => ({
    form: {
        vendor: "Amarit & Associates Logistics Co Ltd",
        invoiceTo: "MITO",
        attentionOf: "John Smith",
        quotationNo: "ABC-123-01",
        vendorAddress:
            "Marubeni-Itochu Tublars Asia Pte Ltd (2 Shenton Way SGX Centre 1, #07-01 (S) (068804))",
        customerContract: "ADNOC-ONSHORE",
        customerPoNo: "A123XXHTA0192",
    },
});

const mutations = {
    updateForm(state, payload) {
        state.form[payload.field] = payload.value;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
};
