<script>
//import { products } from "../data.js"
import ProductCard from "../components/ProductCard.vue";
import FavoritesItem from "../components/FavoritesItem.vue";
import { state } from '../state.js'

export default {
    name: "AppMain",
    components: {
        ProductCard,
        FavoritesItem,
    },
    data() {
        return {
            state,
            //impotered
            //products,
            //An array that contain my favorite things
            //myFavorite: [],
        }
    },
    methods: {
    },
    created() {
        //console.log(this.state);
        this.state.myProducts()
    },
    mounted(){
        this.state.myFavoriteList();
    }
}
</script>

<template>

    <main class=" ">

        <div class="main_container container_75 flex-column">
            <!--             <div>{{ state.message }}</div>-->
            <div v-if="this.state.myFavorite.length > 0"
                class="favorites-container col-6 text-center ">
                <FavoritesItem :favorite="item" v-for="item in state.myFavorite" />
            </div>

            <div class="products-container row d-flex">
                <ProductCard :product="product" v-for="product in state.products" />
            </div>
        </div>
    </main>

</template>

<style lang="scss"></style>
