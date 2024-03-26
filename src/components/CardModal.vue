<script>
import { state } from '../state.js'
export default {
    emits: ['closeModal'],
    name: "CardModal",
    props: {
        product: Object
    },
    data() {
        return {
            state,
        }
    }
}
</script>

<template>
    <!--Modal Section-->
    <!--         <button @click="this.isModalOpen = true">openModal</button> -->
    <!-- The Modal -->

    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <span class="close" @click=" this.$emit('closeModal')">&times;</span>
            <div class="modal-container">
                <div class="col-modal">
                    <img class="main_image col-modal" :src="product.mainImg">
                    <img class="main_image col-modal" :src="product.hoverImg">
                </div>
                <div class="col-modal">
                    <p class="small_text">{{ product.brand }}</p>
                    <p class="text_bold">{{ product.description }}</p>
                    <p class="small_text">Lo paghi solo
                        <span class="text_bold" style="color: red;"> {{ product.priceNew.toFixed(2) }}€ </span>
                    </p>
                </div>

            </div>
        </div>
    </div>



</template>

<style lang="scss" scoped>
.modal-content{
max-width: 600px;
display: flex;
justify-content:center
}
.modal-container {
    max-width: 100%;
    display: flex;
    justify-content:space-between ;

    .imgs {
        display: flex;
    }

    img {
        text-align: center;
        object-fit: cover;
        padding: 1rem;
    }

    .col-modal {
        width: 50%;
        align-self: center;
    }
}
</style>