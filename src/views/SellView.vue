<template lang="pug">
.container.mkcenter
  SearchProductInputComponentVue
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchProductInputComponentVue from "@/components/PizzaAppComponents/SearchProductInputV1/SearchProductInputComponent.vue";

export default defineComponent({
  components: {
    SearchProductInputComponentVue,
  },
});
</script>

<style>
.mkcenter {
  display: flex;
  align-items: center;
  height: 90vh;
  flex-direction: row;
  justify-content: center;
}
</style>
