import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'База знаний',
  description: 'Инструкции и ответы на частые вопросы',
  cleanUrls: true,

  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/' },
          { text: 'Инструкции', link: '/dns-how-it-works' },
        ],
        sidebar: [
          {
            text: 'Сеть и подключение',
            items: [
              { text: 'Что такое DNS и как работает', link: '/dns-how-it-works' },
            ],
          },
        ],
        outline: { label: 'Содержание', level: [2, 3] },
        docFooter: { prev: 'Назад', next: 'Вперед' },
        darkModeSwitchLabel: 'Тема',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Наверх',
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'Knowledge Base',
      description: 'Guides and answers to common questions',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guides', link: '/en/dns-how-it-works' },
        ],
        sidebar: [
          {
            text: 'Network & Connection',
            items: [
              { text: 'What DNS is and how it works', link: '/en/dns-how-it-works' },
            ],
          },
        ],
      },
    },
  },
})
