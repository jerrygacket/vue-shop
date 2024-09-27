<template>
    <div class="notes">
        <template v-for="product in productList" :key="product.id">
            <div class="note">
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