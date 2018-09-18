<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-progress-circular
        indeterminate
        color="pink"
      ></v-progress-circular>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'callback',
  mounted() {
    this.$auth.handleAuthentication().then((userSession) => {
      this.$store.commit('setUserSession', userSession);
      this.$router.replace('/');
    });
  },
};
</script>
