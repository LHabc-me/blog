import { defineClientConfig } from "@vuepress/client";

import CommonWrapper from "@theme-hope/components/CommonWrapper";
import HomePage from "@theme-hope/components/HomePage";
import NormalPage from "@theme-hope/components/NormalPage";
import Navbar from "@theme-hope/modules/navbar/components/Navbar";
import Sidebar from "@theme-hope/modules/sidebar/components/Sidebar";
import Layout from "/home/LHabc/practice/js/website-lhabc.top/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js";
import NotFound from "/home/LHabc/practice/js/website-lhabc.top/node_modules/vuepress-theme-hope/lib/client/layouts/NotFound.js";

import { useScrollPromise } from "@theme-hope/composables/index";
import { injectDarkmode, setupDarkmode } from "@theme-hope/modules/outlook/composables/index";
import { setupSidebarItems } from "@theme-hope/modules/sidebar/composables/index";

import "/home/LHabc/practice/js/website-lhabc.top/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

import BloggerInfo from "@theme-hope/modules/blog/components/BloggerInfo";
import { setupBlog } from "@theme-hope/modules/blog/composables/index";
import BlogCategory from "/home/LHabc/practice/js/website-lhabc.top/node_modules/vuepress-theme-hope/lib/client/modules/blog/layouts/BlogCategory.js";
import BlogHome from "/home/LHabc/practice/js/website-lhabc.top/node_modules/vuepress-theme-hope/lib/client/modules/blog/layouts/BlogHome.js";
import BlogType from "/home/LHabc/practice/js/website-lhabc.top/node_modules/vuepress-theme-hope/lib/client/modules/blog/layouts/BlogType.js";
import Timeline from "/home/LHabc/practice/js/website-lhabc.top/node_modules/vuepress-theme-hope/lib/client/modules/blog/layouts/Timeline.js";
import "/home/LHabc/practice/js/website-lhabc.top/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/layout.scss";


export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    app.component("BloggerInfo", BloggerInfo);
    
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
    
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
    
  }
});