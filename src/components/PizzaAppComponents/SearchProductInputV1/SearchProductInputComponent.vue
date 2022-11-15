<template lang="pug">
ui5-input#valueHelpInput(placeholder='Enter product' show-suggestions='')
  ui5-icon#valueHelpIcon(slot='icon' name="value-help" style="width: 100%; height: 100%;")
ui5-dialog#dialog(accessible-name='Products Value Help')
  #dialogHeader(slot='header')
    #titleBar
      h2#headerTitle Products
      ui5-button#clearButton(design='Transparent') Clear
    ui5-input#dialogSearchInput(placeholder='Search')
      ui5-icon#dialogSearchIcon(slot='icon' name='search')
  ui5-list#itemsList(no-data-text='No data')
  #footer(slot='footer')
    ui5-button#cancelButton(design='Transparent') Cancel

</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/features/InputSuggestions.js";
import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents/dist/Dialog.js";
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/List.js";
import "@ui5/webcomponents/dist/StandardListItem.js";
import "@ui5/webcomponents/dist/CustomListItem.js";
import "@ui5/webcomponents/dist/GroupHeaderListItem.js";

export default defineComponent({
  mounted: function () {
    const valueHelpInput = document.getElementById("valueHelpInput");
    const valueHelpIcon = document.getElementById("valueHelpIcon");
    const dialogSearchInput = document.getElementById("dialogSearchInput");
    const dialogSearchIcon = document.getElementById("dialogSearchIcon");
    const clearButton = document.getElementById("clearButton");
    const cancelButton = document.getElementById("cancelButton");
    const itemsList = document.getElementById("itemsList");
    const dialog = document.getElementById("dialog");

    valueHelpInput?.addEventListener("input", loadSuggestions);
    valueHelpIcon?.addEventListener("click", showDialog);
    dialogSearchInput?.addEventListener("change", loadList);
    dialogSearchIcon?.addEventListener("click", loadList);
    clearButton?.addEventListener("click", clearQuery);
    cancelButton?.addEventListener("click", closeDialog);
    itemsList?.addEventListener("item-click", handleItemClick);

    async function loadSuggestions() {
      var response = await fetch("../../../assets/Products.json");
      var products = await response.json();

      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      var query = valueHelpInput?.value.toLowerCase();
      var suggestionItems = [];

      if (query) {
        suggestionItems = products
          .filter(({ name }: any) => name.toLowerCase().indexOf(query) === 0)
          .map(({ name }: any) => name)
          .sort((a: any, b: any) => a.localeCompare(b))
          .slice(0, 10);
      }

      [].slice.call(valueHelpInput?.children, 1).forEach((item) => {
        valueHelpInput?.removeChild(item);
      });

      suggestionItems.forEach((item: any) => {
        var li = document.createElement("ui5-suggestion-item");
        // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
        li.text = item;
        valueHelpInput?.appendChild(li);
      });
    }

    function showDialog() {
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      dialogSearchInput.value = valueHelpInput?.value;
      loadList();
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      dialog?.show();
    }

    function closeDialog() {
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      dialog?.close();
    }

    async function loadList() {
      var response = await fetch("../../../assets/Products.json");
      var products = await response.json();
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      var query = dialogSearchInput?.value.toLowerCase();

      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      itemsList.innerHTML = "";

      products
        .filter(({ name }: any) => name.toLowerCase().indexOf(query) === 0)
        .sort((a: any, b: any) => a.name.localeCompare(b.name))
        .forEach((item: any) => {
          var li = document.createElement("ui5-li");
          li.innerHTML = item.name;
          // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
          li.image = item.productPicUrl;
          // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
          li.description = item.productId;

          itemsList?.appendChild(li);
        });
    }

    function handleItemClick(event: any) {
      var item = event.detail.item;
      valueHelpInput?.setAttribute("value", item.innerHTML);
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      dialog?.close();
    }

    function clearQuery() {
      dialogSearchInput?.setAttribute("value", "");
      loadList();
    }
  },
});
</script>

<style>
#titleBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#dialogHeader {
  width: 100%;
  padding: 0 1rem 0.5rem 1rem;
}

#headerTitle {
  margin-top: 1em !important;
  font-size: 1rem;
  font-weight: 900;
  font-family: "72override", var(--_ui5_popup_header_font_family);
}

#dialogSearchInput {
  width: 100%;
}

#dialogSearchIcon {
  width: 100%;
  height: 100%;
}
</style>
