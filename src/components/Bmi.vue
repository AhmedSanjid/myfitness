<!-- src/components/BMICalculator.vue -->
<template>

                    <div class="pr-md-3 d-none d-md-block">
                      <h4 class="display-4 text-dark font-weight-bold mb-4">Whate is BMI?</h4>
                      <p class="m-0 text-dark">BMI (Body Mass Index) is a simple measurement used to assess whether a person has a healthy body weight for a given height. It is calculated by dividing a person's weight in kilograms by the square of their height in meters. The result is categorized into different weight ranges, helping to identify whether a person is underweight, normal weight, overweight, or obese.</p>
                  </div>

    <div class="bmi-calculator">
      <h2>Calculate Your BMI</h2>
      <form @submit.prevent="calculateBMI">
        <div class="form-group">
          <label for="gender">Gender:</label>
          <select class="form-control" id="gender" v-model="gender" required>
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="form-group">
          <label for="weight">Weight (kg):</label>
          <input type="number" class="form-control" id="weight" v-model.number="weight" required>
        </div>
        <div class="form-group">
          <label for="height">Height (cm):</label>
          <input type="number" class="form-control" id="height" v-model.number="height" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Calculate BMI</button>
      </form>
      <div class="result" v-if="bmi !== null">
        <p>Your BMI is <strong>{{ bmi.toFixed(2) }}</strong> ({{ category }})</p>
        <p>Ideal Weight Range: {{ idealWeightRange }}</p>
        <p>Health Tips: {{ healthTips }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gender: '',
        weight: null,
        height: null,
        bmi: null,
        category: '',
        idealWeightRange: '',
        healthTips: ''
      };
    },
    methods: {
      calculateBMI() {
        if (this.gender === '' || this.weight <= 0 || this.height <= 0) {
          alert('Please select a gender and enter valid weight and height.');
          return;
        }
  
        const heightInMeters = this.height / 100;
        this.bmi = this.weight / (heightInMeters * heightInMeters);
  
        if (this.bmi < 18.5) {
          this.category = 'Underweight';
          this.healthTips = 'You may need to gain some weight. Consult a healthcare provider for advice.';
        } else if (this.bmi < 24.9) {
          this.category = 'Normal weight';
          this.healthTips = 'You are within a healthy weight range. Keep up the good work!';
        } else if (this.bmi < 29.9) {
          this.category = 'Overweight';
          this.healthTips = 'You may need to lose some weight. Consult a healthcare provider for advice.';
        } else {
          this.category = 'Obese';
          this.healthTips = 'You may need to lose weight. Consult a healthcare provider for advice.';
        }
  
        // Calculate ideal weight range
        const idealWeightMin = 18.5 * (heightInMeters * heightInMeters);
        const idealWeightMax = 24.9 * (heightInMeters * heightInMeters);
        this.idealWeightRange = `${idealWeightMin.toFixed(2)} kg - ${idealWeightMax.toFixed(2)} kg`;
      }
    }
  };
  </script>
  
  <style scoped>
  .bmi-calculator {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .bmi-calculator h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  .bmi-calculator .form-group {
    margin-bottom: 20px;
  }
  .bmi-calculator .result {
    margin-top: 20px;
    text-align: center;
    font-size: 1.2rem;
  }
  </style>