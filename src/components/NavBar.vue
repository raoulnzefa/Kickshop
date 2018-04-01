<template>
<div class='container'>
  <div class="row">
    <div class="col-sm-2">
      <h2>KickShop</h2>
      </div>
    <div class="col-sm-6">
      <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
  </div>
  <input type="text" v-model="search" placeholder="Search for products, brands and categories" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
  </div>
  </div>
  <div class="col-sm-3">
    <div class="btn btn-primary" v-on:click="handleClick">Search Products</div>
    </div>
  <div clas="col-sm">
    <span class=""><i class="material-icons">shopping_cart</i>Cart</span>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <div class="row">
        <div class="col-sm">
          <a class="nav-item nav-link active" href="#">Home<span class="sr-only">(current)</span></a>
          </div>
      <div class="col-sm">
      <a class="nav-item nav-link active" href="#">Accessories</a>
      </div>
      <div class="col-sm">
      <a class="nav-item nav-link" href="#">Denim</a>
      </div>
      <div class="col-sm">
      <a class="nav-item nav-link" href="#">Kicks</a>
      </div>
      <div class="col-sm">
        <a class="nav-item nav-link" href="#">Jeans</a>
      </div>
      <div class="col-sm">
        <a class="nav-item nav-link" href="#">Pants</a>
      </div>
      <div class="col-sm">
        <a class="nav-item nav-link" href="#">Shirts</a>
        </div>
      <div class="col-sm">
        <a class="nav-item nav-link" href="#">Shorts</a>
        </div>
      <div class="col-sm">
        <a class="nav-item nav-link" href="#">Jackets</a>
        </div>
      </div>
    </div>
  </div>
</nav>
</div>
    </div>
    <br />
<span class="text-center"><h4> New Summer Releases</h4></span>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      search: ''
    };
  },
  methods: {
    handleClick: function() {
      console.log(this.search)
    },
     getAllProducts: function () {
        this.$store.dispatch('getAllProducts');
    }
  },
  created() {
    return this.getAllProducts();
  }
};
</script>


