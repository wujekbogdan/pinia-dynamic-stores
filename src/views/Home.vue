<template>
  <div>
    <code>
      {{ userStore.userProfile }}
    </code>
    <p>
      <select name="settingsSource" id="settingsSource" v-model="settingsSource">
        <option value="local">
          use local settings
        </option>
        <option value="remote">
          use remote settings
        </option>
      </select>
    </p>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api';
import useUserStore from '@/store/user';

export default {
  name: 'App',

  setup() {
    const userStore = useUserStore();
    const settingsSource = ref('local');

    watch(settingsSource, (source) => userStore.init(source));

    userStore.init(settingsSource.value);

    return { userStore, settingsSource };
  },
};
</script>
