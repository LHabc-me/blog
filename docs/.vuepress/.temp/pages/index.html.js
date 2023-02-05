export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"LHabc的博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"copyright\":false,\"title\":\"LHabc的博客\",\"heroText\":\"博客主页\",\"heroFullScreen\":true,\"tagline\":\"欢迎\",\"bgImage\":\"/img/118.jpg\",\"projects\":[{\"name\":\"测试反应速度\",\"desc\":\"测试反应速度小游戏\",\"link\":\"https://lhabc.top/games/reaction_test\"},{\"name\":\"五子棋\",\"desc\":\"五子棋小游戏\",\"link\":\"https://lhabc.top/games/gobang\"}]},\"headers\":[],\"readingTime\":{\"minutes\":0.21,\"words\":63},\"filePathRelative\":\"index.md\",\"excerpt\":\"\"}")

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
