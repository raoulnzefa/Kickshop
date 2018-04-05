<template>
<div class="container">
<navBar></navBar>
<div class="container">
<div class="row">
  <div class="col-sm" v-for="product in allProducts">
<product-card v-bind:product="product"></product-card>
</div>
</div>
</div>
</div>
</template>

<script>
import NavBar from './NavBar';
import ProductCard from './ProductCard';
export default {
  name: 'LandingPage',
  components: {
    'navBar': NavBar,
    'product-card': ProductCard
  }, 
  data () {
    return {
      products: []
    }
  },

  methods: {
    fetchProducts: function() {
      this.$store.dispatch('getAllProducts')
    }
  },

  created() {
      this.fetchProducts();
  },

  computed: {
     allProducts: function() {
       console.log(this.$store.state.products)
       return this.$store.state.products;
     }
  }
}
</script>
