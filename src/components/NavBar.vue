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
          <router-link class="nav-item nav-link active" :to="{path: '/'}">Home<span class="sr-only">(current)</span></router-link>
          </div>
      <div class="col-sm">
      <router-link class="nav-item nav-link"  :to="{path:'categories', query:{type: 'accessories'}}">Accessories</router-link>
      </div>
      <div class="col-sm">
      <router-link class="nav-item nav-link"  :to="{path:'categories', query:{type: 'denim'}}">Denim</router-link>
      </div>
      <div class="col-sm">
      <router-link class="nav-item nav-link"  :to="{path:'categories', query:{type: 'kicks'}}">Kicks</router-link>
      </div>
      <div class="col-sm">
        <router-link class="nav-item nav-link" :to="{path:'categories', query:{type: 'jeans'}}">Jeans</router-link>
      </div>
      <div class="col-sm">
       <router-link class="nav-item nav-link"  :to="{path:'categories', query:{type: 'pants'}}">Pants</router-link>
      </div>
      <div class="col-sm">
        <router-link class="nav-item nav-link"  :to="{path:'categories', query:{type: 'shirts'}}">Shirts</router-link>
        </div>
      <div class="col-sm">
        <router-link class="nav-item nav-link"  :to="{path:'categories', query:{type: 'shorts'}}">Shorts</router-link>
        </div>
      <div class="col-sm">
        <router-link class="nav-item nav-link"  :to="{path:'categories', query:{type: 'jackets'}}">Jackets</router-link>
        </div>
      </div>
    </div>
  </div>
</nav>
</div>
    </div>
    <br />
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
    }
  }
};
</script>


