<template>
  <div>
    <User source="local" />
    <User source="remote" />
  </div>
</template>

<script>
import User from './User.vue';

export default {
  name: 'App',

  components: {
    User,
  },
};
</script>
