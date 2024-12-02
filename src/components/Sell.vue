<template>
  <div class="container-fluid mt-4">
    <!-- Cart Summary -->
    <div class="row">
      <div class="col-md-4">
        <div v-if="cart.length > 0" class="mb-4">
          <h4>Cart Summary</h4>
          <p><strong>Total Items:</strong> {{ totalItems }}</p>
          <p><strong>Total Amount:</strong> ${{ totalAmount }}</p>
        </div>

        <div v-if="cart.length > 0" class="sticky-cart">
          <ul class="list-group mb-3">
            <li 
              v-for="(item, index) in cart" 
              :key="index" 
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{{ item.name }}</strong> - ${{ item.price }} 
                <small class="text-muted">(x{{ item.quantity }})</small>
              </div>
              <div>
                <button class="btn btn-sm btn-outline-danger" @click="removeFromCart(index)">
                  Remove
                </button>
              </div>
            </li>
          </ul>

          <p class="fw-bold">Total: ${{ totalAmount }}</p>
          <div class="mb-3">
            <label for="payment-method" class="form-label fw-bold">Payment Method:</label>
            <select v-model="selectedPaymentMethod" id="payment-method" class="form-select">
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="Mobile-Banking">Mobile Banking</option>
            </select>
          </div>
          <a href="#" class="btn btn-success" @click.prevent="buyNow">Buy Now</a>
        </div>

        <p v-else class="text-muted">Your cart is empty.</p>
      </div>

      <!-- Product List -->
      <div class="col-md-8">
        <h2 class="mb-4">Our Products</h2>
        <div class="row">
          <div class="col-md-6 mb-4" v-for="(product, index) in products" :key="index">
            <div class="card">
              <img :src="product.image" class="card-img-top" :alt="product.name">
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">Price: ${{ product.price }}</p>
                <a href="#" class="btn btn-success" @click.prevent="addToCart(product)">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sell',
  data() {
    return {
      products: [
        { name: 'Protein Powders', price: 30, image: 'https://static.independent.co.uk/2024/06/21/11/Best%20protein%20powder.png' },
        { name: 'Pre-workout Supplements', price: 25, image: 'https://www.preworkout.org/wp-content/uploads/2023/11/preworkout-home-720x540.jpg' },
        { name: 'Post-workout Recovery Shakes', price: 20, image: 'https://www.exalt.co.uk/cdn/shop/files/LeanMachine_16cc5df9-381b-4873-90d7-b64df328f38d_540x.jpg?v=1695661441' },
        { name: 'Energy Bars', price: 2, image: 'https://halsanutrition.com/wp-content/uploads/2018/05/energy-bars-1-2.jpg' },
        { name: 'Hydration Bottles and Shakers', price: 15, image: 'https://static-01.daraz.com.bd/p/84e8e6af62f0895854338c21dcaa6bfa.jpg' },
        { name: 'Multivitamins for Athletes', price: 10, image: 'https://happyholistichealth.com/wp-content/uploads/2015/01/natural-supplements.jpg' },
        { name: 'Gym Belts', price: 20, image: 'https://image.made-in-china.com/2f0j00NTubUYOdbygf/Good-Selling-Gym-Belts-Men-Women-Lower-Back-Support-Powerlifting-Belt.webp' },
        { name: 'Yoga Mats', price: 15, image: 'https://cdn.thewirecutter.com/wp-content/media/2024/07/yoga-mat-2048px-1633-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp' },
        { name: 'Gloves', price: 8, image: 'https://i5.walmartimages.com/seo/BetterZ-1-Pair-Sport-Gloves-Breathable-Ultra-Light-Wear-resistant-Easy-wearing-Washable-Protect-Hand-Silicone-Men-Women-Weight-Lifting-Exercise-Outdo_ef525a06-bd3b-4e80-8586-c015a29b2d6e.20f04ef44636f4a3a66ca41e952c5786.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF' }
      ],
      cart: [],
      selectedPaymentMethod: 'Cash'
    };
  },
  computed: {
    totalAmount() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    totalItems() {
      return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    }
  },
  methods: {
    addToCart(product) {
      const existingProduct = this.cart.find(item => item.name === product.name);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    buyNow() {
      if (this.cart.length > 0) {
        this.$router.push({
          path: '/Invoice',
          query: {
            total: this.totalAmount,
            payment: this.selectedPaymentMethod // Correct the query key to match
          }
        });
        this.cart = []; // Reset cart after redirection
      }
    }
  }
};
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.sticky-cart {
  position: sticky;
  top: 20px; /* Adjust this value as needed */
}
</style>