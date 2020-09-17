<template>
  <div>
    <v-form>
      <v-layout class="mt-16 flex-column align-center justify-center">
        <v-col cols="12" md="4">
          <h1 class="display-1">Register</h1>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="email" label="Email Address" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="password" label="Password" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="confirmPassword" label="Confirm Password" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn large color="success">Register</v-btn>
        </v-col>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
};
</script>