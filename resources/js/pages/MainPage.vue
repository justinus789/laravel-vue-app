<template>
    <v-app>
        <OrganismHeader class="pa-4" />
        <div class="px-8 pb-4 mb-15">
            <OrganismA />
            <OrganismB />
        </div>
        <OrganismFooter class="position-absolute bottom-0 w-100" />
    </v-app>
</template>

<script>
import OrganismHeader from "../components/organisms/OrganismHeader.vue";
import OrganismFooter from "../components/organisms/OrganismFooter.vue";
import OrganismA from "../components/organisms/OrganismA.vue";
import OrganismB from "../components/organisms/OrganismB.vue";

export default {
    name: "MainPage",
    components: {
        OrganismA,
        OrganismB,
        OrganismHeader,
        OrganismFooter,
    },
};
</script>
