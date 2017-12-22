import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex'
import appConf from '@/libs/app-conf.js'
import iView from 'iview';

Vue.use(Router)

// 不作为Main组件的子页面展示的页面单独写，如下
const loginRouter = {
  path: '/login',
  name: 'login',
  component: resolve => require(['@/views/login.vue'], resolve),
  meta: {title: '登录'}
};

const lockRouter = {
  path: '/locking',
  name: 'locking',
  component: resolve => require(['@/views/lockScreen/lockingPage.vue'], resolve),
  meta: {
    title: '锁屏'
  },
};

const otherRoutes = {
  path: '/',
  name: 'home',
  redirect: '/home',
  component: resolve => require(['@/views/main.vue'], resolve),
  children: [
    {
      path: 'home',
      name: 'home_index',
      component: resolve => require(['@/views/home/home.vue'], resolve),
      meta: {
        title: '主页'
      },
    }
  ]
};

const appRoutes = {
  path: '',
  name: '',
}

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.dispatch('refresh_user')
}

const routers = [
  loginRouter,
  lockRouter,
  otherRoutes,
  appRoutes
]

const router = new Router({
  /*  mode: 'history',*/
  routes: routers
});

export default router;

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  if (localStorage.islocking === '1' && to.name !== 'locking') {  // 判断当前是否是锁定状态
    next(false);
    router.replace({
      name: 'locking',
      query: {uri: to.name}
    });
  } else if (localStorage.islocking === '0' && to.name === 'locking') {
    next(false);
  } else if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
  iView.LoadingBar.finish();
})


router.afterEach(trans => {
  iView.LoadingBar.finish();
  let title = trans.meta.title ? (trans.meta.title + " - " + appConf.appName) : appConf.appName;
  document.title = title;
  window.scrollTo(0, 0);
})

