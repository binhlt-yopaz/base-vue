import router from '@/router';
import store from '@/store/index';

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.auth;

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      alert('You are not authenticated');
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});
