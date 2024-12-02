<template>
   <div class="container my-5">
    <h2 class="text-center mb-4">User Profile Form</h2>
    <form class="bg-light p-5 rounded shadow">
      <!-- Profile Picture Upload -->
      <div class="mb-3 text-center">
        <label for="profilePicture" class="form-label">Profile Picture</label>
        <div class="d-flex justify-content-center">
          <img id="preview" src="https://via.placeholder.com/150" alt="Profile Picture" class="rounded-circle mb-3" width="150" height="150">
        </div>
        <input type="file" class="form-control" id="profilePicture" accept="image/*" required>
      </div>

      <!-- First Name -->
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>
        <input type="text" class="form-control" id="firstName" placeholder="Enter your first name" required>
      </div>

      <!-- Last Name -->
      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="lastName" placeholder="Enter your last name" required>
      </div>

      <!-- Email Address -->
      <div class="mb-3">
        <label for="email" class="form-label">Email Address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
      </div>

      <!-- Contact Number -->
      <div class="mb-3">
        <label for="contact" class="form-label">Contact Number</label>
        <input type="tel" class="form-control" id="contact" placeholder="Enter your contact number" required>
      </div>

      <!-- Membership Type -->
      <div class="mb-3">
        <label for="membershipType" class="form-label">Membership Type</label>
        <select class="form-select" id="membershipType" required>
          <option selected disabled>Select Membership Type</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="Elite">Elite</option>
        </select>
      </div>

      <!-- Submit Button -->
      <div class="text-center">
        <button type="submit" class="btn btn-primary text-uppercase px-5">Save Profile</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Myprofile',
  props: {
    msg: String
  }
}
</script>
