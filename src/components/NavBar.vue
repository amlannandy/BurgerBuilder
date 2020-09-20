
<template>
  <v-card>
    <v-tabs background-color="deep-purple accent-4" centered dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab to="/">
        Home
        <v-icon>mdi-home</v-icon>
      </v-tab>

      <v-tab v-if="isAuthenticated" to="/favorites">
        Favorites
        <v-icon>mdi-heart</v-icon>
      </v-tab>

      <v-tab v-if="isAuthenticated" to="/orders">
        Orders
        <v-icon>mdi-shopping</v-icon>
      </v-tab>

      <v-tab v-if="isAuthenticated" to="/account">
        Account
        <v-icon>mdi-account-circle</v-icon>
      </v-tab>

      <v-tab v-if="!isAuthenticated" to="/register">
        Register
        <v-icon>mdi-account-plus-outline</v-icon>
      </v-tab>

      <v-tab v-if="!isAuthenticated" to="/login">
        Login
        <v-icon>mdi-account</v-icon>
      </v-tab>
    </v-tabs>

    <!-- <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>-->
  </v-card>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.getAuthStatus;
    },
  },
};
</script>