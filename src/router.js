import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from "./components/HelloWorld.vue"

const routes = [
  {
    path: "/product-detail",
    name: "product-detail",
    component: HelloWorld,
  },
]

const router = createRouter({
  history: createWebHistory("/product-detail"),
  routes: routes,
})

export default router
