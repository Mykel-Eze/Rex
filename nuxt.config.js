// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  target: 'static',
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/rex-icon.png' }
      ],
      title: 'REX | Real Estate Xplorer',
      meta: [
        { 
          name: 'author', 
          content: 'Real Estate Xplorer Nig. Ltd' },
        {
          hid: 'description',
          name: 'description',
          content: 'Pioneering Global Property Excellence',
        },
        {
          name: 'Keywords',
          content: 'Rex, Real Estate Xplorer, Real Estate, Development Company',
        },
      ],
    },
  },
  loading: {
    color: '#1E50D1',
    height: '5px',
  },
  css: [
    '@/assets/css/main.css',
    'materialize-css/dist/css/materialize.min.css',
    '@/assets/css/fonts.css',
    '@/assets/css/styles.css',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
}
