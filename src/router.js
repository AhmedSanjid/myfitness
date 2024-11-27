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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;