<template lang="pug">
.container-fluid.stage
  DashboardComponentVue
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DashboardComponentVue from "@/components/PizzaAppComponents/DashboardComponentV2/DashboardComponent.vue";
import store from "@/store/index";
import router from "@/router/index";

export default defineComponent({
  components: {
    DashboardComponentVue,
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
