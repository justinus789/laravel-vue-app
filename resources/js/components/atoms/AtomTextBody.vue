<template>
    <p class="text-body-1 mt-1 mb-0">{{ text }}</p>
</template>

<script>
export default {
    name: "AtomTextBody",
    props: {
        text: {
            type: String,
            required: true,
        },
    },
};
</script>
