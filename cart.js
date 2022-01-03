import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js';

const app = new Vue({
  el: '#app',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Animal product',
          price: 14.20,
          image: 'https://placeimg.com/250/250/animals'
        },
        {
          id: 2,
          name: 'People product',
          price: 9.99,
          image: 'https://placeimg.com/250/250/people'
        },
        {
          id: 3,
          name: 'Places product',
          price: 10.00,
          image: 'https://placeimg.com/250/250/arch'
        },
        {
          id: 4,
          name: 'Tech product',
          price: 13.50,
          image: 'https://placeimg.com/250/250/tech'
        }
      ],
      cart: [],
      currencySymbol: '$',
      showCart: false
    }
  },
  computed: {
    totalValue() {
      let total = 0;
      this.cart.forEach(product => {
        total += product.price * product.quantity
      })
      return total
    },
    totalQuantity() {
      let total = 0;
      this.cart.forEach(product => {
        total += product.quantity
      })
      return total
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
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(product => product.id != productId)
    },
    clearCart() {
      this.cart = this.cart.map(product => {
        return {...product, quantity: 0}
      })
    },
    toggleTheme(theme) {
      const currentTheme = document.documentElement.getAttribute("data-theme")
      if (currentTheme !== theme) {
        document.documentElement.setAttribute('data-theme', theme);
      } else {
        document.documentElement.setAttribute('data-theme', 'standard');
      }
    }
  }
})