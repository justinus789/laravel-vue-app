<template>
    <v-slide-y-transition>
        <v-data-table
            v-show="showDataTable"
            disable-pagination
            :mobile-breakpoint="0"
            :headers="headers"
            :items="data"
            :hide-default-footer="true"
            class="elevation-1 mb-10"
        >
            <template v-slot:no-data> No Cost Detail data </template>
            <template v-slot:body="{ items }">
                <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                        <td>
                            <v-text-field
                                class="my-4"
                                dense
                                background-color="#F4F4F4"
                                flat
                                solo
                                hide-details
                                placeholder="description"
                                v-model="item.description"
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
                                v-model="item.qty"
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
                                v-model="item.uom"
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
                                v-model="item.unit_price"
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
                                v-model="item.discount"
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
                                v-model="item.vat"
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
                                v-model="item.currency"
                            />
                        </td>
                        <td>
                            <AtomTextBody :text="item.vat_amount.toFixed(2)" />
                        </td>
                        <td>
                            <AtomTextBody :text="item.sub_total.toFixed(2)" />
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
                                v-model="item.charge_to"
                            />
                        </td>
                        <td>
                            <v-btn
                                class="my-4"
                                color="#F4F4F4"
                                depressed
                                @click="data.splice(index, 1)"
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
                                @click="data.push(form)"
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
        }),
    },

    data() {
        return {
            headers: [
                {
                    text: "Description",
                    sortable: false,
                    value: "description",
                    width: "12%",
                },
                { text: "Qty", sortable: false, value: "qty", width: "8%" },
                { text: "UOM", sortable: false, value: "uom", width: "10%" },
                {
                    text: "Unit Price",
                    sortable: false,
                    value: "unit_price",
                    width: "8%",
                },
                {
                    text: "Discount (%)",
                    sortable: false,
                    value: "discount",
                    width: "8%",
                },
                { text: "VAT (%)", sortable: false, value: "vat", width: "8%" },
                { text: "", sortable: false, value: "icon", width: "4%" },
                {
                    text: "Currency",
                    sortable: false,
                    value: "currency",
                    width: "10%",
                },
                {
                    text: "VAT Amount",
                    sortable: false,
                    value: "vat_amount",
                    width: "5%",
                },
                {
                    text: "Sub Total",
                    sortable: false,
                    value: "sub_total",
                    width: "5%",
                },
                { text: "Total", sortable: false, value: "total", width: "5%" },
                {
                    text: "Charge To",
                    sortable: false,
                    value: "charge_to",
                    width: "15%",
                },
                { text: "", sortable: false, value: "action" },
            ],
            exchRateToAED: "3.6725",
            form: {
                description: "",
                qty: "",
                uom: "SHP",
                unit_price: "",
                discount: 0,
                vat: 0,
                currency: "USD",
                vat_amount: 0,
                sub_total: 0,
                total: 0,
                charge_to: "",
            },
            data: [
                {
                    description: "",
                    qty: "",
                    uom: "SHP",
                    unit_price: "",
                    discount: 0,
                    vat: 0,
                    currency: "USD",
                    vat_amount: 0,
                    sub_total: 0,
                    total: 0,
                    charge_to: "",
                },
                {
                    description: "",
                    qty: "",
                    uom: "SHP",
                    unit_price: "",
                    discount: 0,
                    vat: 0,
                    currency: "AED",
                    vat_amount: 0,
                    sub_total: 0,
                    total: 0,
                    charge_to: "",
                },
            ],
        };
    },

    mounted() {
        this.fetchAllDropdownData();
    },
    methods: {
        ...mapActions("costDetail", ["fetchAllDropdownData"]),
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
