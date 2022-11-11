<template lang="pug">
ui5-upload-collection#uploadCollection(mode='Delete' accessible-name='Uploaded (2)')
  .header(slot='header')
    ui5-title Uploaded (2)
    ui5-label Add new files and press to start uploading pending files:
    ui5-button#startUploading Upload Files
    .spacer
    ui5-file-uploader#fileUploader(hide-input multiple)
      ui5-button(icon='add' design='Transparent')
  ui5-upload-collection-item(file-name='LaptopHT-1000.jpg' type="Detail" file-name-clickable='' upload-state='Complete')
    img(src='' slot='thumbnail')
    | &#x9;&#x9;Uploaded By: David Keane &middot; Uploaded On: 2014-07-26 &middot; File Size: 35 KB
  ui5-upload-collection-item(file-name='Notes.txt' type="Detail" upload-state='Complete')
    ui5-icon(name='document-text' slot='thumbnail')
    | &#x9;&#x9;Uploaded By: John Smith &middot; Uploaded On: 2014-09-02 &middot; File Size: 226.6 KB &middot;

</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@ui5/webcomponents-fiori/dist/UploadCollection.js";
import "@ui5/webcomponents-fiori/dist/UploadCollectionItem.js";
import "@ui5/webcomponents/dist/FileUploader.js";

export default defineComponent({
  mounted: function () {
    const uploadCollection = document.getElementById("uploadCollection");
    const fileUploader = document.getElementById("fileUploader");
    const startUploading = document.getElementById("startUploading");

    const createThumbnail = (fileName: any) => {
      const icon = document.createElement("ui5-icon");
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      icon.name = "document";
      icon.slot = "thumbnail";
      return icon;
    };

    const createUCI = (file: any) => {
      const uci = document.createElement("ui5-upload-collection-item");
      const description = document.createTextNode(
        "Last modified: " +
          file.lastModifiedDate +
          ", size: " +
          file.size +
          "KB"
      );

      uci.appendChild(createThumbnail(file.name));
      uci.appendChild(description);
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      uci.file = file;
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      uci.fileName = file.name;
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      uci.type = "Detail";
      return uci;
    };

    fileUploader?.addEventListener("change", (event) => {
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      const files = event.detail.files;

      for (let i = 0; i < files.length; i++) {
        uploadCollection?.appendChild(createUCI(files[i]));
      }
    });

    startUploading?.addEventListener("click", (event) => {
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      uploadCollection?.items.forEach((item: any) => {
        // if there is a file ready to be uploaded send request
        if (item.uploadState === "Ready" && item.file) {
          item.uploadState = "Uploading";
          item.progress = 100;
          const oXHR = new XMLHttpRequest();
          oXHR.open("POST", "https://localhost:44376/login", true);
          oXHR.onreadystatechange = function () {
            if (this.status !== 200) {
              item.uploadState = "Error";
            }
          };
          //oXHR.send(item.file);
          setTimeout(() => {
            item.uploadState = "Complete";
          }, 2300);
        }
      });
    });

    uploadCollection?.addEventListener("drop", (event) => {
      event.preventDefault();
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      const files = event.dataTransfer.files;

      // Take the files from the drop event and create <ui5-upload-collection-item> from them
      for (let i = 0; i < files.length; i++) {
        const uci = createUCI(files[i]);
        uploadCollection.appendChild(uci);
      }
    });

    uploadCollection?.addEventListener("ui5-item-delete", (event) => {
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      uploadCollection.removeChild(event.detail.item);
    });
  },
});
</script>

<style>
.snipp {
  width: 80%;
  margin: auto;
  margin-top: 2em;
  padding: 1rem 1.5rem;
  border: 0.0625rem solid #c1c1c1;
  border-bottom: none;
  background-color: var(--sapBackgroundColor);
}

.header > * {
  margin: 4px;
}

.spacer {
  flex: 1 1 auto;
}

.header {
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
}
</style>
