<template lang="pug">
.snippet
  ui5-shellbar#shellbar(primary-title='Corporate Portal' secondary-title='secondary title' notifications-count='99+' show-co-pilot='')
    ui5-avatar(slot='profile' id="profile")
      img(src='../../../../public/img/icons/android-chrome-maskable-192x192.png')
    img(slot='logo' src='../../../../public/img/icons/android-chrome-maskable-192x192.png')
    ui5-button#startButton(icon='menu' slot='startButton' @click="sliderbarshow")
    ui5-shellbar-item#disc(icon='disconnected' text='Disconnect' v-if="!isLogged")
    ui5-shellbar-item#call(icon='incoming-call' text='Incoming Calls' count='4' v-if="!isLogged")
    ui5-input(slot='searchField')
    ui5-li(slot='menuItems') Ventas
    ui5-li(slot='menuItems') Credito
    ui5-li(slot='menuItems') Ventas Mayoreo
    ui5-li(slot='menuItems') Credito Mayoreo
    ui5-li(slot='menuItems') Compras

  ui5-side-navigation#slidebar(v-if="!isLogged")
    ui5-side-navigation-item(text='Home' icon='home' @click="toHome")
    ui5-side-navigation-item(text='Products' expanded='' icon='group')
      ui5-side-navigation-sub-item(text='Upload new product' @click="toUploadFile")
      ui5-side-navigation-sub-item(text='From Other Teams')
    ui5-side-navigation-item(text='Locations' icon='locate-me' selected='')
    ui5-side-navigation-item(text='Events' icon='calendar')
      ui5-side-navigation-sub-item(text='Local')
      ui5-side-navigation-sub-item(text='Others')
    ui5-side-navigation-item(slot='fixedItems' text='Useful Links' icon='chain-link')
    ui5-side-navigation-item(slot='fixedItems' text='History' icon='history')

  ui5-popover#notificationsPopover(style='max-width: 400px' placement-type='Bottom' horizontal-align='Right')
    ui5-list(header-text='Notifications')
      ui5-li-notification(show-close='' title-text='New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.')
        | And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
        ui5-avatar(size='XS' slot='avatar')
          img(src='../../../../public/img/icons/android-chrome-maskable-192x192.png')
        span(slot='footnotes') John Doe
        span(slot='footnotes') 2 Days
        ui5-notification-action#acceptBtnInPopover(icon='accept' text='Accept' slot='actions')
        ui5-notification-action#rejectBtnInPopover(icon='message-error' text='Reject' slot='actions')
      ui5-li-notification(show-close='' priority='Low' title-text='New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.')
        | And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
        ui5-avatar(size='XS' slot='avatar')
          img(src='../../../../public/img/icons/android-chrome-maskable-192x192.png')
        span(slot='footnotes') Monique Legrand
        span(slot='footnotes') 2 Days
        ui5-notification-action#acceptBtnInPopover(icon='accept' text='Accept' slot='actions')
        ui5-notification-action#rejectBtnInPopover(icon='message-error' text='Reject' slot='actions')

  ui5-popover#CallPopover(style='max-width: 400px' placement-type='Bottom' horizontal-align='Right')
    ui5-list(header-text='Telephonic Calls')
      ui5-li-notification(show-close='' title-text='New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.')
        | And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
        ui5-avatar(size='XS' slot='avatar')
          img(src='../../../../public/img/icons/android-chrome-maskable-192x192.png')
        span(slot='footnotes') John Doe
        span(slot='footnotes') 2 Days
        ui5-notification-action#acceptBtnInPopover(icon='accept' text='Accept' slot='actions')
        ui5-notification-action#rejectBtnInPopover(icon='message-error' text='Reject' slot='actions')
      ui5-li-notification(show-close='' priority='Low' title-text='New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.')
        | And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
        ui5-avatar(size='XS' slot='avatar')
          img(src='../../../../public/img/icons/android-chrome-maskable-192x192.png')
        span(slot='footnotes') Monique Legrand
        span(slot='footnotes') 2 Days
        ui5-notification-action#acceptBtnInPopover(icon='accept' text='Accept' slot='actions')
        ui5-notification-action#rejectBtnInPopover(icon='message-error' text='Reject' slot='actions')
  
  ui5-popover#productswitch-popover(placement-type='Bottom')
    ui5-product-switch
      ui5-product-switch-item(title-text='Home' subtitle-text='Central Home' icon='home')
      ui5-product-switch-item(title-text='Analytics Cloud' subtitle-text='Analytics Cloud' icon='business-objects-experience')
      ui5-product-switch-item(title-text='Catalog' subtitle-text='Ariba' icon='contacts')
      ui5-product-switch-item(title-text='Guided Buying' icon='credit-card')
      ui5-product-switch-item(title-text='Strategic Procurement' icon='cart-3')
      ui5-product-switch-item(title-text='Travel & Expense' subtitle-text='Concur' icon='flight')
      ui5-product-switch-item(title-text='Vendor Management' subtitle-text='Fieldglass' icon='shipping-status')
      ui5-product-switch-item(title-text='Human Capital Management' icon='customer')
      ui5-product-switch-item(title-text='Sales Cloud' subtitle-text='Sales Cloud' icon='sales-notification')
      ui5-product-switch-item(title-text='Commerce Cloud' subtitle-text='Commerce Cloud' icon='retail-store')
      ui5-product-switch-item(title-text='Marketing Cloud' subtitle-text='Marketing Cloud' icon='marketing-campaign')
      ui5-product-switch-item(title-text='Service Cloud' icon='family-care')
      ui5-product-switch-item(title-text='Customer Data Cloud' icon='customer-briefing')
      ui5-product-switch-item(title-text='S/4HANA' icon='batch-payments')

  ui5-popover#popover(placement-type='Bottom')
    .popover-header
      ui5-title(style='padding: 0.25rem 1rem 0rem 1rem; font-size: 18px;') Opciones del sistema: 
    .popover-content
      ui5-list(separators='None')
        ui5-li(icon='sap-icon://account' v-if="isLogged" @click="toLogin") Iniciar Sesión
        ui5-li(icon='sap-icon://add-employee' v-if="isLogged" @click="toRegister") Registrarse
        ui5-li(icon='sys-find' v-if="!isLogged") App Finder
        ui5-li(icon='settings' v-if="!isLogged") Settings
        ui5-li(icon='edit' v-if="!isLogged") Edit Home Page
        ui5-li(icon='sys-help' v-if="!isLogged") Help
        ui5-li(icon='log' v-if="!isLogged" @click="toLogout") Sign out
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router/index";
import store from "@/store/index";
import "@ui5/webcomponents-fiori/dist/ShellBar.js";
import "@ui5/webcomponents-fiori/dist/ShellBarItem.js";
import "@ui5/webcomponents/dist/Popover.js";
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents-base/dist/features/F6Navigation.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-fiori/dist/SideNavigation.js";
import "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";
import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";
import "@ui5/webcomponents-fiori/dist/NotificationListItem.js";
import "@ui5/webcomponents-fiori/dist/NotificationAction.js";
import "@ui5/webcomponents-fiori/dist/ProductSwitch.js";
import "@ui5/webcomponents-fiori/dist/ProductSwitchItem.js";

export default defineComponent({
  data: function () {
    return {
      isLogged: store.state.user.name == "",
    };
  },
  mounted: function () {
    const shellbar = document.getElementById("shellbar");
    shellbar?.addEventListener("profile-click", function (event) {
      const popover = document.getElementById("popover");
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      popover?.showAt(event.detail.targetRef);
    });

    shellbar?.addEventListener("notifications-click", function (event) {
      const PopoverNotifications = document.getElementById(
        "notificationsPopover"
      );
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      PopoverNotifications?.showAt(event.detail.targetRef);
    });

    const calls = document.getElementById("call");
    calls?.addEventListener("click", function (event) {
      const PopoverNotifications = document.getElementById("CallPopover");
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      PopoverNotifications?.showAt(event.detail.targetRef);
    });

    shellbar?.addEventListener("product-switch-click", function (event) {
      const popoverproduct = document.getElementById("productswitch-popover");
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      if (popoverproduct?.opened) {
        // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
        popoverproduct?.close();
        return;
      }
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      popoverproduct?.showAt(event.detail.targetRef);
    });
  },
  methods: {
    sliderbarshow: function () {
      const slider = document.querySelector("#slidebar");
      if (slider?.hasAttribute("collapsed")) {
        slider.removeAttribute("collapsed");
        return;
      }
      slider?.setAttribute("collapsed", "");
    },
    toLogin: function () {
      router.push("/login");
    },
    toRegister: function () {
      router.push("/register");
    },
    toLogout: function () {
      store.commit("CloseSession");
      router.push("/login");
    },
    toHome: function () {
      router.push("/dashboard");
    },
    toUploadFile: function () {
      router.push("/dashboard/index");
    },
  },
  watch: {
    $route: function (to, from) {
      this.isLogged = store.state.user.name == "";
      const shellbar = document.getElementById("shellbar");
      !this.isLogged
        ? shellbar?.setAttribute("show-notifications", "")
        : shellbar?.removeAttribute("show-notifications");
      !this.isLogged
        ? shellbar?.setAttribute("show-product-switch", "")
        : shellbar?.removeAttribute("show-product-switch");

      const calls = document.getElementById("call");
      calls?.addEventListener("click", function (event) {
        const PopoverNotifications = document.getElementById("CallPopover");
        // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
        PopoverNotifications?.showAt(event.detail.targetRef);
      });
    },
  },
});
</script>

<style>
ui5-shellbar::part(root) {
  padding-left: 0.5rem !important;
}

#slidebar {
  position: absolute !important;
  display: block !important;
  background: white;
  z-index: 1;
}
</style>
