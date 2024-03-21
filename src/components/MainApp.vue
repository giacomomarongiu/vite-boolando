<script>
export default {
    name: "AppMain",
    data() {
        return {
            myCards: [
                {
                    mainImg: "/public/img/1.webp",
                    hoverImg: "/public/img/1b.webp",
                    brand: "Levi's",
                    description: "RELAXED FIT TEE UNISEX",
                    priceNow: "14,99 € ",
                    priceOld: "69,99 € ",
                },
                {
                    mainImg: "/public/img/2.webp",
                    hoverImg: "/public/img/2b.webp",
                    brand: "Zara",
                    description: "SLIM FIT",
                    priceNow: "14,99 € ",
                    priceOld: "19,99 € ",
                },
                {
                    mainImg: "/public/img/3.webp",
                    hoverImg: "/public/img/3b.webp",
                    brand: "Dolce & Gabbana",
                    description: "NORMAL FIT",
                    priceNow: "14,99 € ",
                    priceOld: "22,99 € ",
                },
                {
                    mainImg: "/public/img/4.webp",
                    hoverImg: "/public/img/4b.webp",
                    brand: "Hugo Boss",
                    description: "NORMAL FIT",
                    priceNow: "14,99 € ",
                    priceOld: "19,99 € ",
                },
                {
                    mainImg: "/public/img/5.webp",
                    hoverImg: "/public/img/5b.webp",
                    brand: "OVS",
                    description: "RELAXED FIT TEE UNISEX",
                    priceNow: "14,99 € ",
                    priceOld: "59,99 € ",
                },
                {
                    mainImg: "/public/img/6.webp",
                    hoverImg: "/public/img/6b.webp",
                    brand: "Primark",
                    description: "SLIM FIT",
                    priceNow: "14,99 € ",
                    priceOld: "22,99 € ",
                },
                
            ]
        }
    }
}
</script>

<template>
    <!--Main with 1row divided by column (1/3 of row)-->
    <main>
        <div class="main_container container_75">
            <div class="row d-flex">
                <div class="col4" v-for="card in myCards">
                    <!--Card is all the containter with three things:
                         images, text and buttons(buttons are moved inside the card)  -->
                    <div class="card">
                        <div class="card_up">
                            <img class="main_image" :src="card.mainImg">
                            <img class="hover_image" :src="card.hoverImg">
                        </div>
                        <div class="card_bottom">
                            <p class="small_text">{{ card.brand }}</p>
                            <p class="text_bold">{{ card.description }}</p>
                            <p class="€ small_text">
                                <span class="text_bold">{{ card.priceNow}}</span>
                                <span class="">{{ card.priceOld}}</span>
                            </p>
                        </div>
                        <div class="heart">&hearts;</div>
                        <div class="btn_img ">
                            <span class="discount">-50% </span>
                            <span class="green">Sostenibilità</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>

</template>

<style lang="scss"></style>
