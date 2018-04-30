<template>
<div class="container">
<navBar></navBar>
<span class="text-center"><h4> New Summer Releases</h4></span>
<div class="container">
<div class="row">
  <div class="col-sm" v-for="(product, index) in allProducts" :key="index">
<product-card :product="product" :index="index"></product-card>
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
      if (!Object.keys(this.$store.state.products).length) {
        this.fetchProducts();
      }  
  },

  computed: {
     allProducts: function() {
       return this.$store.state.products;
     }
  }
}
</script>
