import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/kn-docs/',
  title: 'AIMor',
  titleTemplate: ':title | База знаний',
  description: 'Инструкции и ответы на частые вопросы',
  cleanUrls: true,
  appearance: 'force-dark',

  // Custom block labels are global across locales (per-locale markdown config
  // is not supported): use explicit titles like `::: info Note` in EN pages.
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
              {
                text: 'Система DNS',
                link: '/',
                items: [
                  { text: 'Как узнать DNS-сервер', link: '/check-dns' },
                  { text: 'Как сменить DNS-сервер', link: '/change-dns' },
                ],
              },
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
              {
                text: 'The Domain Name System',
                link: '/en/',
                items: [
                  { text: 'How to find out your DNS server', link: '/en/check-dns' },
                  { text: 'How to change your DNS server', link: '/en/change-dns' },
                ],
              },
            ],
          },
        ],
      },
    },
  },
})
