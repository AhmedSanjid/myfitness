<template>

<div class="container-fluid my-5">
        <h1 class="text-center mb-4">GymNest Notice Board</h1>

        <!-- Marquee Section for Latest News -->
        <div class="bg-primary text-white p-3 rounded mb-4">
    <marquee behavior="scroll" direction="left">
        <strong>Latest Updates:</strong> New Trainer: Kishor pasha | Upcoming Yoga Class: Nov 5 at 6 PM | 
        Monthly Challenge: Complete 5 HIIT Sessions | New Equipment: Smith Machine Added! | Our New Member: Robin Milford. Warm Welcome! |
        Health Awareness Campaign: Stay Hydrated! | Member Spotlight: Musa Aman for losing 10 lbs! CONGRATES MUSA AMAN!!
    </marquee>
</div>
        <!-- Notice Board Cards -->
        <div class="row gy-4">
            <!-- Announcements -->
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Announcements</h5>
                        <p class="card-text">We are introducing new group classes starting next month! Stay tuned for the schedule.</p>
                    </div>
                </div>
            </div>

            <!-- New Equipment & Instruments -->
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">New Equipment & Instruments</h5>
                        <p class="card-text">Check out our new Smith Machine and upgraded dumbbell rack!</p>
                    </div>
                </div>
            </div>

            <!-- Upcoming Classes -->
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Upcoming Classes</h5>
                        <p class="card-text">Join our HIIT class on Fridays at 5 PM and Yoga on Sundays at 8 AM.</p>
                    </div>
                </div>
            </div>

            <!-- Fitness Motivation -->
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Fitness Motivation</h5>
                        <p class="card-text">"Your only limit is you. Push yourself beyond your comfort zone!"</p>
                    </div>
                </div>
            </div>

            <!-- Health Awareness Campaigns -->
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Health Awareness Campaigns</h5>
                        <p class="card-text">December Campaign: Stay hydrated! Drink at least 8 glasses of water daily.</p>
                    </div>
                </div>
            </div>

            <!-- Monthly Challenges -->
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Monthly Challenges</h5>
                        <p class="card-text">December Challenge: Complete 5 HIIT sessions by the end of the month.</p>
                    </div>
                </div>
            </div>

            <!-- Workout of the Week -->
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Workout of the Week</h5>
                        <p class="card-text">This week’s workout: Full-body circuit – 3 rounds of push-ups, squats, and planks.</p>
                    </div>
                </div>
            </div>

            <!-- Member Spotlights -->
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Member Spotlights</h5>
                        <p class="card-text">Congrats to Musa Aman for achieving his goal of losing 10 lbs!</p>
                    </div>
                </div>
            </div>

            <!-- Nutrition Tips -->
            <div class="col-md-6" >
                <div class="card h-100 ">
                    <div class="card-body">
                        <h5 class="card-title">Nutrition Tips</h5>
                        <p class="card-text">Tip: Include protein in every meal to boost muscle recovery.</p>
                    </div>
                </div>
            </div>

            <!-- Community Notices -->
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Community Notices</h5>
                        <p class="card-text">Join our Recipe Swap event this Saturday at 4 PM in the community lounge.</p>
                    </div>
                </div>
            </div>

            <!-- Member Feedback -->
            <div class="col-md-12">
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title">Member Feedback | Complain Box | Advice Us</h5>
            <p class="card-text">We value your Words! Please share your thoughts...</p>

            <!-- Your ID Input -->
            <div class="mb-3">
                <label for="memberId" class="form-label">Your ID</label>
                <input type="text" class="form-control" id="memberId" placeholder="Enter your Member ID">
            </div>

            <!-- Your Say Input -->
            <div class="mb-3">
                <label for="yourSay" class="form-label">Your Say</label>
                <textarea class="form-control" id="yourSay" rows="4" placeholder="Share your feedback, complaint, or advice"></textarea>
            </div>

            <!-- Submit Button -->
            <div class="text-end">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
</div>

        </div>
    </div>

</template>

<script>
export default {
  name: 'Notice',
  props: {
    msg: String
  }
}
</script>

<style scoped>

  .card:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Shadow effect */
    transform: translateY(-5px); /* Lifts the card slightly */
    transition: all 0.3s ease-in-out; /* Smooth transition */
  }
  
  .card-body:hover {
    background-color: rgba(0, 123, 255, 0.1); /* Light blue background on hover */
  }

</style>

