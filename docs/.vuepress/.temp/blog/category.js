export const categoryMap = {"category":{"/":{"path":"/category/","map":{"测试":{"path":"/category/%E6%B5%8B%E8%AF%95/","keys":["v-c027948c","v-bcbde34e"]}}}},"tag":{"/":{"path":"/tag/","map":{"这是标签":{"path":"/tag/%E8%BF%99%E6%98%AF%E6%A0%87%E7%AD%BE/","keys":["v-c027948c","v-bcbde34e"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


