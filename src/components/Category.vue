<template>

<div>
  <nav-bar></nav-bar>
  <ul>
    <li v-for="product in category">{{product.title}}</li>
    </ul>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import NavBar from './NavBar';
export default {
  name: 'categories',
  components: {
    'nav-bar': NavBar
  },
  data() {
    return {
      type: this.$route.query.type
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

  beforeRouteUpdate (to, from, next) {
    this.type = to.query.type;
  },

  computed: {
    category () {
      return this.$store.getters.getCategoryByType(this.type);
    }
    
  }

}
</script>

