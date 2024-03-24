<script>
import { products } from "../data.js"
import ProductCard from "../components/ProductCard.vue";
import FavoritesItem from "../components/FavoritesItem.vue";

export default {
    name: "AppMain",
    components: {
        ProductCard,
        FavoritesItem,
    },
    data() {
        return {
            //impotered
            products,
            //An array that contain my favorite things
            myFavorite: [],
        }
    },
    methods: {
        //Deleted Function
        /*         randomDiscount() {
                    this.products.forEach(product => {
                        //console.log(product);
                        product.badges.forEach((badge) => {
                            //console.log(badge.type);
                            //SE esiste il tag "discount" genero uno sconto random
                            if (badge.type == "discount") {
                                badge.value = Math.floor(Math.random() * 90);
                                //console.log(product.badges[1].value)
                                product.priceNew = product.priceOld - (product.priceOld * badge.value / 100)
                                //console.log(product.priceNew.toFixed(2));
                            }
                        });
                    });
                }, */

        /**Questa funzione permette di filtrare l'array dei prodotti in lista
         * e contenre solo quelli che con il "like"         * 
         */
        myFavoriteList() {
            this.myFavorite = this.products.filter(product => {
                if (product.likeIt) { return true }
            });
            console.log(this.myFavorite);
        },

    },
    mounted() {
        //this.randomDiscount();
        this.myFavoriteList();
    },
}
</script>

<template>

    <main class=" ">

        <div class="main_container container_75 d-flex flex-column justify-content-center">

            <div class="favorites col12 text-center row  d-flex ">
                <FavoritesItem :favorite="item" v-for="item in myFavorite" />
            </div>

            <div class="products row d-flex">
                <ProductCard :product="product" v-for="product in products" />
            </div>
        </div>
    </main>

</template>

<style lang="scss"></style>
