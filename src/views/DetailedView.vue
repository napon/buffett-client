<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs10 ref="card">
        <v-card color="#424242" class="white--text">
          <v-card-title primary-title>
            <div class="headline">{{ symbol }}</div>
          </v-card-title>
          <v-card-text>
            <div>Some text</div>
          </v-card-text>
          <v-card-actions>
            <router-link to="/">
              <v-btn icon>
                <v-icon>arrow_back</v-icon>
              </v-btn>
            </router-link>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      originRect: {},
      destinationRect: {},
      animationCount: 0,
    };
  },
  computed: {
    symbol() {
      return this.$route.params.symbol;
    },
  },
};
</script>

<style scoped>
.animate {
  transition: all 0.5s linear;
}
</style>
