export default {
    state: {
        productList: [
            {
                id: 1,
                title: 'nike red',
                description: 'red nike boots',
                img: new URL('@/assets/img/shop-img/1.png', import.meta.url).href,
                gallery: [
                    {
                        name: 'nike 1',
                        img: new URL('@/assets/img/shop-img/1.png', import.meta.url).href
                    },
                    {
                        name: 'nike 1',
                        img: new URL('@/assets/img/shop-img/2.png', import.meta.url).href
                    },
                    {
                        name: 'nike 1',
                        img: new URL('@/assets/img/shop-img/3.png', import.meta.url).href
                    }
                ]
            },
            {
                id: 2,
                title: 'nike blue',
                description: 'blue nike boots',
                img: new URL('@/assets/img/shop-img/4.png', import.meta.url).href,
                gallery: [
                    {
                        name: 'nike 1',
                        img: new URL('@/assets/img/shop-img/4.png', import.meta.url).href
                    },
                    {
                        name: 'nike 1',
                        img: new URL('@/assets/img/shop-img/5.png', import.meta.url).href
                    },
                    {
                        name: 'nike 1',
                        img: new URL('@/assets/img/shop-img/6.png', import.meta.url).href
                    }
                ]
            },
            {
                id: 3,
                title: 'nike green',
                description: 'green nike boots',
                img: new URL('@/assets/img/shop-img/7.png', import.meta.url).href,
                gallery: [
                    {
                        name: 'nike 1',
                        img: new URL('@/assets/img/shop-img/7.png', import.meta.url).href
                    },
                    {
                        name: 'nike 1',
                        img: new URL('@/assets/img/shop-img/8.png', import.meta.url).href
                    },
                    {
                        name: 'nike 1',
                        img: new URL('@/assets/img/shop-img/9.png', import.meta.url).href
                    }
                ]
            },
            {
                id: 4,
                title: 'nike white',
                description: 'white nike boots',
                img: new URL('@/assets/img/shop-img/10.png', import.meta.url).href,
                gallery: [
                    {
                        name: 'nike 1',
                        img: new URL('@/assets/img/shop-img/10.png', import.meta.url).href
                    },
                    {
                        name: 'nike 1',
                        img: new URL('@/assets/img/shop-img/11.png', import.meta.url).href
                    },
                    {
                        name: 'nike 1',
                        img: new URL('@/assets/img/shop-img/12.png', import.meta.url).href
                    }
                ]
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
        },
        getProductById: (state) => (productId) => {
            return state.productList.find((element) => element.id === +productId)
          }
    },
}