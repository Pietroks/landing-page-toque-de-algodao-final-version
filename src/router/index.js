import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: () => import('../views/Produtos.vue'),
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../components/Dashboard.vue'),
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: `/detalhes-produto/:id`, 
      name: 'detalhes-produto',
      component: () => import('../components/DetalhesProduto.vue'),
      props: true
    },
    {
      path: '/addform',
      name: 'addform',
      component: () => import('../components/AddForm.vue')
    },
    {
      path: `/editform/:id`, 
      name: 'editform',
      component: () => import('../components/EditForm.vue'),
      props: true
    }
  ]
});

router.beforeEach((to, from, next) => {
  // Verifica se a rota requer autenticação
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verifica se o usuário está autenticado (por exemplo, verificando se há um token de autenticação no armazenamento local)
    const isAuthenticated = localStorage.getItem('token');
    if (!isAuthenticated) {
      // Se o usuário não estiver autenticado, redirecione para a página de login
      next({ name: 'login' }); // Redireciona para a página de login
    } else {
      next(); // Continua a navegação
    }
  } else {
    next(); // Se a rota não requer autenticação, continua a navegação
  }
});
export default router
