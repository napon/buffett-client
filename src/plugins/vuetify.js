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
import colors from 'vuetify/es5/util/colors';

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
  theme: {
    primary: colors.pink.darken1,
    secondary: colors.pink.lighten4,
    accent: colors.pink.base,
  },
});
