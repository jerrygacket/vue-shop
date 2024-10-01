<template>
    <div class="container">
        
        <div class="product__wrapper">
        <div class="product-slider">
            <carousel>

  <slide v-for="img,index in product.gallery" :key="index">
    <img :src="img.img" alt="">
  </slide>

</carousel>
            
        </div>
        <div class="product-content">
            <h1 class="title">Product: {{ product.title }}</h1>
            <p>{{ product.description }}</p>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
.product__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.product-slider,
.product-content {
max-width: 48%;
text-align: center;
}
</style>