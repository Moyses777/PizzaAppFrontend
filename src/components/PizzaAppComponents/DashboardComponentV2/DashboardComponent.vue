<template lang="pug">
ui5-flexible-column-layout#fcl 
  
  div(slot='startColumn')
    ui5-shellbar(primary-title='Dep. New York, USA')
    ui5-list#col1list(header-text='Employees')
      ui5-li(description="HT-2001" icon="slim-arrow-right" icon-end="" additional-text="47.00 EUR" ui5-li="10 ich portable" actionable="" has-title="10 ich portable" _mode="SingleSelect" has-border="" selected="") 10 ich portable
      ui5-li(description="HT-2001" icon="slim-arrow-right" icon-end="" additional-text="27.00 EUR" ui5-li="" actionable="" has-title="" _mode="SingleSelect" has-border="" selected="") 5 ich telephone

  div(slot='midColumn')
    .colHeader
      ui5-button(design='Emphasized') Edit
      ui5-button(design='Transparent' icon='add')
      ui5-button#fullscreenMidColumn(design='Transparent' icon='full-screen')
      ui5-button#closeMidColumn(icon='decline' design='Transparent')
    ui5-list#col2list(header-text='Employees')
      ui5-li 10 ich portable

  div(slot='endColumn')
    .colHeader
      ui5-button(design='Emphasized') Edit
      ui5-button(design='Transparent' icon='add')
      ui5-button#fullscreenEndColumn(design='Transparent' icon='full-screen')
      ui5-button#closeEndColumn(icon='decline' design='Transparent')
    p
      | &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...&quot;

</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js";

export default defineComponent({
  mounted: function () {
    const fcl = document.getElementById("fcl");
    const col1list = document.getElementById("col1list");
    const col2list = document.getElementById("col2list");
    const closeMidColumn = document.getElementById("closeMidColumn");
    const fullscreenMidColumn = document.getElementById("fullscreenMidColumn");
    const fullscreenEndColumn = document.getElementById("fullscreenEndColumn");
    const closeEndColumn = document.getElementById("closeEndColumn");

    col1list?.addEventListener("item-click", function (e) {
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      fcl.layout = "TwoColumnsMidExpanded";
    });

    col2list?.addEventListener("item-click", function (e) {
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      fcl.layout = "ThreeColumnsEndExpanded";
    });

    closeMidColumn?.addEventListener("click", function (e) {
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      fcl.layout = "OneColumn";
    });
    fullscreenMidColumn?.addEventListener("click", function (e) {
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      fcl.layout = "MidColumnFullScreen";
    });

    fullscreenEndColumn?.addEventListener("click", function (e) {
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      fcl.layout = "EndColumnFullScreen";
    });

    closeEndColumn?.addEventListener("click", function (e) {
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      fcl.layout = "TwoColumnsMidExpanded";
    });
    // console.log(store.state.user.Email);
  },
});
</script>

<style>
#fcl {
  width: 90%;
  margin: auto;
  margin-top: 2em;
}
</style>
