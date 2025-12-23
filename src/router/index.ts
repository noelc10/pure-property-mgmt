import { createRouter, createWebHistory } from 'vue-router'
import AgentsView from '@/views/AgentsView.vue'
import AgentDetailsView from '@/views/AgentDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/agents',
    },
    {
      path: '/agents',
      name: 'agents',
      component: AgentsView,
    },
    {
      path: '/agents/:id',
      name: 'agentId',
      component: AgentDetailsView,
    },
  ],
})

export default router
