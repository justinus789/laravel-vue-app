<template>
    <v-card class="pa-4 ma-2">
        <v-row>
            <v-col cols="2">
                <v-btn class="text-none" color="#F4F4F4" depressed>
                    <v-icon class="mt-1" color="cyan"> mdi-truck </v-icon>
                    <AtomTextBody class="mx-2" text="Logistic Instruction" />
                    <v-icon class="mt-1" color="grey darken-1" small>
                        mdi-arrow-down-drop-circle
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col cols="10">
                <MoleculeLogisticInstructionCard />
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import AtomTextBody from "../atoms/AtomTextBody.vue";
import MoleculeLogisticInstructionCard from "../molecules/MoleculeLogisticInstructionCard.vue";

export default {
    name: "OrganismA",
    components: {
        AtomTextBody,
        MoleculeLogisticInstructionCard,
    },
    data() {
        return {
            data: "tes",
        };
    },
};
</script>
