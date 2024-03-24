<script>
export default {
    name: "FavoritesItem",
    props: {
        favorite: Object
    },
    data() {
        return {
        }
    },
}
</script>

<template>
    <!-- Col/Card like Bootstrap-->
    <div class="fav-col">
        <div class="favorite-item-card">
            <img class="favorite-item-img" :src="favorite.mainImg">
            <div class="favorite-item-info">
                <div class="favorite-item-text price"> {{ favorite.priceNew.toFixed(2) }}€ </div>
                <div class="favorite-item-text brand"> {{ favorite.brand }} </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>