import auth0 from 'auth0-js';
import Vue from 'vue';

const ID_TOKEN = 'id_token';
const ACCESS_TOKEN = 'access_token';
const EXPIRES_AT = 'expires_at';

const webAuth = new auth0.WebAuth({
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  clientID: process.env.VUE_APP_AUTH0_CLIENT_ID,
  redirectUri: process.env.VUE_APP_AUTH0_CALLBACK_URI,
  responseType: 'token id_token',
  scope: 'openid',
});

const auth = new Vue({
  methods: {
    login() {
      webAuth.authorize();
    },
    handleAuthentication() {
      return new Promise((resolve, reject) => {
        webAuth.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            const { expiresIn, accessToken, idToken } = authResult;
            const expiresAt = JSON.stringify((expiresIn * 1000) + new Date().getTime());
            localStorage.setItem(EXPIRES_AT, expiresAt);
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(ID_TOKEN, idToken);
            resolve(this.buildUserSession());
          } else if (err) {
            reject(err);
          }
        });
      });
    },
    logout() {
      localStorage.clear();
    },
    isAuthenticated() {
      return new Date().getTime() < localStorage.getItem(EXPIRES_AT);
    },
    getIdToken() {
      return localStorage.getItem(ID_TOKEN);
    },
    getAccessToken() {
      return localStorage.getItem(ACCESS_TOKEN);
    },
    buildUserSession() {
      const userSession = {};
      if (this.isAuthenticated()) {
        userSession[ACCESS_TOKEN] = this.getAccessToken();
        userSession[ID_TOKEN] = this.getIdToken();
      }
      return userSession;
    },
  },
});

/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  install(VueInstance) {
    VueInstance.prototype.$auth = auth;
  },
};
