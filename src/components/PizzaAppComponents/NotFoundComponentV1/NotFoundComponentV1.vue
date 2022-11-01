<template lang="pug">
ui5-illustrated-message(name='UnableToUpload')
  ui5-title(slot='title' level='H1') ERROR 404 - PAGE NOT FOUND
  div(slot='subtitle')
    | Please try again or contact us at 
    ui5-link lm.camacho@mavi.mx
  ui5-button(icon='refresh') Try again  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@ui5/webcomponents-fiori/dist/illustrations/AllIllustrations.js";
import "@ui5/webcomponents-fiori/dist/IllustratedMessage.js";
import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js";
import "@ui5/webcomponents-fiori/dist/illustrations/tnt/Success.js";
import "@ui5/webcomponents-icons/dist/refresh.js";
import "@ui5/webcomponents/dist/Link.js";

export default defineComponent({});
</script>
