<template>
<router-link :to="{path:'product', query:{id: index}}">
<div class="container">
<div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="product.imageUrl" alt="">
  <div class="card-body">
    <p class="card-text">{{product.title}}</p>
    <p class="card-text">${{product.productPrice}}</p>
  </div>
</div>
</div>
</router-link>
</template>


<script>
export default {
  name: 'productCard',
  props:['product', 'index'],

}
</script>
<style scoped>
.card{
    height: 350px;
};
 img {
   object-fit: cover;
   height: 100%;
   width: 100%;
 }
</style>
