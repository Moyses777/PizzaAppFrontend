<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index";
import { RouterLink, RouterView } from "vue-router";

export default defineComponent({
  data: function () {
    return {
      isLogged:
        window.location.pathname == "/login" ||
        window.location.pathname == "/register",
    };
  },
  watch: {
    $route: function (to, from) {
      this.isLogged =
        window.location.pathname == "/login" ||
        window.location.pathname == "/register";
    },
  },
  components: { RouterLink, RouterView },
  methods: {
    closeSession: async function () {
      await fetch("https://localhost:44376/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      store.commit("CloseSession");
    },
  },
});
</script>

<template lang="pug">
nav.navbar.navbar-light.bg-light
  .container-fluid
    a.navbar-brand(href='#')
      img.d-inline-block.align-text-top(src='@/assets/logo.png' alt='' width='30' height='24')
      |       Registro Contactos Mavi 
    div
      RouterLink.container.navbarbutton(to="login" v-if="isLogged") Iniciar Sesión
      RouterLink.container.navbarbutton(to="register" v-if="isLogged") Registro
      RouterLink.container.navbarbutton(to="login" v-if="!isLogged" @click="closeSession") Cerrar Sesión
</template>

<style>
.navbarbutton {
  margin: 0.25em;
  font-family: fantasy;
  color: black !important;
  font-size: 18px;
  text-decoration: auto;
  border: gray 1px solid;
  padding: 0.6rem;
  background: gainsboro;
  box-shadow: black 1px 1px 1px;
}

.navbarbutton:hover {
  font-size: 22px;
  background-color: red;
  color: white !important;
  box-shadow: black 2.5px 2.5px 2.5px;
}
</style>
