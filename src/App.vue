<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list dense>
        <router-link to="/">
          <v-list-tile @click="()=>{}">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Dashboard</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/settings">
          <v-list-tile @click="()=>{}">
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Settings</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Stock 101</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app fixed></v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
  props: {
    source: String,
  },
};
</script>

<style>
body a {
  text-decoration: inherit;
  color: inherit;
}

.router-link-exact-active .v-list__tile {
  background: rgba(255, 255, 255, 0.08);
}
</style>
