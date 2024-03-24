<script>
export default {
    name: "CardBadges",
    props: {
        badge: Object
    },
    data() {
        return {
        }
    },
}
</script>

<template>
    <span>
        <span :class="badge.type">
            {{ badge.value }} <span v-if="badge.value>0">%</span>
        </span>
    </span>
</template>