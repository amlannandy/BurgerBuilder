<template>
  <div>
    <div v-if="loading">
      <img src="../../assets/spinner.gif" alt />
    </div>
    <div v-else>
      <div v-if="profile">
        <h1>Profile Present</h1>
      </div>
      <v-card class="py-5 px-5" v-else>
        <h1 class="display-1">Profile Empty</h1>
        <p class="my-3">You haven't completed your Profile yet</p>
        <v-card-actions>
          <v-btn class="px-3" :to="{ name: 'add-profile' }" color="success">Add Profile</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <v-divider class="my-5"></v-divider>
    <v-row>
      <v-btn @click="logout()" class="mr-5" color="warning">Log out</v-btn>
      <v-btn @click="logout()" color="error">Delete Account</v-btn>
    </v-row>
  </div>
</template>

<script>
import Addresses from "./Addresses";
export default {
  components: {
    addresses: Addresses,
  },
  methods: {
    addProfile() {
      this.$router.push("add-profile");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    profile() {
      return this.$store.getters.getProfile;
    },
    loading() {
      return this.$store.getters.getLoading;
    },
  },
  created() {
    this.$store.dispatch("fetchProfile");
  },
};
</script>

