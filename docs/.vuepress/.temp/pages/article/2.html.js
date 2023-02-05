export const data = JSON.parse("{\"key\":\"v-bcbde34e\",\"path\":\"/article/2.html\",\"title\":\"第二篇文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":[\"测试\"],\"tag\":[\"这是标签\"],\"title\":\"第二篇文章\"},\"headers\":[],\"readingTime\":{\"minutes\":0.14,\"words\":42},\"filePathRelative\":\"article/2.md\",\"excerpt\":\"<p>这是摘要</p>\\n\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
