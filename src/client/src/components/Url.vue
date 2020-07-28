<template>
  <span>
    <div>
      <a :href="address" target="_blank" class="url-link">{{ address }}</a>
    </div>
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Url',
  props: {
    address: String,
  },
});
</script>

<style scoped>
.url-link {
  text-decoration: none;
  color: inherit;
}

.url-link:hover {
  text-decoration: underline;
}
</style>
