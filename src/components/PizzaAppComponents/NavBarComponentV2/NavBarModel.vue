<template lang="pug">
.snippet
  ui5-shellbar#shellbar(primary-title='Corporate Portal' secondary-title='secondary title' notifications-count='99+' show-notifications='' show-product-switch='' show-co-pilot='')
    ui5-avatar(slot='profile')
      img(src='../../../../public/img/icons/android-chrome-maskable-192x192.png')
    img(slot='logo' src='../../../../public/img/icons/android-chrome-maskable-192x192.png')
    ui5-button(icon='nav-back' slot='startButton')
    ui5-shellbar-item#disc(icon='disconnected' text='Disconnect')
    ui5-shellbar-item#call(icon='incoming-call' text='Incoming Calls' count='4')
    ui5-input(slot='searchField')
    ui5-li(slot='menuItems') Application 1
    ui5-li(slot='menuItems') Application 2
    ui5-li(slot='menuItems') Application 3
    ui5-li(slot='menuItems') Application 4
    ui5-li(slot='menuItems') Application 5
  ui5-popover#popover(placement-type='Bottom')
    .popover-header
      ui5-title(style='padding: 0.25rem 1rem 0rem 1rem') An Kimura
    .popover-content
      ui5-list(separators='None')
        ui5-li(icon='sys-find') App Finder
        ui5-li(icon='settings') Settings
        ui5-li(icon='edit') Edit Home Page
        ui5-li(icon='sys-help') Help
        ui5-li(icon='log') Sign out
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@ui5/webcomponents-fiori/dist/ShellBar.js";
import "@ui5/webcomponents-fiori/dist/ShellBarItem.js";
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents-base/dist/features/F6Navigation.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

export default defineComponent({});
</script>
