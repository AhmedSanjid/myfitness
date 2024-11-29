<template>

    <!-- Class Timetable Start -->
    <div class="container-fluid p-5">
    <div class="mb-5 text-center">
      <h5 class="text-primary text-uppercase">Class Schedule</h5>
      <h1 class="display-3 text-uppercase mb-0">Working Hours</h1>
    </div>
    <div class="tab-class text-center">
      <ul class="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5" style="cursor:pointer">
        <li class="nav-item" v-for="(day, index) in days" :key="index">
          <a class="nav-link rounded-pill text-white" :class="{ active: activeTab === index }" @click="changeTab(index)">{{ day }}</a>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane fade show" :class="{ active: activeTab === index }" v-for="(day, index) in days" :key="index">
          <div class="row g-5">
            <div class="col-lg-3 col-md-4 col-sm-6" v-for="(classItem, classIndex) in schedules[day]" :key="classIndex">
              <div class="bg-dark rounded text-center py-5 px-3">
                <h6 class="text-uppercase text-light mb-3">{{ classItem.time }}</h6>
                <h5 class="text-uppercase text-primary">{{ classItem.name }}</h5>
                <p class="text-uppercase text-secondary mb-0">{{ classItem.instructor }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
          
  <!-- Class Timetable Start -->

</template>

<script>
export default {
  name: 'Class',
  data() {
    return {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      activeTab: 0,
      schedules: {
        Monday: [
          { time: '6.00am - 8.00am', name: 'Power Lifting', instructor: 'Kawser' },
          { time: '8.00am - 10.00am', name: 'Strength Training Fundamentals', instructor: 'Ashiq' },
          { time: '10.00am - 12.00pm', name: 'Cardio Program', instructor: 'Konak' },
          { time: '12.00pm - 2.00pm', name: 'Mobility & Flexibility Workshop', instructor: 'Pranto' },
          { time: '2.00pm - 4.00pm', name: 'Olympic Lifting Program', instructor: 'Kashif' },
          { time: '4.00pm - 6.00pm', name: 'Stretch & Release', instructor: 'Mahtab' },
          { time: '6.00pm - 8.00pm', name: 'Calisthenics Mastery', instructor: 'Abdhullah' },
          { time: '8.00pm - 10.00pm', name: 'Yoga Class', instructor: 'Badol' }
        ],
        Tuesday: [
          { time: '6.00am - 8.00am', name: 'Power Endurance Program', instructor: 'Khorshed' },
          { time: '8.00am - 10.00am', name: 'Body Building', instructor: 'Sulaiman' },
          { time: '10.00am - 12.00pm', name: 'Barbell Training Camp', instructor: 'Mohsin' },
          { time: '12.00pm - 2.00pm', name: 'Strongman Training', instructor: 'Alvee' },
          { time: '2.00pm - 4.00pm', name: 'Kettlebell Strength Series', instructor: 'Rana' },
          { time: '4.00pm - 6.00pm', name: 'Crossfit Class', instructor: 'Siyam' },
          { time: '6.00pm - 8.00pm', name: 'Muscle Building', instructor: 'Shagor' },
          { time: '8.00pm - 10.00pm', name: 'Yoga Class', instructor: 'Shaju' }
        ],
        Wednesday: [
          { time: '6.00am - 8.00am', name: 'Athletic Conditioning Class', instructor: 'Shopno' },
          { time: '8.00am - 10.00am', name: 'Body Building', instructor: 'Faruk' },
          { time: '10.00am - 12.00pm', name: 'HIIT Bootcamp', instructor: 'Shobuj' },
          { time: '12.00pm - 2.00pm', name: 'Weight Loss', instructor: 'Yusuf' },
          { time: '2.00pm - 4.00pm', name: 'Fitness Program', instructor: 'Akbor' },
          { time: '4.00pm - 6.00pm', name: 'Crossfit Class', instructor: 'Shuvo' },
          { time: '6.00pm - 8.00pm', name: 'Functional Fitness Circuit', instructor: 'Jibon' },
          { time: '8.00pm - 10.00pm', name: 'Yoga Class', instructor: 'Tarek' }
        ],
        Thursday: [
          { time: '6.00am - 8.00am', name: 'Power Lifting', instructor: 'Rafsan' },
          { time: '8.00am - 10.00am', name: 'Battle Rope Challenge', instructor: 'Jamil' },
          { time: '10.00am - 12.00pm', name: 'Cardio Program', instructor: 'Kader' },
          { time: '12.00pm - 2.00pm', name: 'Weight Loss', instructor: 'Humayun' },
          { time: '2.00pm - 4.00pm', name: 'Plyometrics Power Hour', instructor: 'Mahim' },
          { time: '4.00pm - 6.00pm', name: 'Agility & Speed Training', instructor: 'Mahian' },
          { time: '6.00pm - 8.00pm', name: 'Muscle Building', instructor: 'Amzad' },
          { time: '8.00pm - 10.00pm', name: 'Yoga Class', instructor: 'Tajbir' }
        ],
        Friday: [
          { time: '6.00am - 8.00am', name: 'Tai Chi for Beginners', instructor: 'Tanzil' },
          { time: '8.00am - 10.00am', name: 'Body Building', instructor: 'Riyaz' },
          { time: '10.00am - 12.00pm', name: 'Pilates Core Essentials', instructor: 'Rifat' },
          { time: '12.00pm - 2.00pm', name: 'Weight Loss', instructor: 'Tayeb' },
          { time: '2.00pm - 4.00pm', name: 'Fitness Program', instructor: 'Ismail' },
          { time: '4.00pm - 6.00pm', name: 'Mindful Meditation Flow', instructor: 'Juhan' },
          { time: '6.00pm - 8.00pm', name: 'TRX Suspension Training', instructor: 'Muttaki' },
          { time: '8.00pm - 10.00pm', name: 'Restorative Yoga', instructor: 'Mugdho' }
        ],
        Saturday: [
          { time: '6.00am - 8.00am', name: 'Barre Fitness Class', instructor: 'Babli' },
          { time: '8.00am - 10.00am', name: 'Breathwork & Balance', instructor: 'Ripon' },
          { time: '10.00am - 12.00pm', name: 'Cardio Program', instructor: 'Rubel' },
          { time: '12.00pm - 2.00pm', name: 'Teen Athlete Development', instructor: 'Ashiq' },
          { time: '2.00pm - 4.00pm', name: 'Postnatal Recovery Program', instructor: 'Pranto' },
          { time: '4.00pm - 6.00pm', name: 'Crossfit Class', instructor: 'Eshrak' },
          { time: '6.00pm - 8.00pm', name: 'Muscle Building', instructor: 'Ovi' },
          { time: '8.00pm - 10.00pm', name: 'Adaptive Fitness Program', instructor: 'Osama' }
        ],
        Sunday: [
          { time: '6.00am - 8.00am', name: 'Fat Burning Blitz', instructor: 'Habib' },
          { time: '8.00am - 10.00am', name: 'Metabolic Reset Program', instructor: 'Konak' },
          { time: '10.00am - 12.00pm', name: 'Detox & Shred Plan', instructor: 'Saikat' },
          { time: '12.00pm - 2.00pm', name: 'Weight Loss', instructor: 'Galib' },
          { time: '2.00pm - 4.00pm', name: 'Fitness Program', instructor: 'Rhythm' },
          { time: '4.00pm - 6.00pm', name: 'Step Aerobics Blast', instructor: 'Samir' },
          { time: '6.00pm - 8.00pm', name: 'Zumba Dance Party', instructor: 'Mahmud' },
          { time: '8.00pm - 10.00pm', name: 'Boxing Conditioning Class', instructor: 'Kawser' }
        ]
      }
    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    }
  }
};
</script>

<style scoped>
.nav-pills .nav-link.active {
  background-color: #007bff;
}
.tab-content {
  transition: transform 0.3s ease-in-out;
}
.tab-pane {
  display: none;
}
.tab-pane.active {
  display: block;
}

</style>