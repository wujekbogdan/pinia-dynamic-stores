import { defineStore } from 'pinia';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

export default defineStore({
  id: 'remoteSettings',

  state: () => ({
    userSettings: null,
  }),

  actions: {
    async getSettings() {
      try {
        const response = await fetch(URL);
        this.userSettings = await response.json();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Unable to fetch user settings', e);
        this.userSettings = null;
      }
    },
  },

  getters: {
    settings() {
      return this.userSettings;
    },
  },
});
