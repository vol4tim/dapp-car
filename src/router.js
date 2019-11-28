import Vue from "vue";
import Router from "vue-router";
import Car from "@/views/Car";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "car",
      component: Car
    },
    { path: "*", redirect: "/" }
  ]
});
