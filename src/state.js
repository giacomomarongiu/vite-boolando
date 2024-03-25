
import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    message: 'This is a test',
    products: [],

    myProducts() {
        axios.get('http://localhost:3000/products')
            .then((response) => {
                console.log(response);
                console.log(response.data);
                this.products = response.data
            }
            ).catch(err => {
                console.error(err.message)
            })
    }

})