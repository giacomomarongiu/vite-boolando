<script>
import CardApp from "../components/ProductCard.vue";
export default {
    name: "AppMain",
    components:{
        CardApp
    },
    data() {
        return {
            myCards: [
                {
                    mainImg: "/public/img/1.webp",
                    hoverImg: "/public/img/1b.webp",
                    brand: "Levi's",
                    description: "RELAXED FIT TEE UNISEX",
                    priceNow: "14,99€ ",
                    priceOld: "69,99€ ",
                },
                {
                    mainImg: "/public/img/2.webp",
                    hoverImg: "/public/img/2b.webp",
                    brand: "Zara",
                    description: "SLIM FIT",
                    priceNow: "14,99€ ",
                    priceOld: "19,99€ ",
                },
                {
                    mainImg: "/public/img/3.webp",
                    hoverImg: "/public/img/3b.webp",
                    brand: "Dolce & Gabbana",
                    description: "NORMAL FIT",
                    priceNow: "14,99€ ",
                    priceOld: "22,99€ ",
                },
                {
                    mainImg: "/public/img/4.webp",
                    hoverImg: "/public/img/4b.webp",
                    brand: "Hugo Boss",
                    description: "NORMAL FIT",
                    priceNow: "14,99€ ",
                    priceOld: "19,99€ ",
                },
                {
                    mainImg: "/public/img/5.webp",
                    hoverImg: "/public/img/5b.webp",
                    brand: "OVS",
                    description: "RELAXED FIT TEE UNISEX",
                    priceNow: "14,99€ ",
                    priceOld: "59,99€ ",
                },
                {
                    mainImg: "/public/img/6.webp",
                    hoverImg: "/public/img/6b.webp",
                    brand: "Primark",
                    description: "SLIM FIT",
                    priceNow: "14,99€ ",
                    priceOld: "22,99€ ",
                },
                
            ]
        }
    },
}
</script>

<template>
    <!--Main with 1row divided by column (1/3 of row)-->
    <main>
        <div class="main_container container_75">
            <div class="row d-flex">
                <CardApp :product="product" v-for="product in myCards" />

            </div>
        </div>
    </main>

</template>

<style lang="scss"></style>
