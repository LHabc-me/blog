import {hopeTheme} from "vuepress-theme-hope";

export default {
    /** 部署目录 */
    base: process.env.VuePress_BASE || "/",

    /** 网站标题 */
    title: "LHabc的博客",

    /** 网站在该语言下的描述 */
    description: "LHabc的博客",

    /** 生成网站头部的标签 */
    head: [
        // 设置网站图标
        ["link", {rel: "icon", href: "/fav.ico"}],

        // 设置网站作者
        ["meta", {name: "author", content: "LHabc"}],

        // 移动端App体验
        [
            "meta",
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
            },
        ],
    ],

    /** 构建文件输出目录 */
    dest: "../../build/dist",

    /** 多语言配置选项
     *
     * 键名是该语言所属的子路径
     * 作为特例，默认语言可以使用 '/' 作为其路径。
     */
    locales: {
        /** 默认语言 */
        "/": {
            /** 设置为中文 */
            lang: "zh-CN",
        },
    },


    theme: hopeTheme({
        themeColor: {
            green: "#3eaf7c",
            red: "#f26d6d",
            orange: "#fb9b5f",
        },
        backToTop: false,
        displayFooter: true,
        footer: '<a href="https://beian.miit.gov.cn/" target="_blank">津ICP备2023000084号</a><br />MIT Licensed | Copyright © 2023-present LHabc',
        //copyright: 'MIT Licensed | Copyright © 2023-present LHabc',
        blog: {
            description: "吉林大学本科在读",
            avatar: '/img/avatar.png',
            roundAvatar: true,
            name: '𝗟𝗛𝗮𝗯𝗰',
            medias: {
                Email: "mailto:lhabc.me@outlook.com",
                GitHub: "https://github.com/LHabc-me",
                Twitter: "https://twitter.com/LHabc_me",
            }
        },
        fullscreen: true,
        plugins: {
            copyCode: {showInMobile: true},
            blog: true,
            mdEnhance: {container: true},
            git: {timezone: "Asia/Shanghai"}
        },
        repo: "https://github.com/LHabc-me/website-lhabc.top",
        repoDisplay: false,
        docsDir: "src/vuepress/docs",
    })
};
