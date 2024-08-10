// Plugins
import router from "../router";

import "@/styles/common.scss";

export function registerPlugins(app) {
  app
    .use(router)
}
