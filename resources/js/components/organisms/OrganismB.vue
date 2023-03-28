<template>
    <section class="pa-2">
        <v-btn
            depressed
            color="white"
            class="text-body-1 text-none cyan--text mb-2"
            @click="showDataTable = !showDataTable"
        >
            Cost Detail
            <v-icon class="ml-2" color="cyan" small>
                mdi-arrow-down-drop-circle
            </v-icon>
        </v-btn>
        <MoleculeCostDetailTable :show-data-table="showDataTable" />
    </section>
</template>

<script>
import MoleculeCostDetailTable from "../molecules/MoleculeCostDetailTable.vue";

export default {
    name: "OrganismB",
    components: {
        MoleculeCostDetailTable,
    },
    data() {
        return {
            showDataTable: true,
        };
    },
};
</script>
