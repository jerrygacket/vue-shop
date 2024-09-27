<template>
  <div class="shop wrapper-content wrapper-content--fixed">
    <h1>Shop</h1>
    <productList :productList="productList" />
  </div>
</template>

<script>
import productList from '@/components/ProductList.vue'

export default {
  components: {
    productList
  },
  data () {
    return {
      productList: null
    }
  },
  created () {
    this.productList = this.$store.getters.getProductList;
    console.log(this.productList)
  }
}
</script>
