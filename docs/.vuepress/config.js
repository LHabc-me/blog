import {hopeTheme} from "vuepress-theme-hope";
import {path} from '@vuepress/utils';

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
    dest: "./dist",

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
        displayFooter: true,
        footer: '<a href="https://beian.miit.gov.cn/" target="_blank">津ICP备2023000084号</a><br />MIT Licensed | Copyright © 2023-present LHabc',
        //copyright: 'MIT Licensed | Copyright © 2023-present LHabc',
        blog: {
            avatar: '/img/avatar.png',
            roundAvatar: true,
            name: 'LHabc',
            medias: {
                Email: "mailto:lhabc.me@outlook.com",
                GitHub: "https://github.com/LHabc-me",
                Twitter: "https://twitter.com/LHabc_me",
            }
        },
        fullscreen: true,
        plugins: {
            copyCode: {showInMobile: true},
            blog: true
        },
    }),

    /** 主题配置 */
    themeConfig: {
        /** 网站的logo */
        logo: "/logo.svg",

        /** 头部导航栏的配置 */
        nav: [{text: "主页", link: "/"}],

        /** 侧边栏标题显示深度，0-2 */
        sidebarDepth: 2,

        /** 语言设置 */
        locales: {
            /** 默认语言 */
            "/": {
                lang: "zh-CN",
                selectText: "选择语言",
                lastUpdated: "上次编辑于",
                label: "简体中文",
            },
        },
    }
};
