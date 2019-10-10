import Vue from 'vue'
import Router from 'vue-router'
import Specialties from './views/SpecialtiesView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'specialties',
      component: Specialties
    }
  ]
})
