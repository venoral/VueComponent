import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './route-config'

//install router
Vue.use(VueRouter)

//create router
const router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
})

//configure router
configRouter(router)

//main view
const App = Vue.extend()

router.start(App, 'body')
