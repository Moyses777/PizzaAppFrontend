<template lang="pug">
#offcanvas.offcanvas-start.show(tabindex='-1' aria-labelledby='offcanvasLabel')
  .offcanvas-body
    .list-group
      router-link.list-group-item.list-group-item-action(to="/dashboard" :class="{'active': dashclicked}" @click="isDashClicked" aria-current='true')
        .d-flex.w-100.justify-content-between
          h5.mb-1 Dashboard Principal
          small 3 days ago
        p.mb-1 Some placeholder content in a paragraph.
        small And some small print.
      router-link.list-group-item.list-group-item-action(to="/dashboard/index" :class="{'active': indexclicked}" @click="isIndexClicked")
        .d-flex.w-100.justify-content-between
          h5.mb-1 List group item heading
          small 3 days ago
        p.mb-1 Some placeholder content in a paragraph.
        small And some muted small print.
      router-link.list-group-item.list-group-item-action(to="#" :class="{'active': anonymclicked}" @click="isAnonymClicked")
        .d-flex.w-100.justify-content-between
          h5.mb-1 List group item heading
          small 3 days ago
        p.mb-1 Some placeholder content in a paragraph.
        small And some muted small print.
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: function () {
    return {
      dashclicked: false,
      indexclicked: false,
      anonymclicked: false,
    };
  },
  methods: {
    isDashClicked: function () {
      this.dashclicked = true;
      this.indexclicked = false;
      this.anonymclicked = false;
    },
    isIndexClicked: function () {
      this.dashclicked = false;
      this.indexclicked = true;
      this.anonymclicked = false;
    },
    isAnonymClicked: function () {
      this.dashclicked = false;
      this.indexclicked = false;
      this.anonymclicked = true;
    },
  },
});
</script>
