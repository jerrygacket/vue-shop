<template>
    <div class="container">
        
        <div class="product__wrapper">
        <div class="product-slider">
            <Carousel :items-to-show="1" :wrapAround="true">
    <Slide v-for="img, index in product.gallery" :key="index">
        <img :src="img.img" alt="">
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
            
        </div>
        <div class="product-content">
            <h1 class="title">Product: {{ product.title }}</h1>
            <p>{{ product.description }}</p>
        </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
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