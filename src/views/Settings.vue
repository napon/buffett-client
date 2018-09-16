<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card>
            <v-card-title>
              <h4>Settings</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-list two-line subheader>
              <v-list-tile inactive>
                <v-list-tile-content>
                  <v-list-tile-title>Clear user data</v-list-tile-title>
                  <v-list-tile-sub-title>
                    Delete all saved/tracked stocks and ETFs.
                  </v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn icon @click="clearUserData">
                    <v-icon color='teal'>delete</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>

</template>

<script>
import EventBus from './../events/EventBus';
import Events from './../events/Events';

const DATA_CLEARED_MSG = 'Data deleted successfully.';

export default {
  name: 'settings',
  methods: {
    clearUserData() {
      localStorage.clear();
      this.$store.commit('resetState');
      EventBus.$emit(Events.SUCCESS_ALERT, DATA_CLEARED_MSG);
    },
  },
};
</script>

<style scoped>
</style>
