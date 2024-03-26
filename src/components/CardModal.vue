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
            <img class="main_image" :src="product.mainImg">
            <!--Card BOTTOM-->
            <div class="card_bottom">
                <p class="small_text">{{ product.brand }}</p>
                <p class="text_bold">{{ product.description }}</p>
                <p class="small_text">
                    <span class="text_bold"> {{ product.priceNew.toFixed(2) }}€ </span>
                </p>
            </div>
        </div>
    </div>



</template>

<style lang="scss" scoped>
.modal-content {
    max-width: 300px;

    .main_image {
        text-align: center;
        max-width: 100%;
        object-fit: cover;
    }
}
</style>