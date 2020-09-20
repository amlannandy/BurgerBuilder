<template>
  <div>
    <v-form>
      <v-layout class="mt-16 flex-column align-center justify-center">
        <v-col cols="12" md="4">
          <h1 class="display-1">Register</h1>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            prepend-icon="mdi-account-circle"
            label="Email Address"
            color="deep-purple darken-2"
            required
            @blur="$v.email.$touch()"
            :error="$v.email.$error"
            :error-messages="$v.email.$error ? 'Invalid Email Address' : ''"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            prepend-icon="mdi-security"
            label="Password"
            color="deep-purple darken-2"
            required
            @blur="$v.password.$touch()"
            :error="$v.password.$error"
            :error-messages="
              $v.password.$error
                ? `Password must be atleast ${$v.password.$params.minLength.min} characters long`
                : ''
            "
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="confirmPassword"
            prepend-icon="mdi-security"
            label="Confirm Password"
            color="deep-purple darken-2"
            required
            @blur="$v.confirmPassword.$touch()"
            :error="$v.confirmPassword.$error"
            :error-messages="
              $v.confirmPassword.$error ? `Passwords don\'t match` : ''
            "
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn :disabled="$v.$invalid" @click="login()" large color="success"
            >Register</v-btn
          >
        </v-col>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      show1: false,
      show2: false,
    };
  },
  validations: {
    email: {
      required: required,
      email: email,
    },
    password: {
      required: required,
      minLength: minLength(6),
    },
    confirmPassword: {
      sameAs: sameAs('password'),
    },
  },
  methods: {
    login() {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
