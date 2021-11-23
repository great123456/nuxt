import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _102cbd81 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _4fed60f6 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _a411f39c = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _3515db9c = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _5a6d44ba = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _045de3c4 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _67815502 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _102cbd81,
    children: [{
      path: "",
      component: _4fed60f6,
      name: "home"
    }, {
      path: "/login",
      component: _a411f39c,
      name: "login"
    }, {
      path: "/register",
      component: _a411f39c,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _3515db9c,
      name: "profile"
    }, {
      path: "/settings",
      component: _5a6d44ba,
      name: "settings"
    }, {
      path: "/editor",
      component: _045de3c4,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _67815502,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
