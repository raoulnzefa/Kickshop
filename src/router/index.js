import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../components/LandingPage";
import Admin from '../components/Admin';
import ProductPage from '../components/ProductPage';
import Category from '../components/Category';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage
    },
    {
      path: '/admin',
      name: "admin",
      component: Admin
    },
    {
      path: '/product',
      name: "product",
      component: ProductPage
    },
    {
      path: '/categories',
      name: 'category',
      component: Category
    }
  ]
});
