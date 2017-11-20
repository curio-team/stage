import Vue from 'vue'
import Router from 'vue-router'
import Stagekaarten from '@/components/Stageopdrachten'
import Home from '@/components/Home.vue'
import Planning from '@/components/Planning.vue'
import Downloads from '@/components/Downloads.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stagekaarten',
      name: 'Stagekaarten',
      component: Stagekaarten
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/planning',
      name: 'Planning',
      component: Planning
    },
    {
      path: '/downloads',
      name: 'Downloads',
      component: Downloads
    }
  ]
})
