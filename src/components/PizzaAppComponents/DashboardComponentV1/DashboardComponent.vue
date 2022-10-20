<template lang="pug">
#offcanvas.offcanvas-start.show(tabindex='-1' aria-labelledby='offcanvasLabel')
  .offcanvas-header
    h5#offcanvasLabel.offcanvas-title Offcanvas
  .offcanvas-body
    .list-group
      router-link.list-group-item.list-group-item-action.active(to="/dashboard" aria-current='true')
        .d-flex.w-100.justify-content-between
          h5.mb-1 Dashboard Principal
          small 3 days ago
        p.mb-1 Some placeholder content in a paragraph.
        small And some small print.
      router-link.list-group-item.list-group-item-action(to="/dashboard/index")
        .d-flex.w-100.justify-content-between
          h5.mb-1 List group item heading
          small.text-muted 3 days ago
        p.mb-1 Some placeholder content in a paragraph.
        small.text-muted And some muted small print.
      a.list-group-item.list-group-item-action(href='#')
        .d-flex.w-100.justify-content-between
          h5.mb-1 List group item heading
          small.text-muted 3 days ago
        p.mb-1 Some placeholder content in a paragraph.
        small.text-muted And some muted small print.
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
