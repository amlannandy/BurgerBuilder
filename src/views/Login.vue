<template>
  <div>
    <v-form>
      <v-layout class="mt-16 flex-column align-center justify-center">
        <v-col cols="12" md="4">
          <h1 class="display-1">Login</h1>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            prepend-icon="mdi-account-circle"
            label="Email Address"
            color="deep-purple darken-2"
            required
            :error="$v.email.$error"
            :error-messages="$v.email.$error ? 'Invalid Email Address' : ''"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            prepend-icon="mdi-security"
            label="Password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            color="deep-purple darken-2"
            required
            @blur="$v.password.$touch()"
            :error="$v.password.$error"
            :error-messages="
              $v.password.$error
                ? `Password must be atleast ${$v.password.$params.minLength.min} characters long`
                : ''
            "
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn :disabled="$v.$invalid" @click="login()" large color="success"
            >Login</v-btn
          >
        </v-col>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      email: '',
      password: '',
      show: false,
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
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
