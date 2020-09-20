<template>
  <v-app>
    <nav-bar></nav-bar>
    <custom-alert></custom-alert>
    <v-main>
      <div class="custom-container">
        <!-- <v-breadcrumbs  :items="items"></v-breadcrumbs> -->
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import CustomAlert from "./components/Alert.vue";
export default {
  name: "App",
  components: {
    "nav-bar": NavBar,
    "custom-alert": CustomAlert,
  },
  // data: () => ({
  //   items: [
  //     {
  //       text: "Dashboard",
  //       disabled: false,
  //       href: "breadcrumbs_dashboard",
  //     },
  //     {
  //       text: "Link 1",
  //       disabled: false,
  //       href: "breadcrumbs_link_1",
  //     },
  //     {
  //       text: "Link 2",
  //       disabled: true,
  //       href: "breadcrumbs_link_2",
  //     },
  //   ],
  // }),
};
</script>

<style>
.custom-container {
  margin-right: 300px;
  margin-left: 300px;
  margin-top: 50px;
}
</style>
