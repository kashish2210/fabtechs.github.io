export default defineNuxtConfig({
  devtools: { enabled: true },
  
  css: [
    '~/assets/css/fontawesome.min.css',
    '~/assets/css/themify-icons.css',
    '~/assets/css/elegant-line-icons.css',
    '~/assets/css/elegant-font-icons.css',
    '~/assets/css/flaticon.css',
    '~/assets/css/animate.min.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/slick.css',
    '~/assets/css/slider.css',
    '~/assets/css/odometer.min.css',
    '~/assets/css/venobox/venobox.css',
    '~/assets/css/owl.carousel.css',
    '~/assets/css/main.css',
    '~/assets/css/responsive.css'
  ],
  
  app: {
    head: {
      title: 'FABTECHS ENTERPRISES',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Construction & Building HTML Template' },
        { name: 'DEEPAK', content: 'AlexaTheme' }
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/img/favicon.png' }
      ],
      script: [
        { src: 'https://kit.fontawesome.com/a076d05399.js', crossorigin: 'anonymous' },
        { src: 'https://kit.fontawesome.com/774bc66bac.js', crossorigin: 'anonymous' }
      ]
    }
  },
  
  plugins: [
    '~/plugins/client-scripts.client.js'
  ]
})