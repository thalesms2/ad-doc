// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Adsomos Docs',
  tagline: 'Documentações para sistemas das industrias',
  url: 'https://ad-doc.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thalesms2', // Usually your GitHub org/user name.
  projectName: 'ad-doc', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        maxSearchResults: 20,
        indexDocs: false,
      }
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/thalesms2/ad-doc/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/thalesms2/ad-doc/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Adsomos Docs',
        logo: {
          alt: 'Adsomos',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '📚 Documentação',
          },
          {to: '/blog', label: '📰 Blog', position: 'left'},
          {
            href: 'https://github.com/thalesms2/ad-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
      // The application ID provided by Algolia
      appId: 'EZPVM4M1G9',

      // Public API key: it is safe to commit it
      apiKey: '8b992f699c4b4b5a7d2a771b6ef7b048',

      indexName: 'ad_DOC',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '📚 Documentação',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Adsomos',
            items: [
              {
                label: 'Site',
                href: 'https://adsomos.com/',
              },
              {
                label: 'Suporte',
                href: 'https://suporte.adsomos.com/',
              },
              {
                label: 'Wiki',
                href: 'https://wiki.adsomos.com/',
              },              
              {
                label: 'Central de downloads',
                href: 'https://downloads.adsomos.com/',
              },
              {
                label: 'Contrassenha',
                href: 'https://contrasenha.adsomos.com/ContraSenha/Login/Index?ReturnUrl=%2fContraSenha%2f',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Telefones úteis',
                to: '/docs/suporte/telefones',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Adsomos, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
