export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    // Check if the userSession exists in localStorage on the client side
    if (!localStorage.getItem('userSession')) {
      // If the userSession is missing, redirect to login page
      if (to.path !== '/login') {
        return navigateTo('/login')
      }
    }
  }
});
