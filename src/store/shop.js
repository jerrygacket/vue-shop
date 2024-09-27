export default {
    state: {
        productList: [
            {
                id: 1,
                title: 'nike red',
                description: 'red nike boots',
                img: new URL('@/assets/img/shop-img/1.png', import.meta.url).href
            }
        ]
    },
    mutations: {
        
    },
    actions: {
        
    },
    getters: {
        getProductList(state) {
            return state.productList
        }
    },
}