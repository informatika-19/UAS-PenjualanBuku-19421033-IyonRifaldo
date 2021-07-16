const routes = [
  {
    path: '/',
    component: () => import('layouts/mylayout.vue'),
    meta: {
      authAdmin: true
    },
    children: [
      { path: '', name: 'berandaadmin', component: () => import('pages/admin/Index.vue') },
      { path: 'inputbarang', name: 'inputbarang', component: () => import('pages/admin/inputbarang.vue') },
      { path: 'dataUser', name: 'dataUser', component: () => import('pages/admin/dataUser.vue') },
      { path: 'databuku', name: 'databuku', component: () => import('pages/admin/databuku.vue') },
      { path: 'formedit/:id', name: 'formateditdvd', component: () => import('pages/admin/formedit.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/userlayout.vue'),
    meta: {
      authUser: true
    },
    children: [
      { path: '', name: 'HomeUser', component: () => import('pages/user/Index.vue') },
      { path: '/myOrder', name: 'myOrder', component: () => import('src/pages/user/MyOrder.vue') }
    ]
  },
  {
    path: '/login',
    name: 'loginPage',
    component: () => import('pages/guest/login.vue')
  },
  {
    path: '/register',
    name: 'registerPage',
    component: () => import('pages/guest/register.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
