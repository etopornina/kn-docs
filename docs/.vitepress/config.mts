import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/kn-docs/',
  title: 'AIMor',
  titleTemplate: ':title | База знаний',
  description: 'Инструкции и ответы на частые вопросы',
  cleanUrls: true,
  appearance: 'force-dark',

  markdown: {
    container: {
      tipLabel: 'Совет',
      infoLabel: 'Примечание',
      warningLabel: 'Внимание',
      dangerLabel: 'Осторожно',
      detailsLabel: 'Подробности',
      importantLabel: 'Важно',
      cautionLabel: 'Осторожно',
    },
  },

  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
      themeConfig: {
        sidebar: [
          {
            text: 'Сеть и подключение',
            items: [
              { text: 'DNS и DNS-серверы', link: '/' },
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
              { text: 'DNS and DNS servers', link: '/en/' },
            ],
          },
        ],
      },
    },
  },
})
