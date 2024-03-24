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
    <div class="col4">
        <div class="favorite-item-card">
            <!-- Crad divided Up e Bottom-->
            <!--Crad UP-->

            <!--Change img on hover-->
            <img class="favorite-item-img" :src="favorite.mainImg">


            <p class="text_bold">{{ favorite.description }}</p>
            <span class="text_bold"> {{ favorite.priceNew.toFixed(2) }}€ </span>


        </div>
    </div>
</template>

<style lang="scss" scoped></style>