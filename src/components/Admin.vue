<template>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <h2 class="text-center">Add Products</h2>
    </div>
    </div>
  <div class="row">
    <div class="col-sm">
      <div class="jumbotron">
      <div class="row">
        <div class="col-sm">
          <form v-on:submit="handleProductClick">
            <div class="form-group">
              <label for="productName">Name</label>
              <input type="text"  v-model="title" class="form-control" id="productName" placeholder="Enter product name" >
            </div>
            <div class="form-group">
              <label for="productQuantity">Quantity</label>
              <input type="text" v-model="quantity" class="form-control" id="productQuantity" placeholder="Enter Product Quantity">
            </div>
            <div class="form-group">
              <label for="productPrice">Price</label>
              <input type="text" v-model="productPrice" class="form-control" id="productPrice"  placeholder="Enter Product Price">
            </div>
            <div class="form-group">
              <label for="productImage">Image</label>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile" v-on:change="handleImageChange">
              <label class="custom-file-label" for="customFile">Choose image file</label>
          </div>
          </div>
            <button type="submit" class="btn btn-primary" v-on:click="handleProductClick">Submit</button>
        </form>
          </div>
        </div>
      </div>
      </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "admin",
  data: function() {
    return {
      title: '',
      quantity: '',
      productPrice: '',
      image: ''
    };
  },
  methods: {
      handleImageChange: function(event) {
        return this.image = event.target.value
      },
      handleProductClick: function (event){
       event.preventDefault();
       var newProduct = {
         title: this.title,
         quantity: this.quantity,
         productPrice: this.productPrice,
         image: this.image
       }
       this.$store.dispatch("addProduct", newProduct);
      }
  }
};
</script>

