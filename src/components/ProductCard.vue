<script>

export default {
    myBadgeValue: "",
    name: "ProductCard",

    props: {
        product: Object
    },
    data() {
        return {

        }
    },
    methods: {
        myFavoriteListChild() {
            this.$parent.myFavoriteList();
        },

        badgesManager(string) {
            //Ciclo tra i badges
            this.product.badges.forEach(badge => {
                //Verifico se esiste il tipo di badge
                if (badge.type == string) {
                    //console.log(badge.value);
                    // gestistico il caso in cui sia undefined
                    /*                     if (badge.value == undefined) { return this.myBadgeValue=true } */
                    this.myBadgeValue = badge.value
                    return true

                } else { return false }
            });
        }
    },

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
                <div class="heart" @click="
                    (product.likeIt = product.likeIt ? false : true);
                this.myFavoriteListChild();
                " :class="{ 'like-it': product.likeIt }">
                    <a><i class="fa-solid fa-heart"></i></a>
                </div>
                <div class="btn_img">

                    <span class="discount" v-if="this.badgesManager('discount') != false">
                        <span v-if="this.myBadgeValue">
                            {{ this.myBadgeValue }}%
                        </span>

                    </span>

                    <span v-if="this.badgesManager('tag') != false" class="green">
                        <span v-if="this.myBadgeValue" class=" green-text ">
                            {{ this.myBadgeValue }}
                        </span>
                    </span>

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