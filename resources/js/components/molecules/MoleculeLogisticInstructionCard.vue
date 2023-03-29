<template>
    <v-card flat class="mx-6">
        <v-btn
            width="140"
            class="mt-2 text-none"
            small
            color="grey lighten-2"
            depressed
            rounded
        >
            <AtomTextBody2 text="Draft" />
        </v-btn>

        <hr class="my-3" />

        <div class="pa-2">
            <v-row no-gutters>
                <v-col cols="9" class="px-3 b-right">
                    <v-row no-gutters>
                        <v-col cols="3">
                            <AtomTextBody2 text="Assigned Vendor" />
                            <v-select
                                class="my-2"
                                dense
                                background-color="#F4F4F4"
                                flat
                                solo
                                hide-details
                                placeholder="Select an option"
                                :items="vendorOption"
                                item-text="name"
                                item-value="name"
                                :value="form.vendor"
                                @input="updateForm('vendor', $event)"
                            />
                        </v-col>
                        <v-col class="px-3" cols="3">
                            <AtomTextBody2 text="Attention Of" />
                            <v-text-field
                                dense
                                class="mt-2"
                                background-color="#F4F4F4"
                                flat
                                solo
                                hide-details
                                placeholder="Attention Of"
                                :value="form.attentionOf"
                                @input="updateForm('attentionOf', $event)"
                            />
                        </v-col>
                        <v-col class="px-3" cols="3">
                            <AtomTextBody2 text="Quotation No." />
                            <v-text-field
                                dense
                                class="mt-2"
                                background-color="#F4F4F4"
                                flat
                                solo
                                hide-details
                                placeholder="Quotation No."
                                :value="form.quotationNo"
                                @input="updateForm('quotationNo', $event)"
                            />
                        </v-col>
                        <v-col class="px-3" cols="3">
                            <AtomTextBody2 text="Invoice To" />
                            <v-select
                                class="my-2"
                                dense
                                background-color="#F4F4F4"
                                flat
                                solo
                                hide-details
                                placeholder="Select an option"
                                :items="invoiceToOption"
                                item-text="name"
                                item-value="name"
                                :value="form.invoiceTo"
                                @input="updateForm('invoiceTo', $event)"
                            />
                        </v-col>

                        <v-col cols="12">
                            <AtomTextBody2 class="mt-2" text="Vendor Address" />
                            <v-text-field
                                dense
                                class="mt-2"
                                background-color="#F4F4F4"
                                flat
                                solo
                                hide-details
                                placeholder="Vendor Address"
                                :value="form.vendorAddress"
                                @input="updateForm('vendorAddress', $event)"
                            />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="3" class="px-3">
                    <AtomTextBody2 text="Customer - Contract" />
                    <v-select
                        class="my-2"
                        dense
                        background-color="#F4F4F4"
                        flat
                        solo
                        hide-details
                        placeholder="Select an option"
                        :items="customerContractOption"
                        item-text="name"
                        item-value="name"
                        :value="form.customerContract"
                        @input="updateForm('customerContract', $event)"
                    />

                    <AtomTextBody2 class="mt-4" text="Customer PO No." />
                    <v-select
                        class="my-2"
                        dense
                        background-color="#F4F4F4"
                        flat
                        solo
                        hide-details
                        placeholder="Select an option"
                        :items="customerPoNoOption"
                        item-text="name"
                        item-value="name"
                        :value="form.customerPoNo"
                        @input="updateForm('customerPoNo', $event)"
                    />
                </v-col>
            </v-row>
        </div>
    </v-card>
</template>

<script>
import AtomTextBody2 from "../atoms/AtomTextBody2.vue";
import { mapState } from "vuex";

export default {
    name: "MoleculeLogisticInstructionCard",
    components: {
        AtomTextBody2,
    },
    computed: {
        ...mapState("logisticInstruction", {
            form: (state) => state.form,
        }),
    },
    data() {
        return {
            vendorOption: [
                { id: 1, name: "Amarit & Associates Logistics Co Ltd" },
            ],
            invoiceToOption: [{ id: 1, name: "MITO" }],
            customerContractOption: [{ id: 1, name: "ADNOC-ONSHORE" }],
            customerPoNoOption: [{ id: 1, name: "A123XXHTA0192" }],
        };
    },
    methods: {
        updateForm(field, value) {
            this.$store.commit("logisticInstruction/updateForm", {
                field,
                value,
            });
        },
    },
};
</script>

<style scoped>
.b-right {
    border-right: 1px dashed rgb(178, 177, 177);
}
</style>
