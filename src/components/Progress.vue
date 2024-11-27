<template>
    <div class="container my-5">
      <h2 class="text-center mb-4">GymNest Progress Tracker</h2>
      
      <!-- Progress Tracker Form -->
      <form @submit.prevent="fetchProgress" class="bg-light p-5 rounded shadow needs-validation" novalidate>
        <!-- User Name -->
        <div class="mb-3">
          <label for="userName" class="form-label">Full Name</label>
          <input type="text" v-model="name" class="form-control" id="userName" placeholder="Enter your name" required>
          <div v-if="!name" class="text-danger">Please enter your name.</div>
        </div>
  
        <!-- Member ID -->
        <div class="mb-3">
          <label for="userId" class="form-label">Member ID</label>
          <input type="text" v-model="userId" class="form-control" id="userId" placeholder="Enter your member ID" required>
          <div v-if="!userId" class="text-danger">Please enter your member ID.</div>
        </div>
  
        <!-- Submit Button -->
        <div class="text-center">
          <button type="submit" class="btn btn-primary text-uppercase px-5" :disabled="!name || !userId">Track Progress</button>
        </div>
      </form>
  
      <!-- Progress Display -->
      <div v-if="progress" class="mt-5">
        <h4 class="text-center mb-3">Progress Overview</h4>
  
        <!-- Three Columns Layout -->
        <div class="row">
          <!-- Starting Progress Column -->
          <div class="col-md-4">
            <div class="bg-light p-4 rounded shadow-sm">
              <h5 class="text-center">Starting Progress (When Joined)</h5>
              <p><strong>Weight:</strong> {{ progress.starting.weight }}</p>
              <p><strong>Strength:</strong> {{ progress.starting.strength }}</p>
              <p><strong>Endurance:</strong> {{ progress.starting.endurance }}</p>
            </div>
          </div>
  
          <!-- Current Progress Column -->
          <div class="col-md-4">
            <div class="bg-light p-4 rounded shadow-sm">
              <h5 class="text-center">Current Progress</h5>
              <p><strong>Weight:</strong> {{ progress.current.weight }}</p>
              <p><strong>Strength:</strong> {{ progress.current.strength }}</p>
              <p><strong>Endurance:</strong> {{ progress.current.endurance }}</p>
            </div>
          </div>
  
          <!-- Final Progress Column -->
          <div class="col-md-4">
            <div class="bg-light p-4 rounded shadow-sm">
              <h5 class="text-center">Goal</h5>
              <p><strong>Weight:</strong> {{ progress.final.weight }}</p>
              <p><strong>Strength:</strong> {{ progress.final.strength }}</p>
              <p><strong>Endurance:</strong> {{ progress.final.endurance }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <div v-if="error" class="mt-5 p-4 bg-danger text-white rounded text-center">
        <p>{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  // Import Vue
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        name: '',
        userId: '',
        progress: null,
        error: null
      };
    },
    methods: {
      fetchProgress() {
        this.error = null;
        this.progress = null;
  
        // Simulated data (replace with an API call)
        const dummyData = {
          "123": {
            starting: { weight: "85 kg", strength: "Bench Press 60 kg", endurance: "2 km run in 15 min" },
            current: { weight: "80 kg", strength: "Bench Press 100 kg", endurance: "5 km run in 25 min" },
            final: { weight: "75 kg", strength: "Bench Press 120 kg", endurance: "5 km run in 20 min" }
          },
          "456": {
            starting: { weight: "75 kg", strength: "Deadlift 80 kg", endurance: "1.5 km run in 12 min" },
            current: { weight: "70 kg", strength: "Deadlift 120 kg", endurance: "5 km run in 28 min" },
            final: { weight: "68 kg", strength: "Deadlift 140 kg", endurance: "5 km run in 25 min" }
          }
        };
  
        if (dummyData[this.userId]) {
          this.progress = dummyData[this.userId];
        } else {
          this.error = `No progress found for ID: ${this.userId}`;
        }
      }
    }
  });
  </script>
  
  <style scoped>
  /* Custom Styles */
  .bg-light {
    background-color: #f8f9fa !important;
  }
  .shadow-sm {
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.075) !important;
  }
  </style>
  