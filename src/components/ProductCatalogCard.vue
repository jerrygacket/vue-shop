<template>
    <img :src="product.img" alt="">
    <h2><router-link :to="'/product/' + product.id">{{ product.title }}</router-link></h2>
</template>

<script>
export default {
  props: {
        product: {
            type: Object,
            required: true
        }
    },
}
</script>