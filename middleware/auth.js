export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    if (!localStorage.getItem('userSession')) {
      // Redirect to the root page if userSession is missing
      if (to.path !== '/') {
        return navigateTo('/');
      }
    }
  }
});
