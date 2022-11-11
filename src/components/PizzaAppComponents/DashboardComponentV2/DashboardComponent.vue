<template lang="pug">
ui5-flexible-column-layout#fcl 
  
  div(slot='startColumn')
    ui5-shellbar(primary-title='Dep. New York, USA')
    ui5-list#col1list(header-text='Employees')
      ui5-li(id="112" title="10 ich portable" description="HQ-2002" icon="slim-arrow-right" icon-end="" price="47.00 EUR" additional-text="47.00 EUR" ui5-li="10 ich portable" actionable="" has-title="10 ich portable" _mode="SingleSelect" has-border="" selected="") 10 ich portable
      ui5-li(id="113" description="HT-2001" title="5 ich telephone" icon="slim-arrow-right" icon-end="" price="27.00 EUR" additional-text="27.00 EUR" ui5-li="" actionable="" has-title="" _mode="SingleSelect" has-border="" selected="") 5 ich telephone

  div(slot='midColumn')
    .colHeader
      div
        ui5-button(design='Emphasized') Edit
        ui5-button(design='Transparent' icon='add')
        ui5-button#fullscreenMidColumn(design='Transparent' icon='full-screen')
        ui5-button#closeMidColumn(icon='decline' design='Transparent')
      div
        h3 {{ changeF.name }}
    h5(style="padding: 1em;") General Information 
    div(style='padding: 1em; display:flex; flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap')
      div(style='display:flex; flex-direction: row; align-items: center;')
        ui5-avatar#avatar(icon='iphone' color-scheme='Accent5' size='XL' style='margin: 0 1rem; min-width: 7rem;' ui5-avatar='')
        div
          .productInfo
            ui5-title(level='H5' ui5-title='') Product:
            ui5-title#lblName(level='H5' ui5-title='')
              b {{ changeF.name }}
          br
          .productInfo
            ui5-title(level='H5' ui5-title='') Description:
            ui5-title#lblDesc(level='H5' ui5-title='')
              b {{ changeF.description }}
          br
          .productInfo
            ui5-title(level='H5' ui5-title='') Precio:
            ui5-title#lblSupplier(level='H5' ui5-title='')
              b {{ changeF.price }}
      .productInfo(style='align-self: start')
        ui5-title(level='H5' ui5-title='') Rating:
        ui5-rating-indicator#productRating(accessible-name='Hello World' ui5-rating-indicator='' :value="3.5")
      span
    
    ui5-list#col2list(header-text='similar products')
      ui5-li 20 ich portable

  div(slot='endColumn')
    .colHeader
      div
        ui5-button(design='Emphasized') Edit
        ui5-button(design='Transparent' icon='add')
        ui5-button#fullscreenEndColumn(design='Transparent' icon='full-screen')
        ui5-button#closeEndColumn(icon='decline' design='Transparent')
    ui5-tabcontainer.full-width
      ui5-tab(text='125 products')
      ui5-tab(icon="menu" text='Tab 1')
        ui5-label
          | Quibusdam, veniam! Architecto debitis iusto ad et, asperiores quisquam perferendis reprehenderit ipsa voluptate minus minima, perspiciatis cum. Totam harum necessitatibus numquam voluptatum.
      ui5-tab(icon='activities' text='Tab 2' selected='')
        ui5-label
          | Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni facere error dicta beatae optio repudiandae vero, quidem voluptatibus perferendis eum maiores rem tempore voluptates aperiam eos enim delectus unde.
      ui5-tab(icon='add' text='Tab 3')
        ui5-label
          | Dignissimos debitis architecto temporibus doloribus reiciendis libero rem nemo, nobis quidem dolor praesentium, beatae voluptatum iste eveniet, nam voluptatem obcaecati ducimus dolore.
      ui5-tab(icon='calendar' text='Tab 4')
        ui5-label
          | Possimus ipsa eos impedit aut nisi repellendus recusandae, temporibus ducimus, necessitatibus tenetur facere, minima vero fugit rem reiciendis natus ratione quia numquam?
      ui5-tab(icon='action-settings' text='Tab 5')
        ui5-label
          | Explicabo laboriosam ab consequuntur, qui dignissimos inventore sapiente ullam quaerat ratione libero vero, beatae laudantium! Aperiam numquam tempore, laudantium perferendis recusandae autem.
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index";
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents/dist/RatingIndicator.js";
import "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/TabSeparator";

export default defineComponent({
  data: function () {
    return {
      Employees: store.state.itempage.name,
    };
  },
  computed: {
    changeF: function () {
      return store.state.itempage;
    },
  },
  mounted: function () {
    const fcl = document.getElementById("fcl");
    const col1list = document.getElementById("col1list");
    const col2list = document.getElementById("col2list");
    const closeMidColumn = document.getElementById("closeMidColumn");
    const fullscreenMidColumn = document.getElementById("fullscreenMidColumn");
    const fullscreenEndColumn = document.getElementById("fullscreenEndColumn");
    const closeEndColumn = document.getElementById("closeEndColumn");

    col1list?.addEventListener("click", function (e) {
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      fcl.layout = "TwoColumnsMidExpanded";
      store.commit("changeItemPage", {
        // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
        name: e.target.title,
        // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
        description: e.target.description,
        // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
        price: e.target.getAttribute("price"),
        rating: "",
      });
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

.colHeader {
  display: flex;
  padding: 0.5em;
  align-items: center;
  flex-direction: row-reverse;
  background: white;
  margin: 0.8em;
  justify-content: space-between;
}

.ui5-fcl-root {
  height: 95vh !important;
}
</style>
