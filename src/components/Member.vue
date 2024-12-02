<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4">Membership Form</h2>
      <form @submit.prevent="submitMembership" class="border p-4 bg-light rounded">
        <div class="row mb-3">
          <div class="col">
            <label for="f_name" class="form-label">First Name</label>
            <input v-model="formData.f_name" type="text" class="form-control" id="f_name" required />
          </div>
          <div class="col">
            <label for="l_name" class="form-label">Last Name</label>
            <input v-model="formData.l_name" type="text" class="form-control" id="l_name" required />
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input v-model="formData.email" type="email" class="form-control" id="email" required />
        </div>
        <div class="mb-3">
          <label for="contact_no" class="form-label">Contact Number</label>
          <input v-model="formData.contact_no" type="tel" class="form-control" id="contact_no" required />
        </div>
        <div class="mb-3">
          <label for="membership_type" class="form-label">Membership Type</label>
          <select v-model="formData.membership_type" class="form-select" id="membership_type" required>
            <option value="">Select Membership Type</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="payment_type" class="form-label">Payment Method</label>
          <select v-model="formData.payment_type" class="form-select" id="payment_type" required>
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  
  import DataService from "../services/DataService";  // Make sure this is the correct path
  
  export default {
    name: "Member",
    data() {
      return {
        formData: {
          f_name: "",
          l_name: "",
          email: "",
          contact_no: "",
          membership_type: "",
          payment_type: "",
        },
      };
    },
    methods: {
       async submitMembership() {

        const data = {
          f_name: this.formData.f_name,
          l_name: this.formData.l_name,
          email: this.formData.email,
          contact_no: this.formData.contact_no,
          membership_type: this.formData.membership_type,
          payment_type: this.formData.payment_type,
        };

        try {
          await DataService.membership(data);
          alert("Membership created successfully!");
          this.resetForm();
        } catch (error) {
          console.error("Error creating membership:", error);
          alert("Error creating membership: " + error.message);
        }
      },
      
      resetForm() {
        this.formData = {
          f_name: "",
          l_name: "",
          email: "",
          contact_no: "",
          membership_type: "",
          payment_type: "",
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 500px;
  }
  </style>
  