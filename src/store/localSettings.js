import { defineStore } from 'pinia';

export default defineStore({
  id: 'localSettings',

  state: () => ({
    userSettings: null,
  }),

  actions: {
    async getSettings() {
      try {
        this.userSettings = JSON.parse(localStorage.getItem('settings'));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Unable to read user settings from localStorage', e);
        this.userSettings = null;
      }
    },
  },

  getters: {
    settings(state) {
      return state.userSettings;
    },
  },
});
