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
        /** Funzione che eredita la funzionalità del componente genitore
         * 
         */
        myFavoriteListChild() {
            this.$parent.myFavoriteList();
        },

        /** Riceve in input una stringa, se quella stringa coincide con uno dei tipi
         * di badge presenti nell'array modifica il valore di myBadgeValue con il valore
         * del badge coincidente
         * 
         * @param {string}  badgetype
         */
        badgesManager(badgetype) {
            // Ripulisco il valore di myBadgeValue
            this.myBadgeValue = "";
            //Ciclo tra i badges
            //Verifico l'id del mio oggetto e il valore della stringa in input
            //console.log(this.product.id);
            //console.log(badgetype);
            //Ciclo all'intero dell'array badges
            this.product.badges.forEach((badge, index) => {
                //Verifco se l'index è corretto
                //console.log([index])
                //Verifico se esiste il tipo di badge
                // console.log(badge.type == badgetype);
                if (badge.type == badgetype) {
                    //Controllo se è quello giusto
                    //console.log(badge.type);
                    this.myBadgeValue = badge.value
                    // Verifco la corretta assegnazione
                    //console.log(this.myBadgeValue);

                }
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

                    <span v-if="this.badgesManager('discount') != false" class="">
                        <span v-if="this.myBadgeValue" class="red-text discount">
                            {{ this.myBadgeValue }}%
                        </span>
                    </span>

                    <span v-if="this.badgesManager('tag') != false" class="">
                        <span v-if="this.myBadgeValue" class=" green-text green">
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