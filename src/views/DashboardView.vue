<template lang="pug">
.container-fluid.stage
  DashboardComponentVue
  router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DashboardComponentVue from "@/components/PizzaAppComponents/DashboardComponentV1/DashboardComponent.vue";
import store from "@/store/index";
import router from "@/router/index";

export default defineComponent({
  components: {
    DashboardComponentVue,
  },
  mounted: function () {
    // console.log(store.state.user.Email);
  },
  beforeMount: function () {
    // if (store.state.user.Email == "") {
    //   router.push("login");
    // }
  },
});
</script>

<style>
.stage {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
