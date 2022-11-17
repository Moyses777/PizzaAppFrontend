<template lang="pug">
form.row.g-3.formregister
  .col-md-6
    ui5-label.form-label(for='inputEmail4' required show-colon) Nombre
    ui5-input#inputEmail4.form-control(type='Text' :class="{'inputError': isName}" show-clear-icon :value="txtName" @input="txtName = $event.target.value" @keyup="validateName")
    span(:class="{'spanError': isName}" v-if="isName") El nombre es corto!!!
  .col-md-6
    ui5-label.form-label(for='inputPassword4' required show-colon ) Password
    ui5-input#inputPassword4.form-control(type='Password' :class="{'inputError': isPassword}" show-clear-icon :value="txtPassword" @input="txtPassword = $event.target.value" @keyup="validatePassword")
    span(:class="{'spanError': isPassword}", v-if="isPassword") La contraseña es muy corta!!!
  .col-12
    .form-check
      ui5-checkbox(value-state="Information" text="Check me out" :checked="isChecked" :value="isChecked" @change="isChecked = !isChecked")
  .col-12.center
    ui5-button.btnsize(design="Default" @click="loginUser") Submit
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Notifications } from "@/tools/Utilities";
import router from "@/router/index";
import store from "@/store/index";
import "@ui5/webcomponents/dist/features/InputSuggestions.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/Button.js";
import UserService from "@/services/UserService";

export default defineComponent({
  data: function () {
    return {
      txtName: "",
      txtPassword: "",
      isName: false,
      isPassword: false,
      isChecked: false,
    };
  },
  methods: {
    /**
     * validate input name to be longer than 5 characters
     */
    validateName: function () {
      if (this.txtName == "") {
        this.isName = false;
        return;
      }
      this.isName = this.txtName.length < 5;
    },
    /**
     * validate input password to be longer than 5 characters
     */
    validatePassword: function () {
      this.isPassword = this.txtPassword.length < 5;
    },
    /**
     * This function validate if are correct inputs and if are not null
     * also it will call the class and method notification with the call to
     * the API and finally clean the inputs if it was wrong or redirect if was ok.
     */
    loginUser: async function () {
      if (this.isChecked) {
        if (!this.isName && !this.isPassword) {
          if (this.txtName != "" && this.txtPassword != "") {
            const Service = new UserService({
              Name: this.txtName,
              Password: this.txtPassword,
            });
            const response = await Notifications.ShowSessionLoadingMessage(
              Service.loginUser(),
              "Se ha logeado exitosamente!!!",
              "Nombre o Contraseña incorrectos!!!"
            );
            if (response) {
              store.commit("LoginSession", {
                name: this.txtName,
              });
              router.push("/dashboard");
            }
            this.txtName = "";
            this.txtPassword = "";
          }
        }
      }
    },
  },
});
</script>
