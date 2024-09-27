<template>
    <div class="container">
        <h1>{{ product.title }}</h1>
        <img :src="product.img" alt="">
        <p>{{ product.description }}</p>
    </div>
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