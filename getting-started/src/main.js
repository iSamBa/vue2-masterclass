import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import PageHome from '@/components/PageHome.vue'
import PageThreadShow from '@/components/PageThreadShow.vue'

const routes = [
  { path: '/', name: 'Home', component: PageHome },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const application = createApp(App)
application.use(router)
application.mount('#app')
