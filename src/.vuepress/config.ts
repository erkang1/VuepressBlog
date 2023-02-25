import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: '/VuepressBlog/',
  dest: './dist',
  title: "erkang - 开发文档",
  head: [
          [
            // favicon.ico
            'link', { rel: 'icon', href: 'logo.png' },
          ]
        ],
    
  theme: hopeTheme({
    logo: 'logo.png',
    plugins:{
      blog: true,
      autoCatalog: false,
    },

    blog: {
      avatar: "logo.png",
      name: "erkang🐣",
      
    },
    sidebar:{
      "/Vue3ElementPlus笔记/": [
        "/Vue3ElementPlus笔记/1-创建程序.md",
        "/Vue3ElementPlus笔记/2-登陆界面.md",
        "/Vue3ElementPlus笔记/3-代码抽离.md",
        "/Vue3ElementPlus笔记/4-注册界面.md" 
      ],
    },
    navbar: [
      {
        text: "首页",
        link: "/",
        icon: "home"
      },
      // {
      //   text: "代码笔记",
      //   icon: "workingDirectory",
      //   children: ["/CodeRecord/BatRecord.md"],      
      // },
      {
        text: "Vue3ElementPlus笔记",
        icon: "workingDirectory",
        children: ["/Vue3ElementPlus笔记/1-创建程序.md",
                   "/Vue3ElementPlus笔记/2-登陆界面.md",
                   "/Vue3ElementPlus笔记/3-代码抽离.md",
                   "/Vue3ElementPlus笔记/4-注册界面.md" ],      
      },
      // {
      //   text: "导航",
      //   link: "navigation.md",
      //   icon: "workingDirectory",
      // },
      {
        text: "关于本站",
        icon: "workingDirectory",
        link: "/about.md",
      }
    ],
    
  }),

  shouldPrefetch: false,
});
