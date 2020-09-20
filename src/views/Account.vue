<template>
  <div>
    <h1 class="display-3 mb-5">Your Account</h1>
    <v-divider class="my-5"></v-divider>
    <router-view></router-view>
  </div>
</template>

<script>
import Profile from "../components/account/Profile.vue";
export default {
  components: {
    profile: Profile,
  },
};
</script>