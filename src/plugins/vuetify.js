import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VCard,
  VChip,
  VCombobox,
  VToolbar,
  VDivider,
  VProgressCircular,
  VAutocomplete,
  VAlert,
  transitions,
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VCard,
    VChip,
    VCombobox,
    VToolbar,
    VDivider,
    VProgressCircular,
    VAutocomplete,
    VAlert,
    transitions,
  },
});
