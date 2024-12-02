<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">GymNest Community Forum</h2>

    <!-- Community Form -->
    <form @submit.prevent="submitForm" class="bg-light p-5 rounded shadow">
      <!-- Existing Form Inputs -->
      <div class="mb-3">
        <label for="name" class="form-label">Full Name</label>
        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Enter your name" required />
      </div>

      <div class="mb-3">
        <label for="id" class="form-label">Member ID</label>
        <input v-model="formData.member_id" type="text" class="form-control" id="id" placeholder="Enter your Member ID" required />
      </div>

      <div class="mb-3">
        <label for="contact" class="form-label">Contact Number</label>
        <input v-model="formData.contact_no" type="text" class="form-control" id="contact" placeholder="Enter your contact number" required />
      </div>

      <div class="mb-3">
    <label for="group" class="form-label">Join a Group</label>
    <select v-model="formData.group" class="form-select" id="group" required>
        <option value="" selected>Select a Group</option>
        <option v-for="group in groups" :key="group.name" :value="group.name">{{ group.name }}</option>
    </select>
</div>

      <div class="text-center">
        <button type="submit" class="btn btn-primary text-uppercase px-5">Join Community</button>
      </div>
    </form>

    <!-- Group Overview Section -->
    <div class="mt-5">
      <h3 class="text-center mb-4">Explore Our Groups</h3>
      <div class="row">
        <div v-for="group in groups" :key="group.name" class="col-md-6 col-lg-3 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ group.name }}</h5>
              <p><strong>Members:</strong> {{ group.members }}</p>
              <p><strong>Achievements:</strong> {{ group.achievements }}</p>
              <button @click="showGroupDetails(group)" class="btn btn-primary btn-sm w-100">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Selected Group Details -->
    <div v-if="selectedGroup" class="mt-5 p-4 bg-light rounded shadow">
      <h4 class="text-center fw-bold">{{ selectedGroup.name }} Group Details</h4>
      <p><strong>Members:</strong> {{ selectedGroup.members }}</p>
      <p><strong>Achievements:</strong> {{ selectedGroup.achievements }}</p>
      <p><strong>Rewards:</strong> {{ selectedGroup.rewards }}</p>
      <p><strong>Mission:</strong> {{ selectedGroup.mission }}</p>
      <p><strong>Focus:</strong> {{ selectedGroup.focus }}</p>
      <p><strong>Meeting Schedule:</strong> {{ selectedGroup.meetingSchedule }}</p>
      <p><strong>Leader:</strong> {{ selectedGroup.leader }}</p>
      <p><strong>Upcoming Events:</strong></p>
      <ul>
        <li v-for="event in selectedGroup.upcomingEvents" :key="event">{{ event }}</li>
      </ul>
    </div>
  </div>
</template>


<script>
import DataService from "../services/DataService"; // Ensure correct import for your HTTP service

export default {
  name: 'Team',
  data() {
    return {
      formData: {
        name: "",
        member_id: "",
        contact_no: "",
        group: "",
      },
      groups: [
        {
          name: "Gryffindor",
          members: 45,
          achievements: "100+ lbs lifted",
          rewards: "Free training session",
          mission: "Build muscle and strength.",
          focus: "Strength training and powerlifting.",
          meetingSchedule: "Mon & Thu at 6 PM",
          leader: "Coach Abrar",
          upcomingEvents: ["Strength Challenge - Dec 10", "Lifting Workshop - Jan 5"],
        },
        {
          name: "Hufflepuff",
          members: 30,
          achievements: "Marathon completion",
          rewards: "Gym merchandise",
          mission: "Enhance endurance.",
          focus: "Running, cycling, and HIIT.",
          meetingSchedule: "Tue & Sat at 7 AM",
          leader: "Coach Muzahidul",
          upcomingEvents: ["Charity Run - Dec 15", "Bootcamp - Jan 12"],
        },
        {
          name: "Ravenclaw",
          members: 50,
          achievements: "500+ lbs lost collectively",
          rewards: "Nutrition guide access",
          mission: "Achieve weight loss goals.",
          focus: "Cardio and diet coaching.",
          meetingSchedule: "Wed & Fri at 5 PM",
          leader: "Coach Fahad",
          upcomingEvents: ["Nutrition Workshop - Dec 8", "Weight Loss Challenge - Jan 1"],
        },
        {
          name: "Slytherin",
          members: 20,
          achievements: "Yoga mastery",
          rewards: "Free wellness class",
          mission: "Promote well-being.",
          focus: "Yoga and holistic health.",
          meetingSchedule: "Sunday at 8 AM",
          leader: "Coach Mugdho",
          upcomingEvents: ["Mindfulness Retreat - Dec 20", "Yoga for Stress Relief - Jan 18"],
        },
      ],
      selectedGroup: null,
    };
  },
  methods: {
    async submitForm() {
      const data = { ...this.formData };
      try {
        await DataService.community(data);
        alert("Community created successfully!");
        this.resetForm();
      } catch (error) {
        console.error("Error creating community:", error);
        alert("Error: " + error.message);
      }
    },
    showGroupDetails(group) {
      this.selectedGroup = group;
    },
    resetForm() {
      this.formData = {
        name: "",
        member_id: "",
        contact_no: "",
        group: "",
      };
      this.selectedGroup = null;
    },
  },
};
</script>
