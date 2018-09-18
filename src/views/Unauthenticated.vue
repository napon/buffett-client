<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      Please login to proceed
    </v-layout>
  </v-container>
</template>
<script>
export default {
  mounted() {
    if (this.$auth.isAuthenticated()) {
      this.$router.replace('/');
    }
  },
};
</script>
