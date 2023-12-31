import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import Detail from '../views/Detail/index.vue'
import Login from '../views/Login/index.vue'
import Edit from '../views/Edit/index.vue'
import FriendsLink from '../views/FriendsLink/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/friendslink',
      name: 'friendslink',
      component: FriendsLink
    },
	{
	  path: '/detail',
	  name: 'detail',
	  component: Detail
	}
        
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    // 每次路由切换回到顶部
    return {
      top: 0
    }
  }
})

export default router
