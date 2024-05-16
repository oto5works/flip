// router/index.js

import { createRouter, createWebHashHistory } from "vue-router";
import home from "@/views/home/home.vue";
// auth
import auth from "@/views/auth/auth.vue";

// my 
import my from "@/views/my/my.vue";
import myID from "@/views/my/myID.vue";

// voca
import voca from "@/views/voca/voca.vue";
import vocaID from "@/views/voca/vocaID.vue";

// anki
import anki from "@/views/anki/anki.vue";
import ankiID from "@/views/ankiID/ankiID.vue";


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    // auth
    {
      path: "/auth",
      name: "auth",
      component: auth,
    },
    // my
    {
      path: "/my",
      name: "my",
      component: my,
    },
    {
      path: "/my/:id",
      name: "myID",
      component: myID,
    },
    // voca
    {
      path: "/voca",
      name: "voca",
      component: voca,
    },
    {
      path: "/voca/:id",
      name: "vocaID",
      component: vocaID,
    },
    // anki
    {
      path: "/anki",
      name: "anki",
      component: anki,
    },
    {
      path: "/anki/:id",
      name: "ankiID",
      component: ankiID,
    },
  ],
});

export default router;
