<script>

export default {
    name: "ProductCard",

    props: {
        product: Object
    }
}
</script>

<template>
    <div class="col4">
        <!--Card is all the containter with three things:
                         images, text and buttons(buttons are moved inside the card)  -->
        <div class="card">
            <div class="card_up">
                <img class="main_image" :src="product.mainImg">
                <img class="hover_image" :src="product.hoverImg">
            </div>
            <div class="card_bottom">
                <p class="small_text">{{ product.brand }}</p>
                <p class="text_bold">{{ product.description }}</p>
                <p class="€ small_text">
                    <span class="text_bold"> {{ product.priceNew.toFixed(2) }}€ </span>
                    <span class="">{{ product.priceOld }}€</span>
                </p>
            </div>
            <div class="heart">&hearts;</div>
            <div class="btn_img ">
                <span class="discount">{{ product.badges[1].value }}%</span>
                <span class="green text">Sostenibilità</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>