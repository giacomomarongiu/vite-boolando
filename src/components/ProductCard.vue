<script>
import CardBadges from "../components/CardBadges.vue";
export default {
    name: "ProductCard",
    components: {
        CardBadges
    },
    props: {
        product: Object
    },
    data() {
        return {
        }
    },
    methods: {
        /** Funzione che eredita la funzionalità del componente genitore
         * 
         */
        myFavoriteListChild() {
            this.$parent.myFavoriteList();
        },
    },
}
</script>

<template>
    <!-- Col/Card like Bootstrap-->
    <div class="col4">
        <div class="card">
            <!-- Crad divided Up e Bottom-->
            <!--Crad UP-->

            <div class="card_up">
                <!--Change img on hover-->
                <img class="main_image" :src="product.mainImg">
                <img class="hover_image" :src="product.hoverImg">

                <!--Heart that call the Parent-Function on @click-->
                <div class="heart" @click="
                    (product.likeIt = product.likeIt ? false : true); //This is something like toggle
                    // Favorite list refreshed
                this.myFavoriteListChild();
                // Add class if  like-it is True
                " :class="{ 'like-it': product.likeIt }">
                    <a><i class="fa-solid fa-heart"></i></a>
                </div>

                <!--badges are printed here-->
                <div class="badges">
                    <CardBadges :badge="badge" v-for="badge in product.badges" />
                </div>
            </div>

            <div class="card_bottom">
                <p class="small_text">{{ product.brand }}</p>
                <p class="text_bold">{{ product.description }}</p>
                <p class="small_text">
                    <span class="text_bold"> {{ product.priceNew.toFixed(2) }}€ </span>
                    <span class="">{{ product.priceOld }}€</span>
                </p>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>