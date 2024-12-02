<template>
    <!-- Header Start -->
    <div class="container-fluid bg-dark px-0">
        <div class="row gx-0">
            <div class="col-lg-3 bg-dark d-none d-lg-block">
                <a href="http://127.0.0.1:8081" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                    <h1 class="m-0 display-4 text-uppercase nav-item nav-link" id="gym">GymNest</h1>
                </a>
            </div>
            <div class="col-lg-9">
                <div class="row gx-0 bg-secondary d-none d-lg-flex">
                    <div class="col-lg-7 px-5 text-start">
                        <div class="h-100 d-inline-flex align-items- py-2 me-4">
                            <i class="fa fa-envelope text-primary me-2"></i>
                            <h6 class="mb-0">idbb@isdb-bisew.org</h6>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center py-2">
                            <i class="fa fa-phone-alt text-primary me-2"></i>
                            <h6 class="mb-0">: +88 09638 917 000</h6>
                        </div>
                    </div>
                    <div class="col-lg-5 px-5 text-end">
                        <div class="d-inline-flex align-items-center py-2">
                            <a class="btn btn-light btn-square rounded-circle me-2 text-primary " href="">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="btn btn-light btn-square rounded-circle me-2 text-primary" href="">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a class="btn btn-light btn-square rounded-circle me-2 text-primary" href="">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a class="btn btn-light btn-square rounded-circle me-2 text-primary" href="">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="btn btn-light btn-square rounded-circle text-primary" href="">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                    <a href="index.html" class="navbar-brand d-block d-lg-none">
                        <h1 class="m-0 display-4 text-primary text-uppercase">GymNest</h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <a href="/" class="nav-item nav-link active">Home</a>
                            <a href="/About" class="nav-item nav-link">About</a>
                            <a href="/Class" class="nav-item nav-link">Classes</a>
                            <a href="/Video" class="nav-item nav-link">Videos</a>
                            <a href="/Notice" class="nav-item nav-link">Notices</a>
                        </div>
                        <div class="navbar-nav ml-auto">
                            <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">

                                <!-- Display the user's full name if logged in, otherwise show 'User Account' -->
                                {{ uid ? userName.name : 'Join Now' }}
                            </a>
                            <div class="dropdown-menu">
                                <!-- Show Login/Signup if user is not logged in -->
                                <a v-if="!uid" href="/Login" class="dropdown-item">Login</a>
                                <a v-if="!uid" href="/Member" class="dropdown-item">Become a Member</a>

                                <!-- Show Logout and user-specific links if user is logged in -->
                                <button v-if="uid" class="dropdown-item" @click="logout">Logout</button>
                                <a v-if="uid" href="/Myprofile" class="dropdown-item">My Profile</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <!-- Header End -->

</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      uid: sessionStorage.getItem('uid'),
      userName: JSON.parse(sessionStorage.getItem('userName')),
      cart: JSON.parse(localStorage.getItem('cart')) || [], // Load cart from localStorage
      wishlist: JSON.parse(localStorage.getItem('wishlist')) || [] // Load wishlist from localStorage
    };
  },
  methods: {
    logout() {
      this.uid = "";  // Clear uid
      this.userName = null;  // Clear userName
      sessionStorage.removeItem('uid'); // Clear sessionStorage
      sessionStorage.removeItem('userName'); // Clear sessionStorage
      this.$router.push('/'); // Redirect to home or login page
    },
  },
};
</script>

<style scoped>
#gym:hover {
  color: white;
}
</style>

