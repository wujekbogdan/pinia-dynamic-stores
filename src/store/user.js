import { defineStore } from 'pinia';

/**
 * @param {Function} useSettings
 * @param {String} id
 */
export default ({ useSettings, id }) => defineStore({
  id: `user_${id}`,

  state: () => ({
    userData: {
      firsName: 'lorem',
      lastName: 'ipsum',
    },
  }),

  getters: {
    userProfile(state) {
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
    init() {
      const { getSettings } = useSettings();
      return getSettings();
    },
  },
});
