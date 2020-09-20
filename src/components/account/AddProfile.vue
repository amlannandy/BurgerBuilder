<template>
  <div>
    <h1 class="display-1 mb-5">Update Profile</h1>
    <v-col>
      <v-text-field
        v-model="name"
        prepend-icon="mdi-account-circle"
        label="Your Name"
        color="deep-purple darken-2"
        required
        :error="$v.name.$error"
        :error-messages="$v.name.$error ? 'Please enter your Name' : ''"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="phone"
        prepend-icon="mdi-phone"
        label="Your Phone Number"
        color="deep-purple darken-2"
        required
        :error="$v.phone.$error"
        :error-messages="$v.phone.$error ? 'Invalid Phone Number' : ''"
        @blur="$v.phone.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="line1"
        prepend-icon="mdi-home"
        label="Address Line 1"
        color="deep-purple darken-2"
        required
        :error="$v.line1.$error"
        :error-messages="$v.line1.$error ? 'Please enter your Line 1 Address' : ''"
        @blur="$v.line1.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="line2"
        prepend-icon="mdi-home-outline"
        label="Address Line 2"
        color="deep-purple darken-2"
        required
        :error="$v.line2.$error"
        :error-messages="$v.line2.$error ? 'Please enter your Line 2 Address' : ''"
        @blur="$v.line2.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="pincode"
        prepend-icon="mdi-pin"
        label="Pin Code"
        color="deep-purple darken-2"
        required
        :error="$v.pincode.$error"
        :error-messages="$v.pincode.$error ? 'Please enter your Pin Code' : ''"
        @blur="$v.pincode.$touch()"
      ></v-text-field>
    </v-col>
    <v-btn :disabled="$v.$invalid" @click="addProfile()" color="success">Update</v-btn>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      name: "",
      phone: "",
      line1: "",
      line2: "",
      pincode: "",
    };
  },
  methods: {
    addProfile() {
      const profile = {
        name: this.name,
        phone: this.phone,
        address: this.line1 + " " + this.line2,
        pincode: this.pincode,
      };
      this.$store.dispatch("addProfile", profile);
    },
  },
  validations: {
    name: {
      required: required,
    },
    phone: {
      required: required,
      maxLength: maxLength(10),
      minLength: minLength(10),
    },
    line1: {
      required: required,
    },
    line2: {
      required: required,
    },
    pincode: {
      required: required,
    },
  },
};
</script>