<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio </router-link> |
      <router-link to="/servicios">Servicios </router-link> | 
      <router-link to="/contactos">Contactos</router-link> |
      <router-link to="/ blog/ 1">Blog</router-link> |
      <router-link to="/demo">Demo</router-link> |
    </nav>
    <transition name="mi-transicion">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>