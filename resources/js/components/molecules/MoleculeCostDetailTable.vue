<template>
    <v-slide-y-transition>
        <v-data-table
            v-show="showDataTable"
            disable-pagination
            :mobile-breakpoint="0"
            :headers="headers"
            :hide-default-footer="true"
            class="elevation-1 mb-10"
        >
            <template v-slot:no-data> No Cost Detail data </template>
            <template v-slot:body>
                <tbody>
                    <tr v-for="(item, index) in formData" :key="index">
                        <td>
                            <v-text-field
                                class="my-4"
                                dense
                                background-color="#F4F4F4"
                                flat
                                solo
                                hide-details
                                placeholder="description"
                                :value="item.description"
                                @input="
                                    updateFormData(index, 'description', $event)
                                "
                            />
                        </td>
                        <td>
                            <v-text-field
                                class="my-4"
                                dense
                                background-color="#F4F4F4"
                                flat
                                solo
                                hide-details
                                placeholder="Qty"
                                :value="item.qty"
                                @input="updateFormData(index, 'qty', $event)"
                            />
                        </td>
                        <td>
                            <v-select
                                class="my-4"
                                dense
                                background-color="#F4F4F4"
                                flat
                                solo
                                hide-details
                                placeholder="Select an option"
                                :items="uomOption"
                                item-text="name"
                                item-value="name"
                                :value="item.uom"
                                @input="updateFormData(index, 'uom', $event)"
                            />
                        </td>
                        <td>
                            <v-text-field
                                class="my-4"
                                dense
                                background-color="#F4F4F4"
                                flat
                                solo
                                hide-details
                                placeholder="Unit Price"
                                :value="item.unitPrice"
                                @input="
                                    updateFormData(index, 'unitPrice', $event)
                                "
                            />
                        </td>
                        <td>
                            <v-text-field
                                class="my-4"
                                dense
                                background-color="#F4F4F4"
                                flat
                                solo
                                hide-details
                                placeholder="Discount"
                                :value="item.discount"
                                @input="
                                    updateFormData(index, 'discount', $event)
                                "
                                maxlength="3"
                            />
                        </td>
                        <td>
                            <v-text-field
                                dense
                                class="my-4"
                                background-color="#F4F4F4"
                                flat
                                solo
                                hide-details
                                placeholder="VAT"
                                :value="item.vat"
                                @input="updateFormData(index, 'vat', $event)"
                                maxlength="3"
                            />
                        </td>
                        <td>
                            <v-icon class="my-4" color="grey">
                                mdi-arrow-right-bold
                            </v-icon>
                        </td>
                        <td>
                            <v-select
                                class="my-4"
                                dense
                                background-color="#F4F4F4"
                                flat
                                solo
                                hide-details
                                placeholder="Select an option"
                                :items="currencyOption"
                                item-text="name"
                                item-value="name"
                                :value="item.currency"
                                @input="
                                    updateFormData(index, 'currency', $event)
                                "
                            />
                        </td>
                        <td>
                            <AtomTextBody :text="item.vatAmount.toFixed(2)" />
                        </td>
                        <td>
                            <AtomTextBody :text="item.subTotal.toFixed(2)" />
                        </td>
                        <td>
                            <AtomTextBody :text="item.total.toFixed(2)" />
                        </td>
                        <td>
                            <v-select
                                class="my-4"
                                dense
                                background-color="#F4F4F4"
                                flat
                                solo
                                hide-details
                                placeholder="Select an option"
                                :items="chargeToOption"
                                item-text="name"
                                item-value="name"
                                :value="item.chargeTo"
                                @input="
                                    updateFormData(index, 'chargeTo', $event)
                                "
                            />
                        </td>
                        <td>
                            <v-btn
                                class="my-4"
                                color="#F4F4F4"
                                depressed
                                @click="removeFormData(index)"
                            >
                                <v-icon small> mdi-minus </v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </template>
            <template v-slot:footer>
                <hr class="my-0" />

                <v-row no-gutters class="px-4">
                    <v-col cols="6">
                        <div class="d-flex mt-6">
                            <div>
                                <AtomTextBody text="Exchange rate 1 USD =" />
                            </div>
                            <div class="w-25">
                                <v-text-field
                                    dense
                                    class="mx-2 mt-n1"
                                    background-color="#F4F4F4"
                                    flat
                                    solo
                                    hide-details
                                    v-model="exchRateToAED"
                                    reverse
                                />
                            </div>
                            <div><AtomTextBody text="AED" /></div>
                        </div>
                    </v-col>

                    <v-col cols="4" offset="1">
                        <v-row no-gutters class="table-card">
                            <v-col cols="3">
                                <AtomTextBody text="AED in Total" />
                            </v-col>

                            <v-col cols="3">
                                <AtomTextBody text="0.00" />
                            </v-col>

                            <v-col cols="3">
                                <AtomTextBody text="0.00" />
                            </v-col>

                            <v-col cols="3">
                                <AtomTextBody text="0.00" />
                            </v-col>
                        </v-row>

                        <v-row no-gutters class="table-card mt-1">
                            <v-col cols="3">
                                <AtomTextBody text="USD in Total" />
                            </v-col>

                            <v-col cols="3">
                                <AtomTextBody text="0.00" />
                            </v-col>

                            <v-col cols="3">
                                <AtomTextBody text="0.00" />
                            </v-col>

                            <v-col cols="3">
                                <AtomTextBody text="0.00" />
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="1">
                        <div class="d-flex justify-end">
                            <v-btn
                                class="mt-6 white--text"
                                height="40"
                                color="cyan"
                                depressed
                                @click="pushFormData()"
                            >
                                <v-icon small> mdi-plus </v-icon>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </template>
        </v-data-table>
    </v-slide-y-transition>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AtomTextBody from "../atoms/AtomTextBody.vue";

export default {
    name: "MoleculeCostDetail",
    components: {
        AtomTextBody,
    },
    props: {
        showDataTable: {
            type: Boolean,
            required: true,
        },
    },
    computed: {
        ...mapState("costDetail", {
            uomOption: (state) => state.uom,
            currencyOption: (state) => state.currency,
            chargeToOption: (state) => state.chargeTo,

            formData: (state) => state.formData,
        }),
    },

    data() {
        return {
            headers: [
                { text: "Description", sortable: false, width: "12%" },
                { text: "Qty", sortable: false, width: "8%" },
                { text: "UOM", sortable: false, width: "10%" },
                { text: "Unit Price", sortable: false, width: "8%" },
                { text: "Discount (%)", sortable: false, width: "8%" },
                { text: "VAT (%)", sortable: false, width: "8%" },
                { text: "", sortable: false, width: "4%" },
                { text: "Currency", sortable: false, width: "10%" },
                { text: "VAT Amount", sortable: false, width: "5%" },
                { text: "Sub Total", sortable: false, width: "5%" },
                { text: "Total", sortable: false, value: "total", width: "5%" },
                { text: "Charge To", sortable: false, width: "15%" },
                { text: "", sortable: false, value: "action" },
            ],
            exchRateToAED: "3.6725",
        };
    },

    mounted() {
        this.fetchAllDropdownData();
    },
    methods: {
        ...mapActions("costDetail", ["fetchAllDropdownData"]),

        updateFormData(index, field, value) {
            this.$store.commit("costDetail/updateFormData", {
                index,
                field,
                value,
            });
        },

        pushFormData() {
            this.$store.commit("costDetail/pushFormData", {
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
            });
        },

        removeFormData(index) {
            this.$store.commit("costDetail/removeFormData", { index });
        },
    },
};
</script>

<style scoped>
.table-card {
    background-color: #f4f4f4;
    padding: 0.75em;
}
</style>

<style lang="scss">
table th {
    background-color: #f4f4f4;
}
tbody {
    tr:hover {
        background-color: transparent !important;
    }
}
</style>
