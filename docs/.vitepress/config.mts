import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/kn-docs/',
  title: 'AIMor',
  titleTemplate: ':title | База знаний',
  description: 'Инструкции и ответы на частые вопросы',
  cleanUrls: true,
  appearance: 'force-dark',

  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
      themeConfig: {
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
      title: 'AIMor',
      themeConfig: {
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
