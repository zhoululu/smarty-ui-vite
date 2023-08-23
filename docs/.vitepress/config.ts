import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../../config/unocss";
export default defineConfig({
  title: '🔨Smarty-UI',
  description: '组件库搭建的教学模型',
  themeConfig: {
    sidebar: {
      '/': [
        { text: '快速开始', link: '/' },
        { text: '通用', items: [
          { text: 'Button按钮', link: '/components/button/' }
        ] }
      ]
    },
  },
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [// 添加JSX插件
    vueJsx(),
    Unocss(),demoblockVitePlugin()]
  }
});
