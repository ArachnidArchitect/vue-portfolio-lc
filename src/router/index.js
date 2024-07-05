import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FullEdView from '../views/FullEdView.vue'
import FullWorkView from '../views/FullWorkView.vue'
import FullSkillsView from '../views/FullSkillsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/fullEd',
    name: 'fullEd',
    component: FullEdView
  },
  {
    path:'/fullWork',
    name: 'fullWork',
    component: FullWorkView
  },
  {
    path:'/fullSkills',
    name: 'fullSkills',
    component: FullSkillsView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
