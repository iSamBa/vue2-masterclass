import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import ThreadShow from '@/pages/ThreadShow.vue'
import NotFound from '@/pages/NotFound.vue'
import Forum from '@/pages/Forum.vue'
import Category from '@/pages/Category.vue'
import sourceData from '@/data.json'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/forum/:id', name: 'Forum', component: Forum, props: true },
  { path: '/category/:id', name: 'Category', component: Category, props: true },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter (to, from, next) {
      // check if the thread exists
      const threadExists = sourceData.threads.find(
        thread => thread.id === to.params.id
      )
      if (threadExists) {
        // Move to next
        return next()
      } else {
        // Thread does not exist ==> Redirect to Not found
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          hash: to.hash,
          query: to.query
        })
      }
    }
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
