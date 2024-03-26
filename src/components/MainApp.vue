<script>
//import { products } from "../data.js"
import ProductCard from "../components/ProductCard.vue";
import FavoritesItem from "../components/FavoritesItem.vue";
import CardModal from "./CardModal.vue"
import { state } from '../state.js'

export default {
    name: "AppMain",
    components: {
        ProductCard,
        FavoritesItem,
        CardModal
    },
    data() {
        return {
            isModalOpen: false,
            myModalProduct: null,
            state,
            //impotered
            //products,
            //An array that contain my favorite things
            //myFavorite: [],
        }
    },
    methods: {
        showProduct(product) {
            console.log("$event");
            console.log(product);
            this.myModalProduct = product;
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;

        }
    },
    created() {
        //console.log(this.state);
        this.state.myProducts()
    },
    mounted() {
        this.state.myFavoriteList();
    }
}
</script>

<template>
    <main class=" ">
        <div v-if="this.isModalOpen == true">
            <CardModal :product="myModalProduct" @close-modal="closeModal" />
        </div>

        <div class=" main_container container_75 flex-column">
            <h6 v-if="this.state.myFavorite.length > 0" class="p-1" style="color: red;">Products that you like:</h6>
            <div v-if="this.state.myFavorite.length > 0" class="favorites-container col-6 text-center ">
                <FavoritesItem :favorite="item" v-for="item in state.myFavorite" />
            </div>

            <div class="products-container row d-flex">
                <ProductCard :product="product" v-for="product in state.products" @show-product="showProduct" />
            </div>
        </div>
    </main>

</template>

<style lang="scss">
/*     // Utilizzo prima questo spazio, poi sistemo tutto nelle parti più consone
 */
/* The Modal (background) */
.modal {
    /*   display: none;
 */
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>
