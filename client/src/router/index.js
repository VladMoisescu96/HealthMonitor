import Vue from "vue"
import Router from "vue-router"
import LoginComponent from "@/components/LoginComponent"
import RegisterComponent from "@/components/RegisterComponent"
import Dashboard from "@/components/Dashboard"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: LoginComponent
    },
    {
      path: "/register",
      name: "RegisterComponent",
      component: RegisterComponent
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    }
  ]
})