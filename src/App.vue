<template lang="pug">
NavBarModel
router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarModel from "@/components/PizzaAppComponents/NavBarComponentV2/NavBarModel.vue";

export default defineComponent({
  components: {
    NavBarModel,
  },
});
</script>
