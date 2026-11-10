import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Tooltip from './components/Tooltip.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Tooltip', Tooltip)
  },
} satisfies Theme
