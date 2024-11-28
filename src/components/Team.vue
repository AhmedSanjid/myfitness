<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">GymNest Community Forum</h2>

    <!-- Community Form -->
    <form class="bg-light p-5 rounded shadow">
      <!-- Name Input -->
      <div class="mb-3">
        <label for="name" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your name" required />
      </div>

      <!-- ID Input -->
      <div class="mb-3">
        <label for="id" class="form-label">Member ID</label>
        <input type="text" class="form-control" id="id" placeholder="Enter your Member ID" required />
      </div>

      <!-- Contact Number -->
      <div class="mb-3">
        <label for="contact" class="form-label">Contact Number</label>
        <input type="text" class="form-control" id="contact" placeholder="Enter your contact number" required />
      </div>

      <!-- Group Selection -->
      <div class="mb-3">
        <label for="group" class="form-label">Join a Group</label>
        <select class="form-select" id="group" required>
          <option selected disabled>Select a Group</option>
          <option value="Strength Builders">Strength Builders</option>
          <option value="Endurance Champions">Endurance Champions</option>
          <option value="Weight Loss Warriors">Weight Loss Warriors</option>
          <option value="Wellness Seekers">Wellness Seekers</option>
        </select>
      </div>

      <!-- Rules and Regulations -->
      <div class="mb-3">
        <h2>Community Rules & Regulations</h2>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="rule1" required />
          <label class="form-check-label" for="rule1">Respect all members.</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="rule2" required />
          <label class="form-check-label" for="rule2">No spam or self-promotion.</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="rule3" required />
          <label class="form-check-label" for="rule3">Maintain a positive and supportive attitude.</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="rule4" required />
          <label class="form-check-label" for="rule4">Follow your group's workout guidelines.</label>
        </div>
      </div>

      <!-- Image Upload -->
      <div class="mb-3">
        <h3>Always connect with us!</h3>
        <img src="https://cdn.revolutionise.com.au/cups/singymnastics/files/zfhuaxz4tbnpydi3.jpg" class="img-fluid rounded" />
      </div>

      <!-- Submit Button -->
      <div class="text-center">
        <button type="submit" class="btn btn-primary text-uppercase px-5">Join Community</button>
      </div>
    </form>

    <!-- Group Stats Section -->
    <div class="mt-5">
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

      <!-- Group Details Section -->
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      groups: [
        {
          name: "Strength Builders",
          members: 45,
          achievements: "100+ lbs lifted",
          rewards: "Free training session",
          mission: "Build muscle and strength.",
          focus: "Strength training and powerlifting.",
          meetingSchedule: "Mon & Thu at 6 PM",
          leader: "Coach Alex Johnson",
          upcomingEvents: ["Strength Challenge - Dec 10", "Lifting Workshop - Jan 5"],
        },
        {
          name: "Endurance Champions",
          members: 30,
          achievements: "Marathon completion",
          rewards: "Gym merchandise",
          mission: "Enhance endurance.",
          focus: "Running, cycling, and HIIT.",
          meetingSchedule: "Tue & Sat at 7 AM",
          leader: "Coach Emma Lopez",
          upcomingEvents: ["Charity Run - Dec 15", "Bootcamp - Jan 12"],
        },
        {
          name: "Weight Loss Warriors",
          members: 50,
          achievements: "500+ lbs lost collectively",
          rewards: "Nutrition guide access",
          mission: "Achieve weight loss goals.",
          focus: "Cardio and diet coaching.",
          meetingSchedule: "Wed & Fri at 5 PM",
          leader: "Coach Ryan Smith",
          upcomingEvents: ["Nutrition Workshop - Dec 8", "Weight Loss Challenge - Jan 1"],
        },
        {
          name: "Wellness Seekers",
          members: 20,
          achievements: "Yoga mastery",
          rewards: "Free wellness class",
          mission: "Promote well-being.",
          focus: "Yoga and holistic health.",
          meetingSchedule: "Sunday at 8 AM",
          leader: "Coach Sophia Lee",
          upcomingEvents: ["Mindfulness Retreat - Dec 20", "Yoga for Stress Relief - Jan 18"],
        },
      ],
      selectedGroup: null,
    };
  },
  methods: {
    showGroupDetails(group) {
      this.selectedGroup = group;
    },
  },
};
</script>
