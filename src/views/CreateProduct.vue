<template lang="pug">
.snipp
  RegisterNewProductComponentVue  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterNewProductComponentVue from "@/components/PizzaAppComponents/RegisterNewProductComponentV1/RegisterNewProductComponent.vue";

export default defineComponent({
  components: {
    RegisterNewProductComponentVue,
  },
});
</script>
