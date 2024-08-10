import { createRouter, createWebHashHistory } from "vue-router";
import flip from "@/views/flip.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "flip",
      component: flip,
    },
  ],
});

export default router;
