<template>
    <footer class="bg-whitesmoke d-flex justify-end pa-6">
        <v-btn large class="text-none mx-2" color="#F4F4F4" depressed>
            Cancel
        </v-btn>
        <v-btn
            large
            class="text-none mx-2 white--text"
            outlined
            color="grey darken-2"
        >
            Save as Draft
        </v-btn>
        <v-btn
            large
            width="200"
            class="text-none mx-2 white--text"
            color="cyan darken-1"
            depressed
            @click="validateForm"
        >
            Submit
        </v-btn>

        <v-snackbar v-model="snackbar" :color="snackbarColor">
            {{ snakbarText }}
            <template v-slot:action="{ attrs }">
                <v-btn text v-bind="attrs" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "OrganismFooter",
    computed: {
        ...mapState({
            logisticInstruction: (state) => state.logisticInstruction.form,
            costDetail: (state) => state.costDetail.formData,
        }),
    },
    data() {
        return {
            snackbar: false,
            snakbarText: "",
            snackbarColor: "",
        };
    },
    methods: {
        validateForm() {
            const {
                vendor,
                invoiceTo,
                attentionOf,
                quotationNo,
                vendorAddress,
                customerContract,
                customerPoNo,
            } = this.logisticInstruction;

            if ( !vendor || !invoiceTo || !attentionOf || !quotationNo || !vendorAddress ||
                !customerContract || !customerPoNo ) {
                this.snackbar = true;
                this.snackbarColor = "red";
                this.snakbarText = "All Logistic Instruction fields is required";
            } else {
                let isValid = true;

                for (let i = 0; i < this.costDetail.length; i++) {
                    const {
                        description,
                        qty,
                        uom,
                        unitPrice,
                        discount,
                        vat,
                        currency,
                        chargeTo,
                    } = this.costDetail[i];

                    if ( !description || !qty || !uom || !unitPrice || discount === "" || vat === "" ||
                        !currency || !chargeTo ) {
                        isValid = false;
                        this.snackbar = true;
                        this.snackbarColor = "red";
                        this.snakbarText = "All Cost Detail fields is required";

                        break;
                    } else if ( isNaN(qty) || isNaN(unitPrice) || isNaN(discount) || isNaN(vat) ) {
                        isValid = false;
                        this.snackbar = true;
                        this.snackbarColor = "red";
                        this.snakbarText = "Qty, UOM, Unit Price, Discount and VAT must be a number values";

                        break;
                    } else if (Number(qty) <= 0 || Number(unitPrice) <= 0) {
                        isValid = false;
                        this.snackbar = true;
                        this.snackbarColor = "red";
                        this.snakbarText = "Qty and UOM can not be 0 or negative values";

                        break;
                    } else if (
                        (Number(discount) < 0 || Number(discount) > 100) || 
                        ( Number(vat) < 0 || Number(vat) > 100)
                    ) {
                        isValid = false;
                        this.snackbar = true;
                        this.snackbarColor = "red";
                        this.snakbarText = "Discount and VAT must have values in the range of 0 to 100";

                        break;
                    }

                    if (isValid) {
                        this.snackbar = true;
                        this.snackbarColor = "green";
                        this.snakbarText = "Submitted !";
                    }
                }
            }
        },
    },
};
</script>

<style scoped>
.bg-whitesmoke {
    background: #f4f4f4;
}
</style>
