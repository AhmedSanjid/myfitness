<template>
  <div class="container mt-5">
    <div class="receipt-container">
      <h1 class="text-center">INVOICE</h1>
      <div class="receipt-details">
        <p><strong>Date:</strong> {{ currentDate }}</p>
        <p><strong>Time:</strong> {{ currentTime }}</p>
        <hr />
        
        <div class="items-table">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>VAT (%)</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.quantity }}</td>
                <td>${{ item.price }}</td>
                <td>{{ (VAT_RATE * 100).toFixed(2) }}%</td>
                <td>${{ (item.quantity * item.price + calculateVAT(item.price, item.quantity)).toFixed(2) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <hr />
        <p><strong>Total Amount (Excluding VAT):</strong> ${{ total.toFixed(2) }}</p>
        <p><strong>Total VAT:</strong> ${{ totalVAT.toFixed(2) }}</p>
        <p><strong>Total Amount (Including VAT):</strong> ${{ (total + totalVAT).toFixed(2) }}</p>
        <p><strong>Payment Method:</strong> {{ payment }}</p>
        <hr />
        <p class="thank-you">Thank you for your purchase!</p>
      </div>
      
      <div class="text-center">
        <button class="btn btn-primary" @click="downloadInvoice">Download Invoice</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Invoice',
  data() {
    return {
      VAT_RATE: 0.15 // Assuming 15% VAT rate
    };
  },
  computed: {
    total() {
      const totalAmount = parseFloat(this.$route.query.total);
      return isNaN(totalAmount) ? 0 : totalAmount;
    },
    payment() {
      return this.$route.query.payment || 'Not specified';
    },
    currentDate() {
      return new Date().toLocaleDateString(); // Display the current date
    },
    currentTime() {
      return new Date().toLocaleTimeString(); // Display the current time
    },
    items() {
      return this.$route.query.items ? JSON.parse(this.$route.query.items) : [];
    },
    totalVAT() {
      return this.items.reduce((sum, item) => sum + this.calculateVAT(item.price, item.quantity), 0);
    }
  },
  methods: {
    calculateVAT(price, quantity) {
      return price * quantity * this.VAT_RATE;
    },
    downloadInvoice() {
      let itemsData = '';
      this.items.forEach(item => {
        itemsData += `${item.name} - Qty: ${item.quantity} - $${item.price.toFixed(2)} - VAT: ${this.VAT_RATE * 100}% - Total: $${(item.quantity * item.price + this.calculateVAT(item.price, item.quantity)).toFixed(2)}\n`;
      });

      const invoiceData = `
        *** INVOICE ***

        Date: ${this.currentDate} ${this.currentTime}
        
        Items:
        ${itemsData}
        
        -----------------------------
        Total Amount (Excluding VAT): $${this.total.toFixed(2)}
        Total VAT: $${this.totalVAT.toFixed(2)}
        Total Amount (Including VAT): $${(this.total + this.totalVAT).toFixed(2)}
        Payment Method: ${this.payment}
        
        ========================
        Thank you for your purchase!
      `;

      const blob = new Blob([invoiceData], { type: 'text/plain;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `Invoice_${new Date().getTime()}..txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.receipt-container {
  width: 100%;
  max-width: 600px;
  padding: 25px;
  border: 2px solid #333;
  font-family: 'Arial', sans-serif;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 10px;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #333;
}

.receipt-details {
  font-size: 18px;
  line-height: 1.8;
  text-align: left;
  font-weight: bold;
  color: #333;
}

.receipt-details hr {
  border: 1px solid #ddd;
  margin: 20px 0;
}

.items-table table {
  width: 100%;
  font-size: 16px;
  border-collapse: collapse;
}

.items-table th, .items-table td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}

.items-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.thank-you {
  margin-top: 30px;
  font-size: 16px;
  text-align: center;
  color: #555;
}

button {
  margin-top: 30px;
  font-size: 18px;
  padding: 12px 25px;
  font-weight: bold;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}

@media (max-width: 600px) {
  .receipt-container {
    padding: 15px;
  }

  h1 {
    font-size: 1.5rem;
  }

  .receipt-details {
    font-size: 16px;
  }
}
</style>