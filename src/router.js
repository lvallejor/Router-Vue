import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import Servicios from "./components/Servicios";
import NotFound from "./components/NotFound";
import Cliente from "./components/Cliente";
import ContactoNuevo from "./components/ContactoNuevo";
import Demo from "./components/Demo";
const LazyLoading = () => import("./components/LazyLoading");

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Inicio,
      children: [
        {
          path: "",
          components: {
            lazyloading: LazyLoading,
          },
        },
      ],
    },
    {
      path: "/contactos",
      component: Contacto,
    },
    {
      path: "/servicios",
      component: Servicios,
      
    },
    {
      path: "*",
      component: NotFound,
    },
    {
      path: "/cliente/:cliente",
      component: Cliente,
      props: (route) => ({
        cliente: ` ${route.params.cliente} s.a.`,
      }),
    },
    {
      path: "/demo",
      component: Demo,
      children: [
        {
          path: "",
          component: Servicios,
        },
      ],
    },
    {
      path: "/contacto-nuevo",
      component: ContactoNuevo,
      name: "contacto-nuevo",
    },
    {
      path: "/contacto",
      component: Contacto,
      name: "contacto",
      redirect: to => {
        return {name: 'contacto-nuevo'}
      },
      alias: ['/contacto-2019', '/contacto-2020']
      
    },
  ],
});
