<template>

<div class="container mt-5">
        <h1 class="text-center mb-5">About GYMNEST</h1>

        <!-- Locations Section -->
        <section id="locations" class="mb-5">
            <h2 class="section-title">Locations</h2>
            <p class="section-content">GYMNEST is proud to serve our community with multiple locations across the city. Our branches are strategically placed in areas with high foot traffic to ensure convenience for our members. Currently, we operate in the following locations:</p>
            <ul>
                <li>Downtown Branch: 123 Fitness Blvd, Suite 101, Dhaka</li>
                <li>Uptown Branch: 456 Health Ave, Suite 202, Sylhet</li>
                <li>Midtown Branch: 789 Wellness St, Suite 303, Chattogram</li>
            </ul>
            <div class="row">
                <div class="col-md-4">
                    <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.895279208457!2d90.40760531498136!3d23.75088798458865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1627648934654!5m2!1sen!2sbd" width="150%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.39470930943!2d91.78318597830205!3d24.89983744247034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1627649001504!5m2!1sen!2sbd" width="150%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118266.39470930943!2d91.78318597830205!3d22.35688744247034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1627649001504!5m2!1sen!2sbd" width="150%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>

        <!-- Area People Section -->
        <section id="area-people" class="mb-5">
            <h2 class="section-title">Area People</h2>
            <p class="section-content">At GYMNEST, we believe in fostering a community of health-conscious individuals. Our members come from diverse backgrounds, united by their passion for fitness. Whether you're a seasoned athlete or a beginner, you'll find a welcoming environment at GYMNEST. Our community is built on mutual support and encouragement, making every workout session a positive and motivating experience.</p>
        </section>

        <!-- Trainers Section -->
        <section id="trainers" class="mb-5">
            <h2 class="section-title">Trainers</h2>
            <p class="section-content">Our team of certified trainers is dedicated to helping you achieve your fitness goals. With years of experience and a passion for fitness, our trainers provide personalized guidance and support. Meet some of our top trainers:</p>
            <ul>
                <li>John Doe - Certified Personal Trainer with over 10 years of experience in strength training.</li>
                <li>Jane Smith - Group Fitness Instructor specializing in high-intensity interval training (HIIT).</li>
                <li>Mike Johnson - Strength and Conditioning Coach with a background in sports science.</li>
            </ul>
        </section>

        <!-- Equipment Section -->
        <section id="equipment" class="mb-5">
            <h2 class="section-title">Equipment</h2>
            <p class="section-content">At GYMNEST, we pride ourselves on providing state-of-the-art equipment to ensure a safe and effective workout experience. Our facilities are equipped with the latest machines, free weights, and functional training tools. We regularly update our equipment to keep up with the latest trends in fitness. Whether you're into cardio, strength training, or functional fitness, we have the tools you need to succeed.</p>
        </section>

        <!-- Shareholders Section -->
        <section id="shareholders" class="mb-5">
            <h2 class="section-title">Shareholders</h2>
            <p class="section-content">GYMNEST is backed by a group of dedicated shareholders who believe in our mission to promote health and wellness. Our shareholders bring a wealth of experience and resources, enabling us to grow and expand our services. Their commitment to our vision ensures that GYMNEST remains a leader in the fitness industry.</p>
        </section>

        <!-- Struggling Story Section -->
        <section id="struggling-story" class="mb-5">
            <h2 class="section-title">Struggling Story</h2>
            <p class="section-content">Starting GYMNEST was not without its challenges. From securing funding to finding the right location, our journey has been filled with obstacles. However, our passion for fitness and commitment to our community kept us motivated. Today, we are proud to be a leading gym center in the city. Our story is one of perseverance, dedication, and the belief that everyone deserves access to quality fitness facilities.</p>
        </section>

        <!-- COVID-19 Situations Section -->
        <section id="covid-19" class="mb-5">
            <h2 class="section-title">COVID-19 Situations</h2>
            <p class="section-content">During the COVID-19 pandemic, GYMNEST adapted to the new normal by implementing strict health and safety protocols. We introduced virtual classes, sanitized equipment regularly, and limited the number of members in the gym at any given time. Our commitment to the health and safety of our members and staff remains our top priority. We also launched a series of online fitness challenges to keep our community engaged and motivated during these challenging times.</p>
        </section>
    </div>

</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>