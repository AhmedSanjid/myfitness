<template>
  <div class="edit-profile">
    <div class="container">
      <h1 class="page-title">Edit Profile</h1>

      <!-- Profile Form -->
      <form @submit.prevent="submitForm" class="profile-form">
        <!-- Profile Picture -->
        <div class="mb-3">
          <label for="profile-pic" class="form-label">Profile Picture</label>
          <input type="file" class="form-control" id="profile-pic" @change="handleFileChange" />
        </div>

        <!-- Full Name -->
        <div class="mb-3">
          <label for="full-name" class="form-label">Full Name</label>
          <input type="text" class="form-control" id="full-name" v-model="formData.full_name" required />
        </div>

        <!-- Email -->
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="formData.email" required />
        </div>

        <!-- Contact Number -->
        <div class="mb-3">
          <label for="contact-number" class="form-label">Contact Number</label>
          <input type="tel" class="form-control" id="contact-number" v-model="formData.phone" required />
        </div>

        <!-- Address -->
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <textarea class="form-control" id="address" v-model="formData.address" required></textarea>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProfile',
  data() {
    return {
      formData: {
        full_name: '',
        email: '',
        phone: '',
        address: '',
        profile_pic: null,
      },
    };
  },
  created() {
    this.fetchProfile();
  },
  methods: {
    async fetchProfile() {
      try {
        // Simulate an API call to fetch user profile
        const response = await fetch('/api/profile');
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        const data = await response.json();
        this.formData = {
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          profile_pic: data.profile_pic,
        };
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    },
    handleFileChange(event) {
      this.formData.profile_pic = event.target.files[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('full_name', this.formData.full_name);
      formData.append('email', this.formData.email);
      formData.append('phone', this.formData.phone);
      formData.append('address', this.formData.address);
      if (this.formData.profile_pic) {
        formData.append('profile_pic', this.formData.profile_pic);
      }

      try {
        const response = await fetch('/api/profile', {
          method: 'PUT',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to update profile');
        }

        // Handle success
        alert('Profile updated successfully!');
        this.$router.push('/MyProfile');
      } catch (error) {
        console.error('Error updating profile:', error);
        alert('Failed to update profile. Please try again.');
      }
    },
  },
};
</script>

<style scoped>
.edit-profile {
  padding: 20px;
}

.page-title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
}

.profile-form {
  max-width: 500px;
  margin: 0 auto;
}

.form-label {
  font-weight: bold;
}

.btn-primary {
  background-color: #151414;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #FB5B21;
}
</style>
