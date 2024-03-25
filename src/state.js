
import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({

    message: 'This is a test',
    products: [],
    myFavorite: [],

    myProducts() {
        axios.get('http://localhost:3000/products')
            .then((response) => {
                //Verifico
                console.log(response);
                console.log(response.data);
                //Assegno al mio array vuoto i prodotti
                this.products = [...response.data]

                // Genero la prima lista di preferiti
                this.myFavoriteList();
            }
            ).catch(err => {
                console.error(err.message)
            })
    },

    /**Questa funzione permette di filtrare l'array dei prodotti in lista
    * e contenre solo quelli che con il "like"         * 
     */
    myFavoriteList() {
        this.myFavorite = this.products.filter(product => {
            if (product.likeIt) { return true }
        });
        console.log(this.myFavorite);
    },

})