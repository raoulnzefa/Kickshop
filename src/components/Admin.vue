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
              <label for="productCatergory">Category</label>
              <select class="form-control" id="productCategory" v-on:change="handleSelect">
                <option value="">Select Category</option>
                <option value="accessories">Accessories</option>
                <option value="denim">Denim</option>
                <option value="kicks">Kicks</option>
                <option value="jeans">Jeans</option>
                <option value="pants">Pants</option>
                <option value="shirts">Shirts</option>
                 <option value="shorts">Shorts</option>
                  <option value="jackets">Jackets</option>
              </select>
            </div>
            <div class="form-group">
              <label for="productImage">Image</label>
            <div class="custom-file">
              <input type="file" name="file" class="custom-file-input" id="customFile" v-on:change="handleImageChange">
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
import cloudinary from '../cloudinaryConfig';
import axios from 'axios';
export default {
  name: "admin",
  data: function() {
    return {
      title: '',
      quantity: '',
      productPrice: '',
      image: '',
      category: '',
      imageFile: {}
    };
  },
  methods: {
      handleImageChange: function(event) {
        return this.imageFile = event.target.files[0];
      },
      handleSelect: function(event) {
        return this.category = event.target.value
      },
      handleProductClick: function (event){
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', this.imageFile);
        formData.append('upload_preset', process.env.CLOUDINARY_PRESET);
        axios({
         url: process.env.CLOUDINARY_URL,
         method: 'POST',
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
         },
         data: formData
       }).then((response) => {
         console.log(response.data)
          var newProduct = {
            title: this.title,
            quantity: this.quantity,
            productPrice: this.productPrice,
            imageUrl: response.data.url,
            category: this.category
          }
          this.$store.dispatch("addProduct", newProduct);
       }).catch((error) => {
         console.log(error);
       })
      },
  }
};
</script>

