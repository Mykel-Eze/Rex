// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  ssr: false,
  target: 'static',
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-swiper'],
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
        { name: 'theme-color', content: '#1E50D1' },
      ],
    },
  },
  loading: {
    color: '#1E50D1',
    height: '5px',
  },
  css: [
    'aos/dist/aos.css',
    '@/assets/css/main.css',
    'aos/dist/aos.css',
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
