<template>
  <div>
    <v-alert v-for="(alert, index) in alerts" :key="index" :type="alert.type">{{
      alert.text
    }}</v-alert>
  </div>
</template>

<script>
export default {
  computed: {
    alerts() {
      return this.$store.getters.getAlerts;
    },
  },
};
</script>
