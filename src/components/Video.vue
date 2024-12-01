<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">Our Trainers</h1>

    <div class="row">
      <div class="col-md-4 mb-4" v-for="(trainer, index) in trainers" :key="index">
        <div class="card h-100 text-center">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" :src="trainer.video" allowfullscreen></iframe>
          </div>
          <div class="card-body">
            <h3 class="card-title">{{ trainer.name }}</h3>
            <p class="card-text">{{ trainer.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainerVideos',
  data() {
    return {
      trainers: [
        {
          name: 'Mujahidul',
          video: 'https://www.youtube.com/embed/o3tNt84zxqo?si=PSVFJBU5J-Ugxglx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
          description: 'Strength & Conditioning Specialists\n- Certified Strength and Conditioning Specialist (CSCS)\n- Powerlifting Coach\n- Bodybuilding Specialist\n- Olympic Weightlifting Coach'
        },
        {
          name: 'Hamim',
          video: 'https://www.youtube.com/embed/D2bq6YVFGBY?si=fpz0yypUseZPE5Zw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
          description: 'Endurance & Performance Trainers\n- Certified Running Coach\n- Triathlon Coach\n- Endurance Training Specialist\n- High-Intensity Interval Training (HIIT) Specialist'
        },
        {
          name: 'Minhaz',
          video: 'https://www.youtube.com/embed/nvCrar6IvBk?si=E6tptOuUp_A4tfdo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
          description: 'Weight Loss & Nutrition Experts\n- Certified Weight Management Specialist (CWMS)\n- Precision Nutrition Coach\n- Fitness Nutrition Specialist (FNS)\n- Health and Wellness Coach'
        },
        {
          name: 'Partho',
          video: 'https://www.youtube.com/embed/z5NdRhPIwbw?si=rRIzBjZRqS0v1Nja" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
          description: 'Holistic & Wellness Trainers\n- Certified Yoga Instructor (RYT)\n- Mindfulness and Meditation Coach\n- Pilates Instructor\n- Holistic Health Coach'
        },
        {
          name: 'Ishraq',
          video: 'https://www.youtube.com/embed/RtgKvUQ6Ukw?si=qbEjp5SLS0ToiULR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
          description: 'Rehabilitation & Injury Prevention Specialists\n- Certified Corrective Exercise Specialist (CES)\n- Post-Rehabilitation Specialist\n- Physical Therapy Assistant (PTA)\n- Functional Movement Specialist'
        },
        {
          name: 'Abir',
          video: 'https://www.youtube.com/embed/YaMgObDxd0Q?si=4Pr5Hk9Q72AWqYz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin',
          description: 'Youth & Special Population Trainers\n- Youth Fitness Specialist\n- Senior Fitness Specialist\n- Adaptive Fitness Trainer (working with disabilities)\n- Postnatal Fitness Specialist'
        }
      ]
    };
  }
};
</script>

<style scoped>
.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}
.embed-responsive::before {
  content: "";
  display: block;
  padding-top: 56.25%;
}
.embed-responsive-item {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>