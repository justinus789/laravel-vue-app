<template>
    <v-app>
        <OrganismHeader class="pa-4" />

        <div class="px-8 py-4 mb-15">
            <OrganismB />
        </div>

        <OrganismFooter class="position-absolute bottom-0 w-100" />
    </v-app>
</template>

<script>
import { mapState } from "vuex";

import OrganismHeader from "../components/organisms/OrganismHeader.vue";
import OrganismFooter from "../components/organisms/OrganismFooter.vue";
import OrganismB from "../components/organisms/OrganismB.vue";

export default {
    name: "MainPage",
    components: {
        OrganismB,
        OrganismHeader,
        OrganismFooter,
    },
    computed: {
        ...mapState("costDetail", {
            data: (state) => state,
        }),
    },
    mounted() {
        console.log(this.data);
    },
};
</script>
