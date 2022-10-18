<template lang="pug">
form.row.g-3.formregister
    .col-md-6
      ui5-label.form-label(for='inputEmail4' required show-colon) Nombre
      ui5-input#inputName.form-control(type='Text' :class="{'inputError': isName}" show-clear-icon :value="txtName" @input="txtName = $event.target.value" @keyup="validateName()")
      span(:class="{'spanError': isName}" v-if="isName") Nombre muy corto!!!
    .col-md-6
      ui5-label.form-label(for='inputEmail4' required show-colon) Apellido
      ui5-input#inputLastname.form-control(type='Text' :class="{'inputError': isLastname}" show-clear-icon :value="txtLastname" @input="txtLastname = $event.target.value" @keyup="validateLastname()")
      span(:class="{'spanError': isLastname}" v-if="isLastname") Apellido muy corto!!!
    .col-md-6
      ui5-label.form-label(for='inputPassword4' required show-colon ) Contraseña
      ui5-input#inputPassword4.form-control(type='Password' :class="{'inputError': isPassword}" show-clear-icon :value="txtPassword" @input="txtPassword = $event.target.value" @keyup="validatePassword()")
      span(:class="{'spanError': isPassword}", v-if="isPassword") La contraseña es muy corta!!!
    .col-md-6
      ui5-label.form-label(for='inputAddress' required show-colon) Telefono
      ui5-input#inputAddress.form-control(type='Text' :class="{'inputError': isTelephone}" placeholder='1234 Main St' show-clear-icon :value="txtTelephone" @input="txtTelephone = $event.target.value" @keyup="validateTelephone()")
      span(:class="{'spanError': isTelephone}" v-if="isTelephone") Telefono ingresado incorrectamente!!!
    .col-12
      ui5-label.form-label(for='inputAddress2' required show-colon) Direccion
      ui5-input#inputAddress2.form-control(type='Text' :class="{'inputError': isAddress}" placeholder='Apartment, studio, or floor' show-clear-icon :value="txtAddress" @input="txtAddress = $event.target.value" @keyup="validateAddress()")
      span(:class="{'spanError': isAddress}", v-if="isAddress") Direccion muy corta o incompleta!!!
    .col-md-5
      ui5-label.form-label(for='inputCity' required show-colon) Ciudad
      ui5-input#inputCity.form-control(type='Text' :class="{'inputError': isCity}" show-suggestions show-clear-icon :value="txtCity" @input="txtCity = $event.target.value" @keyup="validateCity()")
      span(:class="{'spanError': isCity}" v-if="isCity") Campo ciudad incompleta!!!
    .col-md-3
      ui5-label.form-label(for='inputState' required show-colon) Estado
      ui5-select#inputState(:value="txtState" :class="{'inputError': isState}" @change="txtState = $event.detail.selectedOption.value" @blur="validateState()")
        ui5-option(selected) Choose...
        ui5-option(additional-text="JAL" value="JALISCO") JALISCO
      span(:class="{'spanError': isState}" v-if="isState") No seleccionaste un estado!!!
    .col-md-2
      ui5-label.form-label(for='inputZip' required show-colon) Codigo Postal
      ui5-input#inputZip.form-control(type='Number' :class="{'inputError': isZip}" show-clear-icon :value="txtZip" @input="txtZip = $event.target.value" @keyup="validateZip()")
      span(:class="{'spanError': isZip}" v-if="isZip") Zip incorrecto!!!
    .col-12
      .form-check
        ui5-checkbox(value-state="Information" text="Check me out" :checked="isChecked" :value="isChecked" @change="isChecked = !isChecked")
    .col-12.center
      ui5-button.btnsize(design="Default" @click="registerUser") Submit
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index";
import { Notifications } from "@/tools/Utilities";
import "@ui5/webcomponents/dist/features/InputSuggestions.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/CheckBox.js";
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Select.js";

export default defineComponent({
  data: function () {
    return {
      txtName: "",
      txtLastname: "",
      txtPassword: "",
      txtTelephone: "",
      txtAddress: "",
      txtCity: "",
      txtState: "",
      txtZip: 0,
      isChecked: false,
      isName: false,
      isLastname: false,
      isPassword: false,
      isTelephone: false,
      isAddress: false,
      isCity: false,
      isState: false,
      isZip: false,
    };
  },
  methods: {
    registerUser: async function () {
      if (this.isChecked) {
        if (
          !this.isName &&
          !this.isLastname &&
          !this.isPassword &&
          !this.isTelephone &&
          !this.isAddress &&
          !this.isCity &&
          !this.isState &&
          !this.isZip
        ) {
          if (
            this.txtName != "" &&
            this.txtLastname != "" &&
            this.txtPassword != "" &&
            this.txtTelephone != "" &&
            this.txtAddress != "" &&
            this.txtCity != "" &&
            this.txtState != "" &&
            this.txtZip != 0
          ) {
            let notification = new Notifications();
            // store.commit("AddUserRegistered", {
            //   Email: this.txtEmail,
            //   Password: this.txtPassword,
            // });
            try {
              await Notifications.ShowSessionLoadingMessage(
                fetch("https://localhost:44376/register", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json;charset=utf-8",
                  },
                  body: JSON.stringify({
                    id: 1,
                    name: this.txtName,
                    lastname: this.txtLastname,
                    password: this.txtPassword,
                    telephone: this.txtTelephone,
                    rangePermitions: 1,
                  }),
                })
              );
              this.txtName = "";
              this.txtLastname = "";
              this.txtPassword = "";
              this.txtTelephone = "";
              this.txtAddress = "";
              this.txtCity = "";
              this.txtState = "";
              this.txtZip = 0;
              this.isChecked = false;
            } catch (Exception) {
              alert(
                "Hubo algun error en la petición, llama al area de sistemas"
              );
              console.error(
                Exception + " - Error en RegisterModuleCP - line 100 to 200"
              );
            }
          }
        }
      }
    },
    validateName: function () {
      if (this.txtName == "") {
        this.isName = false;
        return;
      }
      this.isName = this.txtName.length < 4;
    },
    validateLastname: function () {
      if (this.txtLastname == "") {
        this.isLastname = false;
        return;
      }
      this.isLastname = this.txtLastname.length < 4;
    },
    validatePassword: function () {
      this.isPassword = this.txtPassword.length < 5;
    },
    validateTelephone: function () {
      this.isTelephone = this.txtTelephone.length != 10;
    },
    validateAddress: function () {
      this.isAddress = this.txtAddress.length < 8;
    },
    validateCity: function () {
      this.isCity = this.txtCity.length < 4;
    },
    validateZip: function () {
      this.isZip = this.txtZip.toString().length < 4;
    },
    validateState: function () {
      this.isState = this.txtState.length < 2;
    },
  },
});
</script>

<style>
.btnsize {
  width: 8em;
}
.formregister {
  width: 80%;
  margin: auto;
  padding: 5em;
  border: black 1px solid;
  border-radius: 50px;
  box-shadow: black 3px 3px 3px;
  margin-top: 2em;
  margin-bottom: 2em;
}
.form-control {
  padding: 0 !important;
}
.center {
  display: flex;
  justify-content: center;
}
.inputError {
  border: red 1px solid;
}
.spanError {
  color: red;
}
</style>
