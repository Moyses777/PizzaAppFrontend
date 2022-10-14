<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
  <div class="h2 mb-0">
    <div class="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>
    <ui5-checkbox></ui5-checkbox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@ui5/webcomponents/dist/CheckBox.js";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
