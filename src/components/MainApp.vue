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
            isModalOpen: false,
            state,
            //impotered
            //products,
            //An array that contain my favorite things
            //myFavorite: [],
        }
    },
    methods: {
/*         modalToggle() {
            this.isModalOpen = this.isModalOpen ? true : false
        } */
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
        <!--Modal Section-->
        <button @click="this.isModalOpen = true">openModal</button>
        <!-- The Modal -->
        <div v-if="this.isModalOpen == true">
            <div id="myModal" class="modal">

                <!-- Modal content -->
                <div class="modal-content">
                    <span class="close" @click="this.isModalOpen=false">&times;</span>
                    <p>QUI LA CARD</p>
                </div>
            </div>
        </div>



        <div class="main_container container_75 flex-column">
            <!--             <div>{{ state.message }}</div>-->
            <div v-if="this.state.myFavorite.length > 0" class="favorites-container col-6 text-center ">
                <FavoritesItem :favorite="item" v-for="item in state.myFavorite" />
            </div>

            <div class="products-container row d-flex">
                <ProductCard :product="product" v-for="product in state.products" />
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
    margin: 15% auto;
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
