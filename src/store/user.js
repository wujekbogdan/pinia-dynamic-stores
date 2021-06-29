import { defineStore } from 'pinia';
import useLocalSettings from './localSettings';
import useRemoteSettings from './remoteSettings';

/**
 * @param {'local'|'remote'} source
 */
const useSettings = (source) => {
  const sources = {
    remote: useRemoteSettings,
    local: useLocalSettings,
  };

  return sources[source]();
};

export default defineStore({
  id: 'user',

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

      const userSettings = useSettings(this.source);

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
      const { getSettings } = useSettings(source);
      return getSettings();
    },
  },
});
