import Vuex from 'vuex';
import Vue from 'vue';
import firebase from 'firebase';

Vue.use(Vuex);
const database = firebase.database();
export const store = new Vuex.Store({
    state: {
      products: []
    },
    mutations: {
        getProducts: (state, snapshot) => {
          console.log(snapshot, 'from here')
          state.products = snapshot
        }
    },
    actions: {
      getAllProducts:(context) => {
        database.ref('/products').once('value').then((snapshot) => {
          context.commit('getProducts', snapshot.val());
        })
        
      },
      addProduct: (context, newProduct) => {
        var productRef = database.ref('/products')
        productRef.push().set(newProduct);
        productRef.once('value').then((snapshot) => {
          context.commit('getProducts', snapshot.val())
        });
      },
      getCategory: (context, type) => {
        console.log(type)
      }
      
    },

    getters: {
      getCategoryByType: (state) => (type)=> {
        console.log(type)
        return Object.values(state.products).filter(product => product.category === type)
      }
    }
}) 

