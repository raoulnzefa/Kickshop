<template>
<div class="container">
<div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="product.imageUrl" alt="">
  <div class="card-body">
    <p class="card-text">{{product.title}}</p>
    <p class="card-text">${{product.productPrice}}</p>
  </div>
</div>
</div>
</template>


<script>
export default {
  name: 'productCard',
  props:['product'],

}
</script>
<style scoped>
.card{
    height: 450px;
}
</style>
