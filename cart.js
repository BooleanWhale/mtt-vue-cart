import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js';

const app = new Vue({
  el: '#app',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Product 1',
          price: 10.00,
        },
        {
          id: 2,
          name: 'Product 2',
          price: 10.00,
        },
        {
          id: 3,
          name: 'Product 3',
          price: 10.00,
        },
        {
          id: 4,
          name: 'Product 4',
          price: 10.00,
        }
      ],
      cart: [],
      showCart: false
    }
  },
  methods: {
    addToCart(product, quantity) {
      if (quantity < 1 || isNaN(quantity)) return
      const index = this.cart.findIndex(cartProduct => cartProduct.id === product.id)
      if (index >= 0) {
        this.cart[index].quantity += quantity
      } else {
        this.cart.push({ ...product, quantity })
      }
      console.log(this.cart)
    }
  }
})