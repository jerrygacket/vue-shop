<template>
    <div class="item__wrapper">
        <template v-for="product in productList" :key="product.id">
            <div class="items">
                <productCatalogCard :product="product" />
            </div>
        </template>
    </div>
</template>

<script>
import productCatalogCard from '@/components/ProductCatalogCard.vue'

export default {
  components: {
    productCatalogCard
  },
  props: {
        productList: {
            type: Array,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.item__wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.items {
  max-width: 48%;
  text-align: center;
  p {
    font-size: 22px;
  }
}
</style>