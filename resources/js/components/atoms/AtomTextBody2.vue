<template>
    <p class="text-body-2 mb-0">{{ text }}</p>
</template>

<script>
export default {
    name: "AtomTextBody2",
    props: {
        text: {
            type: String,
            required: true,
        },
    },
};
</script>
