<template>
<div class="container">
<div class="card" style="width: 15rem;">
  <img class="card-img-top" src="" alt="Card image cap">
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
