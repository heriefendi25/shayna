import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from "../views/Product.vue"
import ShoppingCart from '../views/ShoppingCart.vue'
import Success  from '../views/SuccessShayna.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/cart",
    name: "cart",
    component: ShoppingCart
  },
  {
    path: "/success",
    name: "success",
    component: Success
  },
];

const router = new VueRouter({
  routes
})

export default router
