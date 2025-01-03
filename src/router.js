import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/About",
    alias: "/About",
    name: "About",
    component: () => import("./components/About")
  },
  {
    path: "/Login",
    alias: "/Login",
    name: "Login",
    component: () => import("./components/Login")
  },
  {
    path: "/Member",
    alias: "/Member",
    name: "Member",
    component: () => import("./components/Member")
  },
  {
    path: "/Class",
    alias: "/Class",
    name: "Class",
    component: () => import("./components/Class")
  },
  {
    path: "/Booking",
    alias: "/Booking",
    name: "Booking",
    component: () => import("./components/Booking")
  },
  {
    path: "/Progress",
    alias: "/Progress",
    name: "Progress",
    component: () => import("./components/Progress")
  },
  {
    path: "/Diet",
    alias: "/Diet",
    name: "Diet",
    component: () => import("./components/Diet")
  },
  {
    path: "/Sell",
    alias: "/Sell",
    name: "Sell",
    component: () => import("./components/Sell")
  },
  {
    path: "/Bmi",
    alias: "/Bmi",
    name: "Bmi",
    component: () => import("./components/Bmi")
  },
  {
    path: "/Team",
    alias: "/Team",
    name: "Team",
    component: () => import("./components/Team")
  },
  {
    path: "/Video",
    alias: "/Video",
    name: "Video",
    component: () => import("./components/Video")
  },
  {
    path: "/Notice",
    alias: "/Notice",
    name: "Notice",
    component: () => import("./components/Notice")
  },
  {
    path: "/Invoice",
    alias: "/Invoice",
    name: "Invocie",
    component: () => import("./components/Invoice")
  },
  {
    path: "/Myprofile",
    alias: "/Myprofile",
    name: "Myprofile",
    component: () => import("./components/Myprofile")
  },
  {
    path: "/EditProfile",
    alias: "/EditProfile",
    name: "EditProfile",
    component: () => import("./components/EditProfile")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;