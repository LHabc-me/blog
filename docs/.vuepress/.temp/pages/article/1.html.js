export const data = JSON.parse("{\"key\":\"v-c027948c\",\"path\":\"/article/1.html\",\"title\":\"第一篇文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"category\":[\"测试\"],\"tag\":[\"这是标签\"],\"title\":\"第一篇文章\"},\"headers\":[],\"readingTime\":{\"minutes\":0.11,\"words\":32},\"filePathRelative\":\"article/1.md\",\"excerpt\":\"<p>这是摘要</p>\\n\"}")

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
