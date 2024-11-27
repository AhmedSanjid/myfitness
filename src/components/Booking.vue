<template>

<div class="container my-5">
        <h2 class="text-center mb-4">Book Your Session at GymNest</h2>
        <form action="submit_booking.php" method="POST" class="bg-light p-5 rounded shadow needs-validation" novalidate>
            <!-- Full Name -->
            <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Enter your full name" required>
                <div class="invalid-feedback">Please enter your full name.</div>
            </div>

            <!-- Email -->
            <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" required>
                <div class="invalid-feedback">Please enter a valid email address.</div>
            </div>

            <!-- Phone Number -->
            <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="phone" name="phone" placeholder="Enter your phone number" required pattern="^\d{10}$">
                <div class="invalid-feedback">Please enter a valid 10-digit phone number.</div>
            </div>

            <!-- Session Type (Online/Offline) -->
            <div class="mb-3">
                <label class="form-label">Session Type</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="online" name="session_type" value="Online" required>
                    <label class="form-check-label" for="online">Online</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="offline" name="session_type" value="Offline" required>
                    <label class="form-check-label" for="offline">Offline</label>
                </div>
                <div class="invalid-feedback">Please select a session type.</div>
            </div>

            <!-- Trainer Selection -->
            <div class="mb-3">
                <label for="trainer" class="form-label">Choose Your Trainer</label>
                <select class="form-select" id="trainer" name="trainer" required>
                    <option value="" disabled selected>Select a Trainer</option>
                    <option value="Abrar">Abrar - Strength and Conditioning</option>
                    <option value="Mujahidul">Mujahidul - Yoga and Mindfulness</option>
                    <option value="Fahad">Fahad - Nutrition and Personal Training</option>
                    <option value="Washim">Washim - Cardio and HIIT Specialist</option>
                </select>
                <div class="invalid-feedback">Please select a trainer.</div>
            </div>

            <!-- Number of Members -->
            <div class="mb-3">
                <label for="members" class="form-label">Number of Members</label>
                <input type="number" class="form-control" id="members" name="members" placeholder="Enter number of members" min="1" max="10" required>
                <div class="invalid-feedback">Please enter a valid number of members (1-10).</div>
            </div>

            <!-- Member ID(s) -->
            <div class="mb-3">
                <label for="member_ids" class="form-label">Member ID(s)</label>
                <textarea class="form-control" id="member_ids" name="member_ids" rows="3" placeholder="Enter member ID(s), separated by commas" required></textarea>
                <div class="invalid-feedback">Please provide the member ID(s).</div>
            </div>

            <!-- Preferred Date -->
            <div class="mb-3">
                <label for="date" class="form-label">Preferred Date</label>
                <input type="date" class="form-control" id="date" name="date" required>
                <div class="invalid-feedback">Please select a preferred date.</div>
            </div>

            <!-- Preferred Time -->
            <div class="mb-3">
                <label for="time" class="form-label">Preferred Time</label>
                <input type="time" class="form-control" id="time" name="time" required>
                <div class="invalid-feedback">Please select a preferred time.</div>
            </div>

            <!-- Additional Notes -->
            <div class="mb-3">
                <label for="notes" class="form-label">Additional Notes (Optional)</label>
                <textarea class="form-control" id="notes" name="notes" rows="3" placeholder="Any additional requests or comments"></textarea>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
                <button type="submit" class="btn btn-primary text-uppercase px-5">Book Now</button>
            </div>
        </form>
    </div>

</template>

<script>
export default {
  name: 'Booking',
  props: {
    msg: String
  }
}
</script>