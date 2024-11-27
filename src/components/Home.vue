<template>
    <!-- About Start -->
    <div class="container-fluid p-5">
        <div class="row gx-5">
            <div class="col-lg-5 mb-5 mb-lg-0" style="min-height: 500px;">
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-100 rounded" src="/assets/img/about.jpg" style="object-fit: cover;">
                </div>
            </div>
            <div class="col-lg-7">
                <div class="mb-4">
                    <h5 class="text-primary text-uppercase">About Us</h5>
                    <h1 class="display-3 text-uppercase mb-0">Welcome to GymNest</h1>
                </div>
                <h4 class="text-body mb-4">At GymNest, we inspire healthier lives through expert guidance and a community-driven approach.</h4>
                <p class="mb-4">Welcome to GymNest, where fitness meets empowerment! We are dedicated to transforming lives by providing expert guidance, personalized support, and fostering a vibrant community that inspires healthier, happier living. Join us on the journey to unlock your full potential and achieve your fitness goals!</p>
                <div class="rounded bg-dark p-5">
                    <ul class="nav nav-pills justify-content-between mb-3">
                        <li class="nav-item w-50">
                            <a class="nav-link text-uppercase text-center w-100 active" data-bs-toggle="pill" href="#pills-1">About Us</a>
                        </li>
                        <li class="nav-item w-50">
                                <a class="nav-link text-uppercase text-center w-100" data-bs-toggle="pill" href="#pills-2">Why Choose Us</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="pills-1">
                            <p class="text-secondary mb-0">We don't just focus on physical fitness; we aim to inspire holistic well-being. Whether you're here to build strength, improve endurance, or simply stay active, we’re committed to walking every step of the journey with you. Let’s work together to achieve your dreams and create a happier, healthier version of yourself.</p>
                        </div>
                        <div class="tab-pane fade" id="pills-2">
                            <p class="text-secondary mb-0">1. Expert Trainers Dedicated to Your Success. 2. Personalized Fitness Programs. 3. State-of-the-Art Equipment and Facilities. 4. A Supportive and Motivating Community. 5. Flexible Membership Plans. 6. Innovative and Engaging Classes. 7. A Holistic Approach to Health and Fitness. 8. Track Your Progress. 9. Convenient Location and Hours. 10. Real Results with Real Support. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->

    <!-- Programe Start -->
    <div class="container-fluid programe position-relative px-5 mt-5" style="margin-bottom: 135px;">
        <div class="row g-5 gb-5" style="cursor:pointer" > 
            <div class="col-lg-4 col-md-6">
    <a href="/Booking" class="text-decoration-none">
        <div class="bg-light rounded text-center p-5">
            <i class="flaticon-six-pack display-1 text-primary"></i>
            <h3 class="text-uppercase my-4 text-dark">Booking Schedule</h3>
            <p class="text-dark">
                Proper nutrition is essential for maximizing muscle growth and recovery. To build muscle effectively.
            </p>
            <span class="text-uppercase text-primary">Read More <i class="bi bi-arrow-right"></i></span>
        </div>
    </a>
</div>

            <div class="col-lg-4 col-md-6">
                <a href="/Progress" class="text-decoration-none">
                    <div class="bg-light rounded text-center p-5">
                        <i class="flaticon-barbell display-1 text-primary"></i>
                        <h3 class="text-uppercase my-4 text-dark">Progress Tracker</h3>
                        <p class="text-dark">
                            Weightlifting is a powerful form of strength training that involves lifting heavy weights to build muscle mass, improve strength, and enhance overall fitness.
                        </p>
            <span class="text-uppercase text-primary">Read More <i class="bi bi-arrow-right"></i></span>
        </div>
    </a>
</div>

<div class="col-lg-4 col-md-6">
    <a href="/Diet" class="text-decoration-none">
        <div class="bg-light rounded text-center p-5">
            <i class="flaticon-bodybuilding display-1 text-primary"></i>
            <h3 class="text-uppercase my-4 text-dark">Nutretion & Diet Guidance</h3>
            <p class="text-dark">
                Muscle building involves engaging in strength training exercises that stimulate muscle growth through resistance and progressive overload.
            </p>
            <span class="text-uppercase text-primary">Read More <i class="bi bi-arrow-right"></i></span>
        </div>
    </a>
</div>

            <div class="col-lg-12 col-md-6 text-center">
                <h1 class="text-uppercase text-light mb-4">30% Discount For This Summer</h1>
                <a href="/Member" class="btn btn-primary py-3 px-5">Become A Member</a>
            </div>
        </div>
    </div>
    <!-- Programe Start -->


  <!-- BMI Calculation Start -->
  <div class="container-fluid position-relative bmi my-5">
      <div class="container">
          <div class="row px-3 align-items-center">
              <div class="col-md-6">
                  <div class="pr-md-3 d-none d-md-block">
                      <h4 class="text-primary">Body Mass Index </h4>
                      <h4 class="display-4 text-dark font-weight-bold mb-4">Whate is BMI?</h4>
                      <p class="m-0 text-dark">BMI (Body Mass Index) is a simple measurement used to assess whether a person has a healthy body weight for a given height. It is calculated by dividing a person's weight in kilograms by the square of their height in meters. The result is categorized into different weight ranges, helping to identify whether a person is underweight, normal weight, overweight, or obese.</p>
                  </div>
              </div>
              <div class="col-md-6 bg-secondary py-5">
                  <div class="py-5 px-3">
                      <h1 class="mb-4 text-white">Calculate your BMI</h1>
                      <form>
                          <div class="form-row">
                              <div class="col form-group">
                                  <input type="text" class="form-control form-control-lg bg-dark text-white" placeholder="Weight (KG)">
                              </div>
                              <div class="col form-group">
                                  <input type="text" class="form-control form-control-lg bg-dark text-white" placeholder="Height (CM)">
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="col form-group">
                                  <input type="text" class="form-control form-control-lg bg-dark text-white" placeholder="Age">
                              </div>
                              <div class="col form-group">
                                  <select class="custom-select custom-select-lg bg-dark text-muted">
                                      <option>Gender</option>
                                      <option>Male</option>
                                      <option>Female</option>
                                  </select>
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="col">
                                  <input type="button" class="btn btn-lg btn-block btn-dark border-light"
                                      value="Calculate Now">
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- BMI Calculation End -->
    
    <!-- Facts Start -->
    <div class="container-fluid bg-dark facts p-5 my-5">
        <div class="row gx-5 gy-4 py-5">
            <div class="col-lg-3 col-md-6">
                <div class="d-flex">
                    <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                        <i class="fa fa-star fs-4 text-white"></i>
                    </div>
                    <div class="ps-4">
                        <h5 class="text-secondary text-uppercase">Experience</h5>
                        <h1 class="display-5 text-white mb-0" data-toggle="counter-up">2548</h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="d-flex">
                    <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                        <i class="fa fa-users fs-4 text-white"></i>
                    </div>
                    <div class="ps-4">
                        <h5 class="text-secondary text-uppercase">Our Trainers</h5>
                        <h1 class="display-5 text-white mb-0" data-toggle="counter-up">31</h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="d-flex">
                    <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                        <i class="fa fa-check fs-4 text-white"></i>
                    </div>
                    <div class="ps-4">
                        <h5 class="text-secondary text-uppercase">Complete Project</h5>
                        <h1 class="display-5 text-white mb-0" data-toggle="counter-up">10,258</h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="d-flex">
                    <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                        <i class="fa fa-mug-hot fs-4 text-white"></i>
                    </div>
                    <div class="ps-4">
                        <h5 class="text-secondary text-uppercase">Happy Clients</h5>
                        <h1 class="display-5 text-white mb-0" data-toggle="counter-up">11,45,98</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Facts End -->

    <!-- Team Start -->
    <div class="container-fluid p-5">
        <div class="mb-5 text-center">
            <h5 class="text-primary text-uppercase">The Team</h5>
            <h1 class="display-3 text-uppercase mb-0">Expert Trainers</h1>
        </div>
        <div class="row g-5">
            <div class="col-lg-4 col-md-6">
                <div class="team-item position-relative">
                    <div class="position-relative overflow-hidden rounded">
                        <img class="img-fluid w-100" src="/assets/img/team-1.jpg" alt="">
                        <div class="team-overlay">
                            <div class="d-flex align-items-center justify-content-start">
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style="background: rgba(34, 36, 41, .9);">
                        <h5 class="text-uppercase text-light">Abrar</h5>
                        <p class="text-uppercase text-secondary m-0">Trainer</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="team-item position-relative">
                    <div class="position-relative overflow-hidden rounded">
                        <img class="img-fluid w-100" src="/assets/img/team-2.jpg" alt="">
                        <div class="team-overlay">
                            <div class="d-flex align-items-center justify-content-start">
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style="background: rgba(34, 36, 41, .9);">
                        <h5 class="text-uppercase text-light">Mujahidul</h5>
                        <p class="text-uppercase text-secondary m-0">Trainer</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="team-item position-relative">
                    <div class="position-relative overflow-hidden rounded">
                        <img class="img-fluid w-100" src="/assets/img/team-3.jpg" alt="">
                        <div class="team-overlay">
                            <div class="d-flex align-items-center justify-content-start">
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style="background: rgba(34, 36, 41, .9);">
                        <h5 class="text-uppercase text-light">Washim</h5>
                        <p class="text-uppercase text-secondary m-0"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Team End -->
    
    <!-- Testimonial Start -->
    <div class="container-fluid p-0 my-5">
        <div class="row g-0">
            <div class="col-lg-6" style="min-height: 500px;">
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-100" src="/assets/img/testimonial.jpg" style="object-fit: cover;">
                </div>
            </div>
            <div class="col-lg-6 bg-dark p-5">
                <div class="mb-5">
                    <h5 class="text-primary text-uppercase">Testimonial</h5>
                    <h1 class="display-3 text-uppercase text-light mb-0">Our Client Say</h1>
                    <p>"Amazing experience at GymNest!"
                    "I’ve been working out at GymNest for the past six months, and the transformation I’ve seen in both my body and confidence is incredible! The trainers are knowledgeable and truly care about your progress, tailoring workouts to fit my goals. The community here is so supportive, making each session more enjoyable. I’ve never felt more motivated, and I’m seeing results faster than I ever imagined. Highly recommend GymNest to anyone serious about taking their fitness journey to the next level!"</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Testimonial End -->


    <!-- Blog Start -->
    <div class="container-fluid p-5">
        <div class="mb-5 text-center">
            <h5 class="text-primary text-uppercase">Our Blog</h5>
            <h1 class="display-3 text-uppercase mb-0">Latest Blog Post</h1>
        </div>
        <div class="row g-5">
            <div class="col-lg-4">
                <div class="blog-item">
                    <div class="position-relative overflow-hidden rounded-top">
                        <img class="img-fluid" src="/assets/img/blog-1.jpg" alt="">
                    </div>
                    <div class="bg-dark d-flex align-items-center rounded-bottom p-4">
                        <div class="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                            <span>01</span>
                            <h6 class="text-light text-uppercase mb-0">January</h6>
                            <span>2025</span>
                        </div>
                        <a class="h5 text-uppercase text-light" href="">Discover expert tips and strategies to achieve your fitness goals and unlock your full potential!</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="blog-item">
                    <div class="position-relative overflow-hidden rounded-top">
                        <img class="img-fluid" src="/assets/img/blog-2.jpg" alt="">
                    </div>
                    <div class="bg-dark d-flex align-items-center rounded-bottom p-4">
                        <div class="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                            <span>01</span>
                            <h6 class="text-light text-uppercase mb-0">July</h6>
                            <span>2025</span>
                        </div>
                        <a class="h5 text-uppercase text-light" href="">Learn the best workout techniques and nutrition tips to elevate your fitness journey and see real results!</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="blog-item">
                    <div class="position-relative overflow-hidden rounded-top">
                        <img class="img-fluid" src="/assets/img/blog-3.jpg" alt="">
                    </div>
                    <div class="bg-dark d-flex align-items-center rounded-bottom p-4">
                        <div class="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                            <span>01</span>
                            <h6 class="text-light text-uppercase mb-0">Decmber</h6>
                            <span>2025</span>
                        </div>
                        <a class="h5 text-uppercase text-light" href="">Get inspired with expert advice and actionable tips to push your limits and achieve lasting results!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Blog End -->


</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>