<script>
import {products} from "../data.js"
import CardApp from "../components/ProductCard.vue";
export default {
    name: "AppMain",
    components:{
        CardApp
    },
    data() {
        return {
           products,
        }
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
