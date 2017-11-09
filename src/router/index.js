import Vue from 'vue'
import Router from 'vue-router'
import Stageopdrachten from '@/components/Stageopdrachten'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Stageopdrachten',
      component: Stageopdrachten
    }
  ]
})
