import { defineStore } from 'pinia';

/**
 * @param {Function} useSettings
 * @param {String} id
 */
export default ({ useSettings, id }) => defineStore({
  id: `user_${id}`,

  state: () => ({
    source: null,
    userData: {
      firsName: 'lorem',
      lastName: 'ipsum',
    },
  }),

  getters: {
    userProfile(state) {
      if (!this.source) {
        return null;
      }

      const userSettings = useSettings();

      return {
        ...state.userData,
        ...userSettings.settings,
      };
    },
  },

  /**
     * @param {'local'|'remote'} source
     * @return {Promise<void>}
     */
  actions: {
    init(source) {
      this.source = source;
      const { getSettings } = useSettings();
      return getSettings();
    },
  },
});
