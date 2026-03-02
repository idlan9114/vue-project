import { createRouter, createWebHistory } from 'vue-router' 
import Home from '../views/Home.vue'      
import Character from '../views/Character.vue'  
  

const routes = [
  { path: '/', name:'Home', component: Home, meta: {transition: 'slide-left'} },
  { path: '/character', component: Character },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router