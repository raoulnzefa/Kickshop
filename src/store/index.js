import Vuex from 'vuex';
import Vue from 'vue';
import firebase from 'firebase';
import cloudinary from '../cloudinaryConfig';

Vue.use(Vuex);
const database = firebase.database();
export const store = new Vuex.Store({
    state: {
      products: []
    },
    mutations: {
        getProducts: (state, snapshot) => {
          console.log(cloudinary)
          return Object.values(snapshot).forEach(element => {
           return state.products.push(element);
         });
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
        })
      }
      
    }
}) 

