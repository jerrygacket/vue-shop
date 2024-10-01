<template>
  <div class="shop wrapper-content wrapper-content--fixed">
    <div class="container">
      <productMainCard :product="product"/>
    </div>
  </div>
</template>

<script>
import productMainCard from '@/components/ProductMainCard.vue'

export default {
  components: {
    productMainCard
  },
  data () {
    return {
      product: null
    }
  },
  created () {
    this.product = this.$store.getters.getProductById(this.$route.params.id);
    console.log(this.product)
  }
}
</script>
