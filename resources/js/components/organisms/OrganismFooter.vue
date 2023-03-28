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
        >
            Submit
        </v-btn>
    </footer>
</template>

<script>
export default {
    name: "OrganismFooter",
};
</script>

<style scoped>
.bg-whitesmoke {
    background: #f4f4f4;
}
</style>
