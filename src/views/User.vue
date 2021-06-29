<template>
  <div>
    <p>
      source: {{ src }}
    </p>
    <code>
      {{ userStore.userProfile }}
    </code>
  </div>
</template>

<script>
import { onUnmounted } from '@vue/composition-api';
import UseUserStoreFactory from '@/store/user';
import useLocalSettings from '@/store/localSettings';
import useRemoteSettings from '@/store/remoteSettings';

/**
 * @param {'local'|'remote'} source
 */
const UseSettingsFactory = (source) => {
  const sources = {
    remote: useRemoteSettings,
    local: useLocalSettings,
  };

  return sources[source];
};

export default {
  name: 'App',

  props: {
    source: {
      type: String,
      required: true,
      validator(source) {
        return ['remote', 'local'].includes(source);
      },
    },
  },

  setup(props) {
    const useSettings = UseSettingsFactory(props.source);
    const useUserStore = UseUserStoreFactory({
      useSettings,
      id: `myId_${props.source}`,
    });

    const userStore = useUserStore();

    userStore.init();

    onUnmounted(() => {
      // I would like to be able to call userStore.$destroy() to perform a full cleanup of
      // dynamically registered `userStore` store.
      // e.g. useUserStore.$destroy();
    });

    return { userStore, src: props.source };
  },
};
</script>
