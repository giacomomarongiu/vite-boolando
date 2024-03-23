<script>
import { products } from "../data.js"
import CardApp from "../components/ProductCard.vue";
export default {
    name: "AppMain",
    components: {
        CardApp
    },
    data() {
        return {
            products,
            myFavorite:[],
        }
    },
    methods: {
        randomDiscount() {
            this.products.forEach(product => {
                //console.log(product);
                //SE esiste il tag "discount" genero uno sconto random
                product.badge
                product.badges[1].value = Math.floor(Math.random() * 90);
                //console.log(product.badges[1].value)
                product.priceNew = product.priceOld - (product.priceOld * product.badges[1].value / 100)
                //console.log(product.priceNew.toFixed(2));
            });
        },
        myFavoriteList(){
            this.myFavorite=this.products.filter(product => {
                if (product.likeIt){return true}
            });
            console.log(this.myFavorite);
        },

    },
    mounted() {
        this.randomDiscount();
        this.myFavoriteList();
    },
}
</script>

<template>
    <!--Main with 1row divided by column (1/3 of row)-->
    <main>
        <div class="main_container container_75">
            <div class="row d-flex">
                <CardApp :product="product" v-for="product in products" />
            </div>
        </div>
    </main>

</template>

<style lang="scss"></style>
