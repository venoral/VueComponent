'use strict'

export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: (resolve) => {
        require(['./views/index/app.vue'], resolve)
      },
    },
    '/waterfall': {
      name: 'register',
      component: (resolve) => {
        require(['./views/waterfall/Waterfall.vue'], resolve)
      },
    },
  })
}
