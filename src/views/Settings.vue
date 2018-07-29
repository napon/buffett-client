<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <h2>Hello setting</h2>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'settings',
};
</script>

<style scoped>
img {
  margin-top: 5vh;
}
</style>
