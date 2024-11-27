<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">GymNest Nutrition & Diet Guide</h2>

    <!-- Nutrition Form -->
    <form @submit.prevent="calculateNutrition" class="bg-light p-5 rounded shadow needs-validation" novalidate>
      <!-- Gender -->
      <div class="mb-3">
        <label for="gender" class="form-label">Gender</label>
        <select v-model="gender" class="form-control" id="gender" required>
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div v-if="!gender" class="text-danger">Please select your gender.</div>
      </div>

      <!-- Height -->
      <div class="mb-3">
        <label for="height" class="form-label">Height (cm)</label>
        <input type="number" v-model="height" class="form-control" id="height" placeholder="Enter your height in cm" required>
        <div v-if="!height" class="text-danger">Please enter your height.</div>
      </div>

      <!-- Weight -->
      <div class="mb-3">
        <label for="weight" class="form-label">Weight (kg)</label>
        <input type="number" v-model="weight" class="form-control" id="weight" placeholder="Enter your weight in kg" required>
        <div v-if="!weight" class="text-danger">Please enter your weight.</div>
      </div>

      <!-- Daily Activity -->
      <div class="mb-3">
        <label for="activity" class="form-label">Daily Activity Level (hours)</label>
        <input type="number" v-model="activity" class="form-control" id="activity" placeholder="Enter your daily activity in hours" required>
        <div v-if="!activity" class="text-danger">Please enter your daily activity hours.</div>
      </div>

      <!-- Submit Button -->
      <div class="text-center">
        <button type="submit" class="btn btn-primary text-uppercase px-5" :disabled="!gender || !height || !weight || !activity">Calculate Nutrition</button>
      </div>
    </form>

    <!-- Nutrition Display -->
    <div v-if="nutrition" class="mt-5 p-4 bg-light rounded shadow-sm">
      <h4 class="text-center mb-3">Your Nutrition Guide</h4>
      <p><strong>BMR:</strong> {{ nutrition.bmr }} calories/day</p>
      <p><strong>TDEE:</strong> {{ nutrition.tdee }} calories/day</p>
      <p><strong>To Maintain Weight:</strong> {{ nutrition.maintain }} calories/day</p>
      <p><strong>To Lose Weight:</strong> {{ nutrition.lose }} calories/day</p>
      <p><strong>To Gain Weight:</strong> {{ nutrition.gain }} calories/day</p>
      <hr />
      <!-- New Nutritional Information -->
      <h5>Additional Nutritional Information:</h5>
      <ul>
        <li><strong>Calories:</strong> {{ nutrition.calories }} calories</li>
        <li><strong>Protein:</strong> {{ nutrition.protein }} g</li>
        <li><strong>Total Lipid:</strong> {{ nutrition.totalLipid }} g</li>
        <li><strong>Total Fat:</strong> {{ nutrition.totalFat }} g</li>
        <li><strong>Saturated Fat:</strong> {{ nutrition.saturatedFat }} g</li>
        <li><strong>Monounsaturated Fat:</strong> {{ nutrition.monounsaturatedFat }} g</li>
        <li><strong>Polyunsaturated Fat:</strong> {{ nutrition.polyunsaturatedFat }} g</li>
        <li><strong>Trans Fat:</strong> {{ nutrition.transFat }} g</li>
        <li><strong>Cholesterol:</strong> {{ nutrition.cholesterol }} mg</li>
        <li><strong>Carbohydrates:</strong> {{ nutrition.carbs }} g</li>
        <li><strong>Calcium:</strong> {{ nutrition.calcium }} mg</li>
        <li><strong>Iron:</strong> {{ nutrition.iron }} mg</li>
        <li><strong>Magnesium:</strong> {{ nutrition.magnesium }} mg</li>
        <li><strong>Phosphorus:</strong> {{ nutrition.phosphorus }} mg</li>
        <li><strong>Potassium:</strong> {{ nutrition.potassium }} mg</li>
        <li><strong>Sodium:</strong> {{ nutrition.sodium }} mg</li>
        <li><strong>Zinc:</strong> {{ nutrition.zinc }} mg</li>
        <li><strong>Copper:</strong> {{ nutrition.copper }} mg</li>
        <li><strong>Manganese:</strong> {{ nutrition.manganese }} mg</li>
        <li><strong>Selenium:</strong> {{ nutrition.selenium }} mcg</li>
        <li><strong>Riboflavin:</strong> {{ nutrition.riboflavin }} mg</li>
        <li><strong>Niacin:</strong> {{ nutrition.niacin }} mg</li>
        <li><strong>Vitamin B6:</strong> {{ nutrition.vitaminB6 }} mg</li>
        <li><strong>Vitamin B12:</strong> {{ nutrition.vitaminB12 }} mcg</li>
      </ul>
    </div>

    <div v-if="error" class="mt-5 p-4 bg-danger text-white rounded text-center">
      <p>{{ error }}</p>
    </div>

    <!-- Additional Message Display -->
    <div v-if="msg" class="mt-4 p-3 bg-light text-center rounded">
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Diet',
  props: {
    msg: {
      type: String,
      default: '' // Default empty string if no message is passed
    }
  },
  data() {
    return {
      gender: '',
      height: '',
      weight: '',
      activity: '',
      nutrition: null,
      error: null
    };
  },
  methods: {
    calculateNutrition() {
      this.error = null;
      this.nutrition = null;

      // Check if all fields are provided
      if (!this.gender || !this.height || !this.weight || !this.activity) {
        this.error = "Please fill out all the fields.";
        return;
      }

      // Calculate BMR (Harris-Benedict Equation)
      let bmr = 0;
      if (this.gender === 'male') {
        bmr = 88.362 + (13.397 * this.weight) + (4.799 * this.height) - (5.677 * 25); // Example age: 25
      } else if (this.gender === 'female') {
        bmr = 447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * 25); // Example age: 25
      }

      // Calculate TDEE based on activity level
      let tdee = bmr;
      if (this.activity <= 2) {
        tdee *= 1.2;  // Sedentary
      } else if (this.activity <= 4) {
        tdee *= 1.375; // Lightly Active
      } else if (this.activity <= 6) {
        tdee *= 1.55; // Moderately Active
      } else if (this.activity <= 8) {
        tdee *= 1.725; // Very Active
      } else {
        tdee *= 1.9;  // Super Active
      }

      // Placeholder nutrition data (these values should ideally be calculated or pulled from a nutrition API)
      this.nutrition = {
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        maintain: Math.round(tdee),
        lose: Math.round(tdee - 500),
        gain: Math.round(tdee + 500),
        calories: 2000,  // Example
        protein: 150,  // Example
        totalLipid: 70,  // Example
        totalFat: 80,  // Example
        saturatedFat: 20,  // Example
        monounsaturatedFat: 25,  // Example
        polyunsaturatedFat: 10,  // Example
        transFat: 5,  // Example
        cholesterol: 300,  // Example
        carbs: 250,  // Example
        calcium: 1000,  // Example
        iron: 15,  // Example
        magnesium: 400,  // Example
        phosphorus: 700,  // Example
        potassium: 3500,  // Example
        sodium: 2300,  // Example
        zinc: 11,  // Example
        copper: 0.9,  // Example
        manganese: 2,  // Example
        selenium: 55,  // Example
        riboflavin: 1.3,  // Example
        niacin: 16,  // Example
        vitaminB6: 2,  // Example
        vitaminB12: 2.4,  // Example
      };
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
