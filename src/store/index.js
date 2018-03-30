import Vuex from 'vuex';
import Vue from 'vue';
import firebase from 'firebase';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
      products: []
    },
    actions: {
      addProduct: (newProduct) => {
        firebase.database().ref('/products').then((response) => {
          store.commit(response.data)
        });
      }
    }
}) 

