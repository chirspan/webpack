import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex'
import appConf from '@/libs/app-conf.js'
import iView from 'iview';

Vue.use(Router)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/locking',
    name: 'locking',
    component: resolve => require(['@/views/lockScreen/lockingPage.vue'], resolve),
    meta: {
      title: '锁屏'
    },
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/views/login.vue'], resolve),
    meta: {title: '登录'}
  },
  {
    path: '/home',
    name: 'home',
    component: resolve => require(['@/views/home.vue'], resolve),
    meta: {
      title: '主页'
    },
  },

]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.dispatch('refresh_user')
}

const router = new Router({
  mode: 'history',
  routes
});


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
        path: '/',
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

export default router;
