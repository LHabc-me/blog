import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/home/LHabc/practice/js/website-lhabc.top/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import Badge from "/home/LHabc/practice/js/website-lhabc.top/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/home/LHabc/practice/js/website-lhabc.top/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "/home/LHabc/practice/js/website-lhabc.top/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


import "/home/LHabc/practice/js/website-lhabc.top/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
